"use server";

import { Invoices } from "@/db/schema";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export async function createAction(formData: FormData) {
  // const name = formData.get('name') as string;
  
  const { userId } = await auth();
  // converts amount to float and then to integer
  const amount = Math.floor(parseFloat(String(formData.get('amount'))) * 100);
  const description = formData.get('description') as string;
  const email = formData.get('email') as string;
  if (!userId) {
    return;
  }
  // insert the invoice into the database
  const results = await db.insert(Invoices).values({
    amount,
    userId,
    email,
    description,
    status: 'draft'
  })
  .returning({
    id: Invoices.id,
  })

  // redirect to the newly created invoice
  redirect(`/invoices/${results[0].id}`)

}