FROM node:14.13.1-alpine

RUN mkdir -p /usr/src/lewis
WORKDIR /usr/src/lewis

COPY package*.json ./

RUN npm install

# Necessary files for building the app
COPY public/ public/
COPY src/ src/

# Copy env files
COPY .env* ./

# Copy config files
COPY tsconfig.json ./
COPY webpack.config.js ./

CMD ["npm", "start"]