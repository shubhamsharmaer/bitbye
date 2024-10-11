# Bitbye

Bitbye is a web application that allows users to convert cryptocurrency rates with ease. It provides a simple and intuitive interface for users to input the amount they want to convert and select the desired currency. The application fetches the latest market rates from the CoinGate API and performs the conversion in real-time.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```shell
   git clone https://github.com/your-username/bitbye.git
   ```

2. Navigate to the project directory:
   ```shell
   cd bitbye
   ```

3. Create a new file named `.env` in the root directory and add the following environment variables:
   ```makefile
   COINGATE_API_KEY=YOUR_API_KEY
   COINGATE_API_SECRET=YOUR_API_SECRET
   ```

   Replace `YOUR_API_KEY` and `YOUR_API_SECRET` with your actual CoinGate API credentials.

4. Install the dependencies:
   ```shell
   npm install
   ```

5. Start the development server:
   ```shell
   npm run dev
   ```

   This will start the application on `http://localhost:3000`.

## Usage

1. Open the application in your browser.

2. Select the currency you want to convert from the dropdown menu.

3. Enter the amount you want to convert in the input field.

4. Click the "Convert" button to see the converted rate.

5. You can also select a different currency to convert back to the original currency.

## Features

- Fetches the latest market rates from the CoinGate API.
- Allows users to convert cryptocurrency rates in real-time.
- Provides a simple and intuitive user interface.
- Supports multiple currencies for conversion.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Vite: A build tool for modern web applications.
- Tailwind CSS: A utility-first CSS framework.
- Axios: A promise-based HTTP client for making API requests.
- ESLint: A pluggable JavaScript linter.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

