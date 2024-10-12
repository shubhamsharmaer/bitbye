# Bitbye

**Bitbye** is a streamlined web application designed to facilitate easy cryptocurrency conversions. Users can effortlessly input the amount they wish to convert, select their desired currencies, and receive real-time conversion results. 

![271shots_so](https://github.com/user-attachments/assets/73b7b432-c93a-465d-bc59-6e616ee0ab1b)


Powered by the `CoinGate API`, Bitbye ensures accuracy by fetching the latest cryptocurrency market rates, providing users with reliable and instant conversion data through a user-friendly interface. Whether you are trading, monitoring rates, or simply converting values, Bitbye makes it simple and intuitive for both novice and experienced users.



## 📑 Table of Contents

| Section          | Description                                        |
|------------------|----------------------------------------------------|
| [🚀 Run Locally](#run-locally) | Instructions on how to set up and run the project locally. |
| [⚠️ Possible Error](#possible-error) | Information on potential errors and troubleshooting. |
| [📖 Usage](#usage)  | How to use the application for cryptocurrency conversion. |
| [✨ Features](#features) | Overview of key features and functionalities of the app. |
| [🤝 Contributing](#contributing) | Guidelines on how to contribute to the project. |

## Run Locally

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

## Possible Error
   - If the conversion do not work then try to go [HERE](https://cors-anywhere.herokuapp.com/corsdemo)
   - And click on `Request temporary access to the demo server`
   - Try `npm run dev` again

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

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

