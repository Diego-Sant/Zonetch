"use client";

import { Product } from '@/types';
import React, { useEffect, useState } from 'react'
import NoResults from './noResults';
import ProductCard from './ui/productCard';
import { Button } from './ui/button';
import { ArrowDown01, ArrowDownUp, ArrowUp10 } from 'lucide-react';

interface ProductListProps {
    title: string;
    items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  const [sortByPriceAsc, setSortByPriceAsc] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleSortByPrice = () => {
    if (sortByPriceAsc === null) {
      setSortByPriceAsc(true);
    } else if (sortByPriceAsc) {
      setSortByPriceAsc(false);
    } else {
      setSortByPriceAsc(null);
    }
  };

  const sortedItems = [...items];

  if (sortByPriceAsc !== null) {
    sortedItems.sort((a: any, b: any) => {
      if (sortByPriceAsc) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  return (
    <div className="space-y-4">
      {isLoading ? (
            <div className='flex justify-center items-center'>
              <div className="lds-hourglass"></div>
            </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-3xl">{title}</h3>
            <Button onClick={handleSortByPrice} className='w-[150px]'>
              {sortByPriceAsc === true && <span className='flex'>Preço <ArrowDown01 className='w-4 h-4 ml-2 mt-[0.10rem]' /></span>}
              {sortByPriceAsc === false && <span className='flex'>Preço <ArrowUp10 className='w-4 h-4 ml-2 mt-[0.10rem]' /></span>}
              {sortByPriceAsc === null && <span className='flex'>Preço <ArrowDownUp className='w-4 h-4 ml-2 mt-[0.10rem]' /></span>}
            </Button>
          </div>
          {sortedItems.length === 0 && <NoResults />}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sortedItems.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductList