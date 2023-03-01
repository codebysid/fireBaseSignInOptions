// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth ,GithubAuthProvider,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
   //Enter Config
};

const app = initializeApp(firebaseConfig);
export const provider=new GoogleAuthProvider()
export const facebookProvider =new FacebookAuthProvider()
export const githubProvider=new GithubAuthProvider()
export const auth=getAuth(app)
export const db = getFirestore(app);
export default app
