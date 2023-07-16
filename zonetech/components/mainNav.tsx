"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdownMenu";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";

interface MainNavProps {
    data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 1090);
        };
    
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    const routes = data.map((route) => ({
        href: `/categoria/${route.id}`,
        label: route.name,
        active: pathname === `/categoria/${route.id}`
    }));
  
    if (isMobile) {
        return (
            <nav className={cn("flex items-center space-x-4 lg:space-x-6 ml-2")}>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="h-12 text-md" variant="outline"><AlignJustify className="w-5 h-5 mr-2" />Menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel className="flex justify-center items-center">Menu Responsivo</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {routes.map((route) => (
                            <Link key={route.href} href={route.href} className={cn("text-sm font-medium transition-colors hover:text-primary", route.active ? "text-black dark:text-white" : "text-muted-foreground")}>
                                <DropdownMenuItem className="cursor-pointer">
                                    {route.label}
                                </DropdownMenuItem>
                            </Link>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        );
    }

    return (
        <nav className={cn("mx-6 flex items-center space-x-4 lg:space-x-6")}>
            {routes.map((route) => (
                <Link key={route.href} href={route.href} className={cn("text-sm font-medium transition-colors hover:text-primary", route.active ? "text-black dark:text-white" : "text-muted-foreground")}>
                    {route.label}
                </Link>
            ))}
        </nav>
    );

}

export default MainNav