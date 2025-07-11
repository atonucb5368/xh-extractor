// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4XxHjQWQVLaIkxcWCm9oy03dTeT0OCbo",
  authDomain: "microtaskearning.firebaseapp.com",
  databaseURL: "https://microtaskearning-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "microtaskearning",
  storageBucket: "microtaskearning.firebasestorage.app",
  messagingSenderId: "341069455740",
  appId: "1:341069455740:web:f229c5b19f23a0760904f9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();                    // Authentication
const database = firebase.database();           // Realtime Database
const firestore = firebase.firestore();         // Firestore
const storage = firebase.storage();             // Cloud Storage

// Firestore settings (optional)
firestore.settings({
    timestampsInSnapshots: true,
    merge: true
});

// Enable offline persistence for Firestore (optional)
firestore.enablePersistence()
    .catch((err) => {
        if (err.code === 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a time.
            console.warn('Offline persistence can only be enabled in one tab at a time.');
        } else if (err.code === 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            console.warn('Current browser does not support offline persistence');
        }
    });

// Admin credentials (in a real app, store these securely in Firebase)
const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "SecurePassword123!" // In production, use proper authentication
};

// Initialize admin auth (custom implementation for demo)
function authenticateAdmin(username, password) {
    return new Promise((resolve, reject) => {
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            resolve({ success: true });
        } else {
            reject(new Error("Invalid admin credentials"));
        }
    });
}

// Export services and functions
export { 
    auth, 
    database, 
    firestore, 
    storage, 
    authenticateAdmin 
};
