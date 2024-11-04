# Weekly-Weather-Dashboard

Welcome to the Weather Dashboard application! This project aims to provide users with a user-friendly interface to access weather data for various cities using the OpenWeather API.

## Overview
The Weather Dashboard allows users to search for weather forecasts for specific locations. The application retrieves data from the OpenWeather API and displays a 5-day weather forecast, making it easier for users to plan their activities based on weather conditions.

## Getting Started
To get started with the Weather Dashboard, follow these instructions to set up your development environment.

## Prerequisites
Node.js and npm installed on your machine.
An OpenWeather API key 
Wait for your API key to activate (may take up to 2 hours).

## Installation
-Clone the repository:
-Navigate to the project directory:
-Install the necessary dependencies:

## Configuration
Create a .env file in the root of the project and add your API key:

API_KEY=your_openweather_api_key_here
Ensure that the front end is properly connected to the back end.

## Usage
Start the server:
npm start

Open your browser and navigate to http://localhost:3000 to view the application.
Enter a city name in the search bar to retrieve the weather forecast for the next five days.

## API Endpoint
The application uses the following OpenWeather API endpoint to fetch weather data:

https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

Make sure to replace {lat}, {lon}, and {API key} with the appropriate latitude, longitude, and your OpenWeather API key.

## Deployment
The Weather Dashboard is deployed on Render. You can access it at the following link:[coming soon]

## Contributing
Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
