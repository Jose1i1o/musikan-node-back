<a href="https://www.linkpicture.com/view.php?img=LPic620b9ce0e5c08573905758"><img src="https://www.linkpicture.com/q/macHome.png" type="image"></a>

# Musikan

Musikan is an open community of independent artists and music lovers. Musikan is a streaming music web application for personal use where artists can share their music and discover songs, playlists and artists.

This app has been built with MongoDB, Express, Node, Firebase and Cloudinary the server side, and React, Redux for the client side.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## 📋 Requirements

You need to install NodeJs and Install the NPM packages with npm install command. You will also be required to create accounts for: - Firebase - MongoDB Atlas - Cloudinary

## 🔧 Installation

First, you will need to clone or fork the repository into your Github account:

### Fork on GitHub

<em>frontend</em> ->$ git clone https://github.com/AranBeitia/musikan-front \
<em>backend</em> -> $ git clone https://github.com/Jose1i1o/musikan-node-back

When you have all the dependencies installed you need to create two .env files, one located in client folder, one in server folder containing the new encryption keys. Please refer to the examples below:

#### The client .env file need to contain the next variables:

REACT_APP_WAVE_API_ROUTE = http://localhost:4000/api \
REACT_APP_WAVE_STATS_API_ROUTE = Your Laravel app route \
REACT_APP_FIREBASE_API_KEY = Your firebase api key \
REACT_APP_FIREBASE_AUTH_DOMAIN = Your firebase auth domain \
REACT_APP_FIREBASE_PROJECT_ID = Your firebase project id \
REACT_APP_FIREBASE_STORAGE_BUCKET = Your firebase storage bucket \
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = Your firebase messaging sender id \
REACT_APP_FIREBASE_APP_ID = Your firebase app id \
REACT_APP_FIREBASE_MEASUREMENT = Your firebase meaurement \
REACT_APP_API_BASE_URL = http://localhost:4000/api \
GENERATE_SOURCEMAP = your sourcemap or false

#### The server .env file need to contain the next variables:

MONGO_DB_URL_PRODUCTION = Your MongoDB Atlas connection url for producction \
MONGO_DB_URL_DEVELOPMENT = Your MongoDB Atlas connection url for development \
MONGO_DB_URL_TEST = Your MongoDB Atlas connection url for test

#### Server settings
PORT = 4000 \
CLIENT_URL="http://localhost:3000"

#### Firebase settings
FB_CERT_TYPE = Your FireBase cert type\
FB_CERT_PROJECT_ID = Your FireBase project id\
FB_CERT_PRIVATE_KEY_ID = Your FireBase private key id\
FB_CERT_PRIVATE_KEY = Your FireBase private key\
FB_CERT_CLIENT_EMAIL = Your FireBase client email\
FB_CERT_CLIENT_ID = Your FireBase client id\
FB_CERT_AUTH_URI = Your FireBase Auth uri\
FB_CERT_TOKEN_URI = Your FireBase token uri\
FB_CERT_AUTH_PROVIDER_X_509_CERT_URL = Your FireBase cert auth provider x 509 cert url\
FB_CERT_CLIENT_X_509_CERT_URL = Your FireBase cert client x 509 cert url

#### Cloudinary settings
CLOUDINARY_NAME = Your Cloudinary name\
CLOUDINARY_API_KEY = Your Cloudinary API Key\
CLOUDINARY_API_SECRET = Your Cloudinary API Secret


## 🦴 Project Structure
Folder structure 🗂
  
├── documentation // All project wireframes, PRD, and presentation files  
└── packages // Monorepo workspaces  
