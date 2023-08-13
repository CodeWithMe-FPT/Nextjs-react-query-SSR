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
    let res: any = await fetch('https://binhminhcooking.store/api/product/list-category');
    res = await res.json();
    return res;
  };
  const { data, refetch } = useQuery({
    queryKey: ['list-category'],
    queryFn: fetcher,
    staleTime: 3000,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setTimeout(() => {
      refetch({ queryKey: ['list-category'] });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {data.length > 0 &&
        data.map((category: any, index: number) => {
          return (
            <p className="text-yellow-400 font-normal text-sm" key={index}>
              {category.name}
            </p>
          );
        })}
    </div>
  );
}
