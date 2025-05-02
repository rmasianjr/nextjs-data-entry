import { collection, getDocs, query, orderBy } from "firebase/firestore";
import db from "./firebase/firebaseConfig";

export async function fetchInfos() {
  try {
    const infosCollection = collection(db, "infos");
    const q = query(infosCollection, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch infos");
  }
}
