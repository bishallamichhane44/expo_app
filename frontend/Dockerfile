FROM node:14

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    build-essential \
    libssl-dev \
    libffi-dev \
    python3-dev \
    unzip

# Install Expo CLI
RUN npm install -g expo-cli

# Install Android SDK
ENV ANDROID_HOME /usr/local/android-sdk
RUN mkdir -p $ANDROID_HOME && \
    cd $ANDROID_HOME && \
    curl -o sdk-tools.zip https://dl.google.com/android/repository/commandlinetools-linux-6858069_latest.zip && \
    unzip -q sdk-tools.zip -d cmdline-tools && \
    rm sdk-tools.zip && \
    mv cmdline-tools tools

# Add Android SDK to PATH
ENV PATH $PATH:$ANDROID_HOME/tools/bin

# Set working directory (added)
WORKDIR /app/frontend

# Copy package.json and package-lock.json (added)
COPY package*.json ./

# Install npm dependencies (added)
RUN npm install



# Copy application code
COPY . /app/frontend
WORKDIR /app/frontend
EXPOSE 19000 19001 19002
CMD ["expo", "start", "--tunnel"]
