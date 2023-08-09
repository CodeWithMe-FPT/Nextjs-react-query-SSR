import React, { Fragment } from 'react';
import getQueryClient from '../getQueryClient';
import * as APIService from '@/services/APIService';
import { dehydrate, Hydrate } from '@tanstack/react-query';
import ListCategoryHydrate from '@/components/ListCategoryHydrate';

export default async function HydratedPost() {
  const queryClient = getQueryClient();
  await queryClient.fetchQuery(['list-category'], APIService.listCategory);
  setInterval(async () => {
    await queryClient.fetchQuery(['list-category'], APIService.listCategory);
    console.log('fetch list category');
  }, 10000);
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{/* <ListCategoryHydrate /> */}</Hydrate>;
}
