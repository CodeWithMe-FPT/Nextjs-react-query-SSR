import React, { Fragment } from 'react';
import getQueryClient from '../getQueryClient';
import * as APIService from '@/services/APIService';
import ListCategoryHydrate from '@/components/ListCategoryHydrate';
import { dehydrate, Hydrate, QueryClient } from '@tanstack/react-query';

export default async function HydratedPost() {
  const fetcher = async () => {
    let res = await fetch('http://localhost:5000/api/product/list-category');
    res = await res.json();
    return res;
  };
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['list-category'], fetcher);
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <ListCategoryHydrate />
    </Hydrate>
  );
}
