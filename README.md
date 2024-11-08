# Weather Dashboard

A responsive and visually appealing weather dashboard that displays the current weather and a 5-day forecast for a specified city. The application integrates with the OpenWeatherMap API for real-time weather data and uses a JSON server to manage a list of favorite cities.

## Features

- **City Search**: Search for a city to view the current weather and 5-day forecast.
- **Favorite Cities**: Add cities to a list of favorites and easily view weather data for these cities.
- **Temperature Toggle**: Switch between Celsius and Fahrenheit for temperature display.
- **Persistent Last Searched City**: The application remembers the last searched city using local storage.

## Technologies Used

- **React**: Component-based front-end library.
- **Axios**: For API requests to OpenWeatherMap.
- **JSON Server**: Simulated backend to manage favorite cities.
- **CSS**: Custom CSS for responsive and attractive styling.
- **Local Storage**: For storing the last searched city.

## Prerequisites

- **Node.js** (version >= 14) and **npm** installed on your machine.
- An API key from [OpenWeatherMap](https://home.openweathermap.org/api_keys).

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nisar001/whether-app
   cd weather-dashboard
Install dependencies:

bash
npm install
Set up environment variables:

Create a .env file in the root directory of the project.
Add your OpenWeatherMap API key to the .env file:
plaintext
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
Note: Make sure to replace your_openweathermap_api_key with your actual API key from OpenWeatherMap.
Start the JSON server:

In a separate terminal, run:bash
npx json-server --watch db.json --port 5000
This command will start the JSON server on port 5000, which will act as the backend for managing favorite cities.
Start the React development server:

bash
npm start
Your app will open in the browser at http://localhost:3000.
Usage
Search for a City:

Enter a city name in the search bar and click on "Search" to view the current weather and 5-day forecast.
Add to Favorites:

After searching for a city, click on "Add to Favorites" to save it to your favorites list.
View Favorite Cities:

Click on any favorite city from the favorites list to quickly view its weather data.
Toggle Temperature Units:

Use the toggle to switch between Celsius and Fahrenheit.
Last Searched City:

The application will automatically load the last searched city on refresh, providing a personalized experience.
Folder Structure
bash
weather-dashboard/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── App.js               # Main component
│   │   ├── Search.js            # Search component
│   │   ├── WeatherDisplay.js    # Display component for weather data
│   │   └── Favorites.js         # Favorites component
│   ├── styles/
│   │   ├── App.css              # Global styling for the app
│   │   ├── WeatherDisplay.css   # Styling for weather display component
│   │   ├── Search.css           # Styling for search component
│   │   └── Favorites.css        # Styling for favorites component
│   ├── App.js                   # Main entry point
│   ├── index.js                 # Application entry point
│   └── ...
├── db.json                       # JSON server data file for favorite cities
├── .env                          # Environment variables
└── README.md                     # Documentation
Configuration
API Key:

Ensure that the API key is properly set in the .env file as REACT_APP_WEATHER_API_KEY.
Restart the development server after setting up the .env file.
JSON Server Configuration:

The JSON server uses db.json as a simulated backend for managing favorite cities. It operates on port 5000 by default.
Troubleshooting
401 Unauthorized Error: Ensure the API key is correct and is properly loaded in the .env file.
JSON Server Issues: If the JSON server is not running, restart it with npx json-server --watch db.json --port 5000.
Environment Variables Not Loading: Restart the development server after adding or modifying the .env file.
Additional Information
Obtaining an OpenWeatherMap API Key
Go to OpenWeatherMap and sign up for an account.
Once signed in, go to the API keys section and create a new API key.
Copy the API key and paste it in your .env file as described in the setup instructions.
Future Improvements
Error Handling: Add more robust error handling for API responses.
Enhanced Styling: Further refine the CSS for improved responsiveness and visual appeal.
Geolocation: Use geolocation to automatically display the user's current location weather.
