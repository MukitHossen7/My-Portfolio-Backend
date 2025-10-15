# My Portfolio Backend

## Live Link

```
https://my-portfolio-backend-kappa-nine.vercel.app/
```

## Features

## Technologies Used

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma**
- **PostgreSQL**
- **jsonwebtoken**

## Installation & Setup

```
git clone https://github.com/MukitHossen7/My-Portfolio-Backend.git
```

```
cd My-Portfolio-Backend
```

```
npm install
```

Create a **.env** file and add:

```
PORT="8080"
NODE_ENV="development"
DATABASE_URL="postgresql://demo_user:demo_password@localhost:5432/demo_portfolio_db?schema=public"schema=public"
JWT_ACCESS_SECRET="super_secret_jwt_key_example_123"
JWT_ACCESS_EXPIRATION="2d"
CORS_ORIGIN="http://localhost:3000"
```

```
npm run dev
```

## Project Structure

## API Endpoints

## Dependencies

- "@types/compression": "^1.8.1",
- "@types/cors": "^2.8.19",
- "@types/node": "^24.5.2",
- "prisma": "^6.16.2",
- "ts-node-dev": "^2.0.0",
- "tsx": "^4.20.6",
- "typescript": "^5.9.2"

## DevDependencies

- "@prisma/client": "^6.16.2",
- "@types/bcrypt": "^6.0.0",
- "@types/cookie-parser": "^1.4.9",
- "@types/jsonwebtoken": "^9.0.10",
- "bcrypt": "^6.0.0",
- "compression": "^1.8.1",
- "cookie-parser": "^1.4.7",
- "cors": "^2.8.5",
- "express": "^5.1.0",
- "http-status-codes": "^2.3.0",
- "jsonwebtoken": "^9.0.2",
- "slugify": "^1.6.6",
- "zod": "^3.25.76"
