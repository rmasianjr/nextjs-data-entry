"use server";

import { z } from "zod";
import db from "./firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { toProperCase } from "./utils";

const FormSchema = z.object({
  id: z.string(),
  name: z
    .string({
      invalid_type_error: "Please enter a name",
      required_error: "Name is required",
    })
    .trim()
    .min(2, { message: "Name must be at least 2 characters long" })
    .transform(toProperCase),
  age: z.coerce
    .number({
      invalid_type_error: "Please enter a valid number of age",
      required_error: "Age is required",
    })
    .gt(0, { message: "Please enter an age greater than 0" }),
  email: z
    .string({
      invalid_type_error: "Please enter a valid email address",
      required_error: "Email is required",
    })
    .email({ message: "Please enter a valid email address" }),
  contact: z
    .string({
      invalid_type_error: "Please enter a contact number",
      required_error: "Contact number is required",
    })
    .trim()
    .min(1, { message: "Contact number cannot be empty" }),
  address: z
    .string({
      invalid_type_error: "Please enter an address",
      required_error: "Address is required",
    })
    .trim()
    .min(1, { message: "Address cannot be empty" })
    .transform(toProperCase),
});

const CreateInfo = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
    age?: string[];
    email?: string[];
    contact?: string[];
    address?: string[];
  };
  message?: string | null;
};

export async function createInfo(prevState: State, formData: FormData) {
  const parsedInfo = CreateInfo.safeParse(
    Object.fromEntries(formData.entries())
  );

  //validate form
  if (!parsedInfo.success) {
    return {
      errors: parsedInfo.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice",
    };
  }

  const { data } = parsedInfo;

  try {
    const collectionRef = collection(db, "infos");
    await addDoc(collectionRef, {
      ...data,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Database Error:", error);
    return { message: "Database Error: Failed to Create Info" };
  }

  const queryString = new URLSearchParams(
    Object.entries(data).map(([key, value]) => [key, String(value)])
  ).toString();

  revalidatePath("/");
  redirect(`/details/results?${queryString}`);
}
