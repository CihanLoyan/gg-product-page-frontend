FROM node:lts-alpine
WORKDIR /product-page
COPY package.json .

RUN npm install
COPY . .
CMD ["npm", "start"]