
const firebaseConfig = {
    // apiKey: "AIzaSyBQ2TdVBdf-MVbVQWXrW-MPssQW5PbWcZQ",
    // authDomain: "dev-tips-n-tricks.firebaseapp.com",
    // databaseURL: "https://dev-tips-n-tricks.firebaseio.com",
    // projectId: "dev-tips-n-tricks",
    // storageBucket: "dev-tips-n-tricks.appspot.com",
    // messagingSenderId: "810173801564",
    // appId: "1:810173801564:web:1257d16f0b339e97b43299",
    // measurementId: "G-XCYLPESGSF"
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATBASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_MEASURMENT_ID
  };


export default firebaseConfig;