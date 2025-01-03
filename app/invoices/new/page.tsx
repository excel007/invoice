import { sql } from "drizzle-orm";
import { db } from "@/db";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default async function page() {
    const results = await db.execute(sql`Select current_database()`);
    return (
        <div className="flex flex-col items-center  px-4">
            <h1 className="text-5xl font-bold mb-6">
                Create Invoice
            </h1>
            {JSON.stringify(results)}
            <form className="grid gap-4 max-w-xs w-full p-6 bg-white shadow-lg rounded-lg">
                <Label className="block">Billing Name</Label>
                <Input type="text" id="name" placeholder="Fullname" />
                <Label className="block">Billing Email</Label>
                <Input type="email" id="email" placeholder="Email" />
                <Label className="block">Value</Label>
                <Input type="text" id="value" placeholder="Value" />
                <Label className="block">Description</Label>
                <Textarea />
                <Button className="w-full">Submit</Button>
            </form>
        </div>
    );
}