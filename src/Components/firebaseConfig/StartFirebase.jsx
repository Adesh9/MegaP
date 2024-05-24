import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyCJnm_sRqXOIPmm033wJ6NrK4yDdc0rwlQ",
        authDomain: "pappu-ba1fa.firebaseapp.com",
        databaseURL: "https://pappu-ba1fa-default-rtdb.firebaseio.com",
        projectId: "pappu-ba1fa",
        storageBucket: "pappu-ba1fa.appspot.com",
        messagingSenderId: "1037528487564",
        appId: "1:1037528487564:web:e7767a54ccfa822bddcda9",
        measurementId: "G-YY1SWPK9T6"
    };

   const app = initializeApp(firebaseConfig);
    //important.
    return getDatabase(app);
}
export default StartFirebase;