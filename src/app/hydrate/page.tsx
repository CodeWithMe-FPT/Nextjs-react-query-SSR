// 'use server';
import React, { Fragment } from 'react';
import getQueryClient from '../getQueryClient';
import * as APIService from '@/services/APIService';
import ListCategoryHydrate from '@/components/ListCategoryHydrate';
import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

export const revalidate = 0;

export default async function HydratedPost() {
  const fetcher = async () => {
    let res = await fetch('https://binhminhcooking.store/api/product/list-category');
    res = await res.json();
    return res;
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['list-category'], fetcher);
  const dehydratedState = dehydrate(queryClient, { shouldDehydrateQuery: () => true });

  return (
    <Hydrate state={dehydratedState}>
      <ListCategoryHydrate />
    </Hydrate>
  );
}
