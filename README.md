![961shots_so](https://github.com/user-attachments/assets/a42f6466-2fe1-4c01-a1db-8791cc74cd5a)

**Bitbye** is a streamlined web application designed to facilitate easy cryptocurrency conversions. Users can effortlessly input the amount they wish to convert, select their desired currencies, and receive real-time conversion results. 

## 💻 Working Mode
![271shots_so](https://github.com/user-attachments/assets/73b7b432-c93a-465d-bc59-6e616ee0ab1b)


Powered by the `CoinGate API`, Bitbye ensures accuracy by fetching the latest cryptocurrency market rates, providing users with reliable and instant conversion data through a user-friendly interface. Whether you are trading, monitoring rates, or simply converting values, Bitbye makes it simple and intuitive for both novice and experienced users.


## 🛠️ System Pre-requisites

Before running the Bitbye application, ensure your system meets the following requirements:

| Requirement   | Version | Description                                      |
|---------------|---------|--------------------------------------------------|
| ![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js) | 18.x or higher | Required for running both the server and client environments |
| ![npm](https://img.shields.io/badge/npm-9.x-red?logo=npm) | 9.x or higher  | Dependency management for both server and client              |
| ![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react) | 18.3.1        | Frontend framework for building the client interface          |
| ![Express.js](https://img.shields.io/badge/Express.js-4.20.0-blue?logo=express) | 4.20.0        | Backend framework for setting up the server                   |
| ![Axios](https://img.shields.io/badge/Axios-1.7.7-yellow?logo=axios) | 1.7.7         | HTTP client for API requests on the frontend                  |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-blue?logo=tailwind-css) | 3.4.10         | CSS framework for styling the client                          |
| ![ESLint](https://img.shields.io/badge/ESLint-9.9.0-purple?logo=eslint) | 9.9.0         | Linting tool for code quality in the client                   |
| ![dotenv](https://img.shields.io/badge/dotenv-16.4.5-brightgreen?logo=dotenv) | 16.4.5        | Environment variable management for the server                |



## 📑 Table of Contents

| Section          | Description                                        |
|------------------|----------------------------------------------------|
| [🚀 Run Locally](#-run-locally) | Instructions on how to set up and run the project locally. |
| [⚠️ Possible Error](#-possible-error) | Information on potential errors and troubleshooting. |
| [📖 User Guide](#-user-guide)  | How to use the application for cryptocurrency conversion. |
| [✨ Features](#-features) | Overview of key features and functionalities of the app. |
| [🤝 Contributing](#-contributing) | Guidelines on how to contribute to the project. |

## 🚀 Run Locally

To run this project locally, follow these steps:

1. Clone the repository:
   ```shell
   git clone https://github.com/shubhamsharmaer/bitbye.git
   ```

2. Navigate to the project directory:
   ```shell
   cd bitbye
   ```

3. Create a new file named `.env` in the root directory and copy the environment variables from `.envSample`
   ```makefile
   VITE_API_URL=/api/v2/rates/merchant/BTC
   VITE_PROXY_URL=https://cors-anywhere.herokuapp.com/corsdemo/proxy
   ```

4. Install the dependencies:
   ```shell
   npm install
   ```

5. Start the development server:
   ```shell
   npm run dev
   ```

   This will start the application on `http://localhost:5173`.

## ⚠️ Possible Error
   - If the conversion does not work then try to go [cors-anywhere](https://cors-anywhere.herokuapp.com/corsdemo)
   - And click on `Request temporary access to the demo server`
   - Then try `npm run dev` and conversion again

## 📖 User Guide

1. Open the application in your browser.

2. Select the currency you want to convert from the dropdown menu.

3. Enter the amount you want to convert in the input field.

4. Click the "Convert" button to see the converted rate.

5. You can also select a different currency to convert back to the original currency.

## ✨ Features

- Fetches the latest market rates from the CoinGate API.
- Allows users to convert cryptocurrency rates in real-time.
- Provides a simple and intuitive user interface.
- Supports multiple currencies for conversion.

## 🤝 Contributing
You can help improve code quality, fix bugs, or add new features to make the app more robust.
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

- Fork the Project
- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## 📧 Contact
For any inquiries, feel free to contact the project maintainer:

Shubham Sharma -  [LinkedIn](https://www.linkedin.com/in/shubhamsharmaer/) | [Email](shubhamgetmail@gmail.com)

