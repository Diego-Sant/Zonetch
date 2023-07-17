"use client";

import { Product } from "@/types"
import Currency from "./ui/currency";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/useCart";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {

    const cart = useCart();

    const onAddToCart = () => {
      cart.addItem(data);
    }

  return (
    <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-200">{data.name}</h1>
        <div className="mt-4 flex items-center justify-between">
            <Currency value={data?.price} />
            <Button onClick={onAddToCart} className="flex w-[150px] sm:w-[200px] md:w-[300px] bg-[#01a0f2] hover:bg-[#01a0f2]/90 rounded-md text-xl gap-2">Comprar <ShoppingCart /></Button>
        </div>
        <hr className="my-6" />
        <div className="flex gap-y-6 flex-col sm:justify-between sm:flex-row">
            <div className="flex items-center gap-x-1">
                <h3 className="font-semibold text-black dark:text-white">Cor disponível:</h3>
                <div>{data?.colors?.name}</div>
            </div>
            <div className="flex items-center gap-x-1">
                <h3 className="font-semibold text-black dark:text-white">Fabricante:</h3>
                <div>{data?.brands?.name}</div>
            </div>
        </div>
    </div>
  )
}

export default Info