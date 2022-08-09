import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const initializeConfigue = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCboOljv5j_j2m2Gpy3v1KDL1iqHo6hduk",
        authDomain:"doctalk-medical.firebaseapp.com",
        projectId: "doctalk-medical",
        storageBucket: "doctalk-medical.appspot.com",
        messagingSenderId:"142017913339",
        appId: "1:142017913339:web:74f3ea822be4ca0a4b6b5e",
        measurementId: "G-YZL2DSHT3R",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    getAuth(app);
};

export default initializeConfigue;
