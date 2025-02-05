# Suggestify

**Live Link**: [Suggestify](https://product-recommendation-a9fbe.web.app/)

## Project Overview

Suggestify is a web-based platform where users can manage their product-related queries and recommendations. It allows users to interact with others by viewing, adding, updating, or deleting queries and recommendations. Additionally, the platform provides detailed information and alternative product suggestions.

## Features

- **User Authentication**: 
  - Firebase Authentication for secure login and registration.
  
- **User Authorization**:
  - JWT (JSON Web Token) is used to authorize actions for secure API endpoints.

- **CRUD Functionality**:
  - Users can create, read, update, and delete their own product-related queries.
  - Users can view others' queries and see product details along with alternative recommendations.
  - Users can add, delete, or update recommendations for products.

- **Search Functionality**:
  - A robust search feature to help users quickly find relevant queries or recommendations.

- **Grid System**:
  - Products and recommendations are displayed in a user-friendly grid layout.

## Tech Stack

### Frontend:
- Tailwind, React
- Firebase Hosting

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB

### Authentication:
- Firebase Authentication
- JWT (JSON Web Tokens)

### Npm Packages use(Dependencies):
- axios
- firebase
- lottie-react
- react
- react-awesome-reveal
- react-dom
- react-icons
- react-router-dom
- sweetalert2
- swiper


## Usage

1. Register or login using Firebase Authentication.
2. Add your product queries and recommendations.
3. Browse and search for other users' queries and recommendations.
4. Update or delete your content as needed.


## Installation & Setup

Follow these steps to run the project locally:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (if running locally)

### Step 1: Clone the Repository

git clone https://github.com/YounusMontasir/suggestify-product-recommendation-client.git
cd suggestify-product-recommendation-client

### Step 2: Install Dependencies
npm install

### Step 3: Set Up Environment Variables
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_SERVER_URL=your_backend_api_url

### Step 4: Run the Development Server
npm run dev

