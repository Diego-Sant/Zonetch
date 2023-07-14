"use client"

import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

interface CurrencyProps {
    value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if(!isMounted) {
        return null;
    }

  return (
    <div className="font-bold text-3xl md:text-3xl text-[#01a0f2]">
        {formatter.format(Number(value))}
    </div>
  )
}

export default Currency