import { collection, getDocs } from "firebase/firestore";
import db from "./firebase/firebaseConfig";

export async function fetchInfos() {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 8000)); // test suspense
    const querySnapshot = await getDocs(collection(db, "infos"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch infos");
  }
}
