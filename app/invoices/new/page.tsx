"use client"

// import { sql } from "drizzle-orm";
// import { db } from "@/db";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Form from "next/form"
import { createAction } from "@/app/action";
import { SyntheticEvent, useState, startTransition } from "react";
import SubmitButton from "@/components/ui/SubmitButton";

export default function page() {
    // const sqlText = sql`select * from invoices;`
    // const results = await db.execute(sqlText);
    const [state, setState] = useState('ready')
    console.log("check 1 = ",state);

    async function haddleOnSubmit(event: SyntheticEvent) {
        event.preventDefault();

        if (state === 'pending') {
            return;
        }
        setState('pending');

        startTransition(async () => {
            const target = event.target as HTMLFormElement
            const formData = new FormData(target)
            await createAction(formData);
        });
        console.log("check 2 = ",state);

    }

    return (
        <div className="flex flex-col items-center  px-4">
            <h1 className="text-5xl font-bold mb-6">
                Create Invoice
            </h1>
            <Form action={createAction} onSubmit={haddleOnSubmit} className="grid gap-4 max-w-xs w-full p-6 bg-white shadow-lg rounded-lg">
                <Label className="block">Billing Name</Label>
                <Input type="text" id="name" name="name" placeholder="Fullname" />
                <Label className="block">Billing Email</Label>
                <Input type="email" id="email" name="email" placeholder="Email" />
                <Label className="block">Value</Label>
                <Input type="text" id="value" name="value" placeholder="Value" />
                <Label className="block">Description</Label>
                <Textarea id="description" name="description" />
                <SubmitButton />
            </Form>
        </div>
    );
}