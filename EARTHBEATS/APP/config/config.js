// Import the functions you need from the SDKs you need
//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: "AIzaSyAts1qiZQbAVEj0DqIhsryjrQmYdXGsAFk",
    authDomain: "beatspace-7dd2a.firebaseapp.com",
    databaseURL: "https://beatspace-7dd2a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "beatspace-7dd2a",
    storageBucket: "beatspace-7dd2a.appspot.com",
    messagingSenderId: "283399544899",
    appId: "1:283399544899:web:72dfa6821cfbafa499b4f6",
    measurementId: "G-B0RG1V4S2R"
};
firebase.initializeApp(firebaseConfig);
// SIGN ANONYMOUS USER ----
firebase.auth().onAuthStateChanged((user) => {
    console.log("onAuthStateChanged");
    if (user) {
        console.log(user);
        // User is signed in.
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        // console.log(uid);
    } else {
        // No user is signed in.
    }
});
firebase
    .auth()
    .signInAnonymously()
    .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // console.log("anonymously auth error ----- " + errorCode);
        // console.log(errorCode);
    });
// Get a reference to the database service
const DATABASE = firebase.database();
function SEND_MESSAGE(_data, path = ESPDATA) {
    // _data = {'data': _data, 't_created': Date.now()};
    DATABASE.ref(path).set(_data);
}

var ref = firebase.database().ref("users");
firebase.database().ref().on('value', function(snapshot) {
 
  setUser(snapshot);
  setHome(snapshot);
  calibrateSlider(snapshot);


//   getUseTarget(snapshot);
});