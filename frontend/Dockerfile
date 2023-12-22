FROM node:16

WORKDIR /app
COPY . . 
RUN npm i
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "prod"]