"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/personalButton";
import { useEffect, useState } from "react";
import useCart from "@/hooks/useCart";
import { useRouter } from "next/navigation";


const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={() => router.push("/carrinho")} className="flex items-center rounded-full bg-[#0f172a] px-4 py-2">
                <ShoppingBag size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button>
        </div>
    )
}

export default NavbarActions;