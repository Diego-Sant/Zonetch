"use client";

import { Button } from "@/components/ui/button";
import IconButton from "@/components/ui/iconButton";
import Filter from "./filter";

import { Brand, Color, Product } from "@/types";

import { SlidersHorizontal, X } from "lucide-react";

import { useState } from "react";

import { Dialog } from "@headlessui/react";

interface MobileFilterProps {
    brands: Brand[];
    colors: Color[];
}

const MobileFilter: React.FC<MobileFilterProps> = ({ brands, colors }) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
  
    return (
    <>
        <Button onClick={onOpen} className="flex items-center w-[150px] mt-1 text-lg gap-x-2 lg:hidden">
            <SlidersHorizontal size={20} />
            Filtro
        </Button>

        <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
            <div className="fixed inset-0 bg-black bg-opacity-25" />

            <div className="fixed inset-0 z-40 flex">
                <Dialog.Panel className="relative ml-auto bg-white dark:bg-[#020817] flex h-full w-full max-w-xs flex-col overflow-y-auto py-4 pb-6 shadow-xl">
                    <div className="flex items-center justify-end px-4">
                        <IconButton icon={<X size={15} />} onClick={onClose} />
                    </div>
                    <div className="p-4">
                        <Filter valueKey="brandId" name="Fabricante" data={brands} />
                        <Filter valueKey="colorId" name="Cores" data={colors} />
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    </>
  )
}

export default MobileFilter