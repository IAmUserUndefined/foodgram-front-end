/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */

import React from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';

import { useAuth } from '../../providers/AuthProvider';

import LoadingBigGifContainer from '../ContainerBigGif';
import LoadingBigGif from "../LoadingBigGif";

const PublicRoute = (Component: any) => (props: any) => {

  const { loading, authenticated } = useAuth();
  const router = useRouter();

  if (loading) {
    return <LoadingBigGifContainer>
      <LoadingBigGif />
    </LoadingBigGifContainer>;
  }

  if (authenticated) {
    router.push("/feed");
  }

  return <Component {...props} />
};

export default PublicRoute;