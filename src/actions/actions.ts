'use server';
import { revalidatePath } from 'next/cache';

const reHydrate = async () => {
  revalidatePath('/');
};

export { reHydrate };
