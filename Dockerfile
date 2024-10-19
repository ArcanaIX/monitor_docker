FROM node:20.8-alpine
COPY . .
RUN npm install
EXPOSE 3002
CMD ["npm", "run", "dev"]