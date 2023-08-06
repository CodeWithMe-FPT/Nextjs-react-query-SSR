import React, { Fragment } from 'react';
import getQueryClient from '../getQueryClient';
import * as APIService from '@/services/APIService';
import { dehydrate, Hydrate } from '@tanstack/react-query';
import ListCategoryHydrate from '@/components/ListCategoryHydrate';

export default async function HydratedPost() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['list-category'], APIService.listCategory);
  const dehydratedState = dehydrate(queryClient);
  return (
    // <Fragment>
    //   <Hydrate state={dehydratedState}>
    //     <p>Hydrate</p>
    //     <ListCategoryHydrate />
    //   </Hydrate>
    // </Fragment>
    <ListCategoryHydrate />
  );
}
