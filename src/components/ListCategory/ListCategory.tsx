'use client';

//Component for initialData
export default function ListCategory({ listCategory }: { listCategory: any }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {listCategory.length > 0 &&
        listCategory.map((category: any, index: number) => {
          return (
            <p className="text-yellow-400 font-normal text-sm" key={index}>
              {category.name}
            </p>
          );
        })}
    </div>
  );
}
