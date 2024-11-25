import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function login() {
    return (
        <main className="flex flex-col justify-center min-h-screen items-center gap-6 max-w-5xl mx-auto">
            <h1 className="text-5xl font-bold">
                Sign In
            </h1>
            <Button asChild>
                <Link href="/dashboard">Sign In</Link>
            </Button>
        </main>
    );
}