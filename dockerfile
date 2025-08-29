FROM jenkins/ssh-agent:jdk17

USER root

# Install dependencies for Cypress + Chrome/Firefox
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    wget \
    gnupg \
    xvfb \
    libgtk2.0-0 \
    libgbm1 \
    libnss3 \
    libxss1 \
    libasound2 \
    ca-certificates \
    fonts-liberation \
    chromium \
    libayatana-appindicator3-1 \
    xdg-utils \
    firefox-esr \
    && rm -rf /var/lib/apt/lists/*

# Verify installs
RUN chromium --version && firefox --version

# Install Node.js (LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs \
    && npm --version && node --version

# Switch to jenkins user
USER jenkins
WORKDIR /home/jenkins

# Copy project dependency files and install
COPY package.json package-lock.json* ./
RUN npm ci && npx cypress install

# Cache + PATH
ENV CYPRESS_CACHE_FOLDER=/home/jenkins/.cache/Cypress
ENV PATH=$PATH:/home/jenkins/node_modules/.bin

# Optional: wrap Cypress in xvfb for GUI tests
USER root
RUN echo "xvfb-run -a \$@" > /usr/local/bin/xvfb-cypress \
    && chmod +x /usr/local/bin/xvfb-cypress
USER jenkins

WORKDIR /app