# Node.js TypeScript API Boilerplate

## Overview

This project is a robust Node.js API boilerplate using TypeScript, Express, and MongoDB. It implements best practices for a scalable and maintainable backend application, including proper error handling, validation, testing, and security measures.

## Features

- **TypeScript**: For type safety and better developer experience
- **Express**: Fast, unopinionated, minimalist web framework for Node.js
- **MongoDB with Mongoose**: For database operations
- **JWT Authentication**: Secure route protection
- **Input Validation**: Using Joi for request data validation
- **Error Handling**: Centralized error handling mechanism
- **Logging**: Using Winston for logging
- **Security**:
  - CORS enabled
  - Helmet for security headers
  - Rate limiting
  - MongoDB sanitization
  - XSS protection
- **Testing**: Unit, Integration, and E2E tests using Jest and Supertest
- **Code Quality**: ESLint and Prettier configured
- **Environment Variables**: Using dotenv for environment variable management
- **API Features**: Pagination, sorting, and filtering utilities

## Prerequisites

- Node.js (v14+)
- MongoDB

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file with your configuration.

4. Run the development server:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:3000`.

## Scripts

- `npm run dev`: Start the development server
- `npm start`: Start the production server
- `npm run build`: Build the project
- `npm test`: Run all tests
- `npm run test:unit`: Run unit tests
- `npm run test:integration`: Run integration tests
- `npm run test:e2e`: Run end-to-end tests
- `npm run lint`: Lint the code
- `npm run format`: Format the code

## Project Structure
