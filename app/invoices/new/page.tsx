import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function page() {
    return (
        <div className="flex flex-col gap-6  mx-auto px-4">
            <h1 className="text-5xl font-bold">
                Create Invoice
            </h1>
            <form className="grid gap-4 max-w-xs">
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