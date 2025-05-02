"use server";

import { z } from "zod";
import db from "./firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.coerce.number(),
  email: z.string().email(),
  contact: z.string(),
  address: z.string(),
});

const CreateInfo = FormSchema.omit({ id: true });

export async function createInfo(formData: FormData) {
  const parsedInfo = CreateInfo.parse(Object.fromEntries(formData.entries()));

  try {
    const collectionRef = collection(db, "infos");
    await addDoc(collectionRef, {
      ...parsedInfo,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to create info");
  }

  const queryString = new URLSearchParams(
    Object.entries(parsedInfo).map(([key, value]) => [key, String(value)])
  ).toString();

  revalidatePath("/");
  redirect(`/details/results?${queryString}`);
}
