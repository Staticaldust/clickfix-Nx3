npm install -g nx
npx create-nx-workspace@latest clickfix
npm install --save-dev @nrwl/react
npx nx g @nrwl/react:app client
npm install --save-dev @nrwl/node
npx nx g @nrwl/node:app server
npm install --save-dev @types/node @types/validator
npm install sequelize reflect-metadata sequelize-typescript
npm install trpc reflect-metadata pg sequelize
npm install --save-dev @types/pg @types/sequelize
npm install @trpc/server@^10.45.0 @types/sequelize@^4.28.19 cors@^2.8.5 dotenv@^16.3.1 pg@^8.11.3 sequelize@^6.35.2 sequelize-typescript@^2.1.6 zod@^3.0.0
npm install --save-dev @types/cors@^2.8.13 @types/node@^20.10.0 eslint@^8.40.0 tsx@^4.0.0 typescript@^5.3.3