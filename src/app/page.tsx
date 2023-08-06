import * as APIService from '@/services/APIService';
import ListCategory from './../components/ListCategory/index';

//Example initialData @tanstack/react-query
export default async function Home() {
  const listCategory = await APIService.listCategory();
  return (
    <main className="wrapper-main">
      <h1 className="text-green-500 font-semibold text-base">Hello Admin</h1>
      <ListCategory listCategory={listCategory} />
    </main>
  );
}
