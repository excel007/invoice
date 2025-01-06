'use client'

import { useFormStatus } from "react-dom"
import { Button } from "./button"
import { LoaderCircle } from "lucide-react"

const SubmitButton = () => {
    const { pending } = useFormStatus()
    console.log("pending", pending)
    return (
        <Button className="w-full">
            <span className="{pending ? 'text-transparent':''}">Submit</span>
            {pending &&
                (<span className="flex items-center justify-center w-full h-full text-gray-400">
                    <LoaderCircle className="animate-spin" />
                </span>)}

        </Button>
    )
}

export default SubmitButton