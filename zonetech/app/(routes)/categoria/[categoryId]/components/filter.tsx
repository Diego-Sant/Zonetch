"use client";

import qs from "query-string";

import { Brand, Color } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import Button from "@/components/ui/personalButton";

interface FilterProps {
    data: (Brand | Color)[];
    name: string;
    valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString())
        
        const query = {
            ...current,
            [valueKey]: id
        };

        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, {skipNull: true});

        router.push(url);
    }
  
    return (
    <div className="mb-8">
        <h3 className="text-lg font-semibold">
            {name}
        </h3>
        <hr className="my-4" />
        <div className="flex flex-wrap gap-2">
            {data.map((filter) => (
                <div key={filter.id} className="flex items-center">
                    <Button onClick={() => onClick(filter.id)} className={cn("rounded-md text-sm text-gray-800 p-2 bg-white dark:bg-[#020817] dark:border-white dark:text-white border border-gray-300", selectedValue === filter.id && "bg-black text-white")}>
                        {filter.name}
                    </Button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Filter