"use server";
import { db } from "@/db";
import { Invoices } from "@/db/schema";

import { Redirect } from "next";
import { redirect } from "next/navigation";

export async function createAction(formData : FormData) {
    // console.log('formData', formData);
    const value = Math.floor(parseFloat(String(formData.get('value')))*100);
    const description = String(formData.get('description'));
    const name = String(formData.get('name'));
    const email = String(formData.get('email'));
    
    const results = await db.insert(Invoices).values({
        name,
        email,
        value,
        description,
        status:'open'
    })
    .returning({
        id:Invoices.id
    })

    redirect(`/invoices/${results[0].id}`);
}
