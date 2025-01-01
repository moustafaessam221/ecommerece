# 🛍️ Modern E-Commerce Platform

A full-featured e-commerce platform built with React.js, showcasing modern web development practices and seamless integration with Firebase and DummyJSON API.

## ✨ Features

### 🔐 Authentication
- Email and password sign-in
- Google authentication
- Protected routes for authenticated users
- Persistent user sessions

### 🏪 Product Management
- Dynamic product listing with pagination
- Advanced search functionality with real-time suggestions
- Product filtering by:
  - Category
  - Price range
  - Rating
  - Availability
- Detailed product views with specifications

### 🛒 Shopping Experience
- Cart management
  - Add/remove items
  - Update quantities
  - Price calculations
- Wishlist functionality
- Secure checkout process
- Order history

### 👑 Admin Dashboard
- Product management
  - Add new products
  - Edit existing products
  - Remove products
- User management
- Order tracking
- Analytics overview

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Consistent user experience across devices

## 🛠️ Tech Stack

### Frontend
- React.js 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- React Router v6

### Backend & Services
- Firebase
  - Authentication
  - Firestore Database
- DummyJSON API

### Development Tools
- ESLint
- TypeScript
- Git

## 🚀 Getting Started


### Installation

1. Clone the repository
```bash
git clone https://github.com/moustafaessam221/ecommerece
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Firebase configuration
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_ADMIN_UID=your_admin_uid
```

4. Start the development server
```bash
npm start
```

The application will be available at `http://localhost:3000`



## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com/) for providing the product API
- [Firebase](https://firebase.google.com/) for authentication and database services
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## Live-Build

Project live Link: [https://dummy-commerece.vercel.app/]