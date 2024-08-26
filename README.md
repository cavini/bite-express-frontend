# Bite Express - Restaurant Finder & Order Management App

Welcome to **Bite Express**! This application is designed to offer a seamless experience for both restaurant customers and owners, allowing for a wide range of functionalities from searching for restaurants to managing orders in real-time.

## 🌟 Features

### For Customers:
- 🔍 **Search & Filter**: Find restaurants using advanced filtering and sorting options.
- 📜 **Pagination**: Navigate through pages of restaurant listings with ease.
- 🍽️ **Order Food**: Place orders directly from the app and track your order status in real-time.
- ⏰ **Order Tracking**: Get real-time updates on your order status and estimated delivery time.

### For Restaurant Owners:
- 🏢 **Restaurant Management**: Create and manage restaurant profiles.
- 🍴 **Menu Management**: Add and update menu items to serve your customers.
- 📦 **Order Management**: Accept, update, and manage customer orders.
- ⏳ **Real-time Updates**: Notify customers about the estimated time of arrival for their orders.

## 🛠️ Tech Stack

- ⚛️ **React**: A JavaScript library for building user interfaces.
- 💻 **TypeScript**: A strongly typed programming language that builds on JavaScript.
- 🚦 **React Router DOM**: For handling routing within the application.
- 🔄 **React Query**: For fetching, caching, synchronizing, and updating server state in React.
- 🧪 **Zod**: TypeScript-first schema declaration and validation library.
- 🎣 **React Hook Form**: For easy and performant form handling in React.
- 🎨 **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- 🔗 **React Hooks & Custom Hooks**: For reusable logic throughout the app.
- 🔐 **Auth0**: Authentication and authorization platform for securing the app.
- 💳 **Stripe**: For handling payments securely and efficiently.
- 🌿 **ShadCN**: For maintaining a consistent and modern design system across the app.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (LTS version)
- npm or yarn

### Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository:**
   ```bash
   git clone git@github.com:cavini/bite-express-frontend.git
   
   
2. **Install dependencies:**

  ```bash
  npm install
  # or
  yarn install
```


3. **Set up environment variables:**

Create a .env file in the root directory of the frontend repo.
Add the following environment variables:
makefile

```bash
VITE_AUTH0_DOMAIN=<Your Auth0 Domain>
VITE_AUTH0_CLIENT_ID=<Your Auth0 Client ID>
VITE_AUTH0_CALLBACK_URL=<Your Auth0 Callback URL>
VITE_AUTH0_AUDIENCE=<Your Auth0 Application Name>
VITE_API_BASE_URL=http://localhost:7000
```
Note: You'll need to set up free accounts on Auth0, Stripe, MongoDB, and Cloudinary to get the necessary credentials.


4. **Start the development server:**

```bash 
npm run dev
# or
yarn dev
```
Open your browser and navigate to:

```bash 
http://localhost:5173
```
