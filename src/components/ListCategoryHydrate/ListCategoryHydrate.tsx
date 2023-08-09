'use client';

import { useQuery } from '@tanstack/react-query';
import * as APIService from '@/services/APIService';
import { revalidatePath } from 'next/cache';
import { useEffect } from 'react';
// import { reHydrate } from '@/actions/actions';
// import { reHydrate } from '@/actions/actions';

//Component for initialData
export default function ListCategoryHydrate() {
  const fetcher = async () => {
    let res = await fetch('http://localhost:5000/api/product/list-category');
    res = await res.json();
    // reHydrate();
    return res;
  };
  const listCategory: any = useQuery({
    queryKey: ['list-category'],
    queryFn: async () => {
      const res = await fetcher();
      return res;
    },
    refetchOnWindowFocus: false,
  });
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {listCategory.data.length > 0 &&
        listCategory.data.map((category: any, index: number) => {
          return (
            <p className="text-yellow-400 font-normal text-sm" key={index}>
              {category.name}
            </p>
          );
        })}
    </div>
  );
}
