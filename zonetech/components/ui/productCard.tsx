"use client";

import { MouseEventHandler } from "react";
import { Product } from "@/types";

import { Expand, ShoppingCart } from "lucide-react";
import { BsFillCartPlusFill } from "react-icons/bs";

import Currency from "./currency";
import Button from "./personalButton";
import IconButton from "./iconButton";

import usePreviewModal from "@/hooks/usePreviewModal";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const router = useRouter();
    const previewModal = usePreviewModal();

    const handleClick = () => {
        router.push(`/produtos/${data?.id}`);
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    }

    return (
        <div className="bg-white group h-full cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image onClick={handleClick} alt={data.name} src={data?.images?.[0]?.url} fill className="aspect-square object-cover rounded-md" />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex justify-center gap-4">
                        <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600" />} />
                        <IconButton onClick={() => {}} icon={<BsFillCartPlusFill size={20} className="text-gray-600" />} />
                    </div>
                </div>
            </div>
            <div className="cursor-auto">
                <p className="font-bold line-clamp-2 mb-4">{data.name}</p>
                <Currency value={data?.price} />
            </div>
            <div onClick={handleClick}>
                <Button className="flex w-full items-center justify-center bg-[#01a0f2] rounded-md text-xl gap-2">Comprar <ShoppingCart /></Button>
            </div>
        </div>
    )
}

export default ProductCard