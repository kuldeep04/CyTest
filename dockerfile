# Base image
FROM jenkins/ssh-agent:jdk17

USER root

# Install dependencies for Cypress with Chromium
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
    libgconf-2-4 \
    ca-certificates \
    fonts-liberation \
    chromium \
    chromium-sandbox \
    libayatana-appindicator3-1 \
    xdg-utils \
    # Additional dependencies
    libx11-xcb1 \
    libxcb-dri3-0 \
    libdrm2 \
    libxkbcommon0 \
    libxcomposite1 \
    libxrandr2 \
    libgbm-dev \
    libxshmfence1 \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js (LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs \
    && npm --version && node --version

# Create symlinks for Cypress compatibility (so it recognizes Chromium as Chrome)
RUN ln -sf /usr/bin/chromium /usr/bin/google-chrome \
    && ln -sf /usr/bin/chromium /usr/bin/chrome

# Verify browser
RUN echo "Chromium version:" && chromium --version \
    && echo "Chrome symlink:" && google-chrome --version

# Set Jenkins workspace
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Fix permissions and create cache directories
RUN mkdir -p /home/jenkins/.cache /home/jenkins/.config \
    && chown -R jenkins:jenkins /app /home/jenkins/.cache /home/jenkins/.config

# Switch to jenkins user
USER jenkins

# Set Cypress environment variables
ENV CYPRESS_CACHE_FOLDER=/home/jenkins/.cache/Cypress
ENV PATH=$PATH:/app/node_modules/.bin
ENV CI=true
ENV DISPLAY=:99
# Tell Cypress to use chromium
ENV CYPRESS_BROWSER=chromium

# Install npm dependencies
RUN npm ci --legacy-peer-deps --no-optional

# Install Cypress
RUN npx cypress install

# Copy the rest of the application code
USER root
COPY . .
RUN chown -R jenkins:jenkins /app
USER jenkins

# Create xvfb wrapper script
USER root
RUN echo '#!/bin/bash\nxvfb-run -a --server-args="-screen 0 1280x1024x24" npx cypress $@' > /usr/local/bin/cypress-xvfb \
    && chmod +x /usr/local/bin/cypress-xvfb \
    && chown jenkins:jenkins /usr/local/bin/cypress-xvfb
USER jenkins

# Default workdir for Jenkins job
WORKDIR /app