import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { CirclePlus } from "lucide-react";

import Link from "next/link";

export default function dashboard() {
    return (
        <main className="flex flex-col min-h-screen items-center gap-6 max-w-5xl mx-auto px-4">
            <h1 className="text-5xl font-bold">
                Dashboard
            </h1>
            <div className="flex justify-between w-full">
                <h1 className="text-3xl font-semibold">Invoices</h1>

                <Button variant={"ghost"} className="inline-flex gap-2" asChild>

                    <Link href="/invoices/new">
                        <CirclePlus className="h-4 w-4" />
                        Create Invoice
                    </Link>
                </Button>

            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">11/11/2024</TableCell>
                        <TableCell>CERO nama</TableCell>
                        <TableCell>ceo@gmail.com</TableCell>
                        <TableCell><Badge className="bg-sky-600">Paid</Badge></TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">11/11/2024</TableCell>
                        <TableCell>CERO nama</TableCell>
                        <TableCell>ceo@gmail.com</TableCell>
                        <TableCell><Badge className="bg-sky-600">Paid</Badge></TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </main>
    );
}