# Jal Shakti: Groundwater Quality Calculator

Jal Shakti is a web application designed to streamline the process of calculating the Heavy Metal Pollution Index (HMPI) for groundwater quality assessment. It provides environmental professionals, researchers, and students with a user-friendly tool to automate complex calculations, visualize data, and generate reports.

This project is developed in response to the problem statement (ID: 25067) from the **Ministry of Jal Shakti**, **Central Ground Water Board (CGWB)**, to design and develop an application for Heavy Metal Pollution indices.

![Jal Shakti Screenshot](https://storage.googleapis.com/aida-images/studio-readme-aquacheck.png)

## The Challenge: Heavy Metal Pollution in Groundwater

The presence of heavy metals in drinking water, even at trace levels, poses significant health risks, making accurate and timely assessment critical for public safety and environmental monitoring. Although several indices exist for assessing heavy metal pollution, their manual computation is tedious, time-consuming, inconsistent, and vulnerable to human error due to the complexity and variability of formulas.

## Our Solution: Jal Shakti

Jal Shakti is an automated, user-friendly application that can compute Heavy Metal Pollution Indices (HMPI) in groundwater using standard formulas with minimal manual intervention. This tool streamlines calculations, reduces errors, and provides reliable outputs for scientists, researchers, and policymakers.

## Key Features

- **Automated HMPI Calculation**: Instantly computes heavy metal pollution indices using standard methodologies, reducing manual effort and error-prone processes.
- **AI-Powered OCR**: Uses a Genkit AI flow with OCR to automatically extract heavy metal data from uploaded lab reports, saving time and reducing manual errors.
- **Data Integration with Geolocation**: Supports manual data input and automatically fetches the user's current geographical coordinates (Latitude and Longitude) for accurate location tagging of water samples.
- **Groundwater Quality Categorization**: Classifies groundwater quality into clear levels—'Low', 'Medium', 'High', and 'Very High'—based on the calculated HMPI values.
- **Data Visualization**: Includes charts to visualize HMPI trends over time, helping users understand pollution patterns.
- **Report Generation**: Allows users to generate and export assessment reports in PDF or CSV format.
- **History Tracking**: Keeps a record of past assessments for historical analysis and comparison.

## Impact

The application provides accessible and reliable insights into groundwater heavy metal contamination, enabling better decision-making, enhanced environmental monitoring, and improved public health protection.

## Technical Approach (Revised)

### Technologies to be used

*   **Firebase Hosting**: A fast, secure, and reliable web hosting service provided by Google.
    *   **Our Use**: To deploy and serve our responsive Next.js/React application to users worldwide.
*   **Google Cloud Functions**: A serverless platform that lets you run your code in the cloud without worrying about managing servers.
    *   **Our Use**: To execute our Python code for the core HMPI calculations whenever a user uploads data.
*   **Google Cloud SQL**: A fully managed database service that handles the setup, maintenance, and administration of relational databases like PostgreSQL.
    *   **Our Use**: To securely store and manage all groundwater data and calculation results using a PostgreSQL database with the PostGIS extension for geo-spatial queries.
*   **Firebase Authentication**: A service that provides secure, ready-to-use backends and simple SDKs to handle user sign-up and login.
    *   **Our Use**: To provide a secure and easy login system for scientists, researchers, and officials.
*   **Leaflet.js / Mapbox**: Open-source frontend libraries for creating interactive maps.
    *   **Our Use**: To build a rich, interactive map for visualizing pollution data and identifying contamination hotspots.

### Methodology and process for implementation

(This should be represented as a visual flowchart in your actual PPT. The text below describes the flow.)

1.  **User Interaction**: The user accesses the web application hosted on Firebase Hosting.
2.  **Authentication**: The user securely logs in or signs up using Firebase Authentication.
3.  **API Request**: The frontend sends the uploaded data file to a secure API endpoint powered by a Google Cloud Function.
4.  **Core Calculation**: The Cloud Function executes the Python code, performing the complex HMPI calculations on the provided data.
5.  **Database Interaction**: The function stores the results and fetches historical data from the Google Cloud SQL database.
6.  **Response & Visualization**: The Cloud Function sends the final results back to the frontend, which then displays the pollution indices and maps the data using Leaflet.js.

## Getting Started

To run this project locally, follow these steps:

1.  **Install Dependencies**:
    Open your terminal and run the following command to install the necessary packages.

    ```bash
    npm install
    ```

2.  **Run the Development Server**:
    Once the dependencies are installed, start the Next.js development server.

    ```bash
    npm run dev
    ```

    The application will be available at [http://localhost:9002](http://localhost:9002).

3.  **Run the Genkit AI Flows (Optional)**:
    The AI flows for this project are managed by Genkit. To run the Genkit development server and see the flows in the developer UI, use:
    ```bash
    npm run genkit:dev
    ```
    This will start the Genkit UI, typically on port 4000.

## Project Structure

- `src/app/`: Contains the main pages of the application, following the Next.js App Router structure.
- `src/components/`: Includes all the reusable React components used throughout the application, organized by feature.
- `src/ai/flows/`: This directory houses the Genkit AI flows, such as the OCR flow for extracting data from lab reports.
- `src/lib/`: Contains utility functions, sample data, and other shared resources.
- `public/`: For static assets like images and fonts.

This project was bootstrapped with [Firebase Studio](https://firebase.google.com/docs/studio).
