// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDummyAPIKeyDummyAPIKeyDummyAPIKey",
    authDomain: "your-project-id.firebaseapp.com",
    databaseURL: "https://your-project-id-default-rtdb.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:dummyappid1234567890"
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
