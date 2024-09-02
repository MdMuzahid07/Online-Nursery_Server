# welcome to my project repository

# Project Name
Flora Essence

## Description
This project is an online nursery website developed using React, Redux, Node.js, Express.js, MongoDB, Mongoose(ODM). The platform allows users to browse, filter, search for products, manage their shopping cart, and make online payments. It also includes a product and category management section for administrators to perform CRUD operations.

## Features

- **Cloud Storage**: Integration with Cloudinary for media uploads.
- **File Handling**: File uploads are handled with Multer.
- **Validation**: Input validation using Zod.
- **Environment Management**: Configuration with dotenv.
- **Error Handling**: HTTP status management with http-status.
- **Cross-Origin Resource Sharing**: CORS support.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MdMuzahid07/Online-Nursery_Server.git
   ```
   
2. **Navigate to the project directory**:
   ```bash
   cd your-repository
   ```

3. **Install dependencies**:
   ```bash
   yarn install
   ```

## Scripts

- **Start Development Server**: 
  ```bash
  yarn start-dev
  ```
  It uses `ts-node-dev` to run the server using TypeScript.

- **Start Production Server**:
  ```bash
  yarn start
  ```
  Runs the compiled JavaScript from the `dist` folder.

- **Build Project**:
  ```bash
  yarn build
  ```
  Compiles TypeScript files into JavaScript.

- **Lint Code**:
  ```bash
  yarn lint
  ```
  Lints the code without fixing issues.

- **Lint and Fix Code**:
  ```bash
  yarn lint-fix
  ```
  Lints and automatically fixes code issues.

- **Prettier Format**:
  ```bash
  yarn prettier
  ```
  Formats code using Prettier.

- **Prettier Fix**:
  ```bash
  yarn prettier-fix
  ```

## Dependencies

- **bcrypt**: For hashing passwords.
- **cloudinary**: For cloud-based media management.
- **cors**: For handling cross-origin requests.
- **dotenv**: For environment variable management.
- **express**: Web framework for Node.js.
- **http-status**: For HTTP status codes.
- **mongoose**: MongoDB object modeling tool.
- **multer**: Middleware for handling file uploads.
- **zod**: Type-safe validation.

## Development Dependencies

- **eslint**: For linting JavaScript and TypeScript code.
- **prettier**: For code formatting.
- **typescript**: TypeScript language support.
- **ts-node-dev**: For running and debugging TypeScript code.

## Usage

Ensure that your environment variables are set up correctly in a `.env` file. You can find an example of the required environment variables in `.env.example`.

