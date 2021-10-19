FROM node:lts-alpine
WORKDIR /product-page
COPY . .
COPY package.json .

RUN npm install
CMD ["npm", "start"]