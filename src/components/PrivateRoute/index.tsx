/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */

import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { useAuth } from '../../providers/AuthProvider';
import { useModal } from '../../providers/ModalProvider';

import LoadingBigGifContainer from '../ContainerBigGif';
import LoadingBigGif from "../LoadingBigGif";

const PrivateRoute = (Component: any) => (props: any) => {

  const { loading, authenticated, expirySession, setExpirySession, handleLogout } = useAuth();
  const { handleShowModal } = useModal();
  const router = useRouter();

  if (loading) {
    return <LoadingBigGifContainer>
      <LoadingBigGif />
    </LoadingBigGifContainer>;
  }

  if(expirySession) {
    setExpirySession(false);
    handleLogout();
    handleShowModal("Sessão Expirada");
  }

  if (!authenticated) {
    router.push("/");
  }

  return <Component {...props} />
};

export default PrivateRoute;