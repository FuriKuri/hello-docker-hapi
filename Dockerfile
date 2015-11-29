FROM node:slim

# Bundle app source
COPY index.js /app/index.js
COPY package.json /app/package.json

RUN cd /app; npm install

ENV NODE_PORT 8000

EXPOSE 8000

ENTRYPOINT ["node", "/app/index.js"]