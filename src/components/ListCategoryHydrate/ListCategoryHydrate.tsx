'use client';

import { useQuery } from '@tanstack/react-query';
import * as APIService from '@/services/APIService';

//Component for initialData
export default function ListCategoryHydrate() {
  const listCategory: any = useQuery({
    queryKey: ['list-category'],
    queryFn: APIService.listCategory,
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
