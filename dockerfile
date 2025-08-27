FROM jenkins/agent:latest-jdk11

USER root

# Install system dependencies for Cypress
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    xvfb \
    libgtk2.0-0 \
    libgbm1 \
    libnss3 \
    libxss1 \
    libasound2 \
    fonts-liberation \
    libappindicator3-1 \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js via nvm
ENV NVM_DIR=/root/.nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash \
    && . "$NVM_DIR/nvm.sh" \
    && nvm install 20 \
    && nvm alias default 20 \
    && nvm use default

ENV PATH=$NVM_DIR/versions/node/v20.0.0/bin:$PATH

# Install Cypress globally + reporters
RUN npm install -g cypress cypress-iframe cypress-mochawesome-reporter

USER jenkins