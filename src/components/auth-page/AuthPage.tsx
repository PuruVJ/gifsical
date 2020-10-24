import React from 'react';
import { Helmet } from 'react-helmet-async';
import { capitalize } from '../../helpers/utils';
import { firebaseInstance } from '../../helpers/firebase';

interface IAuthPageProps {
  authType: 'login' | 'signup';
}

export default function AuthPage({ authType }: IAuthPageProps) {
  return (
    <div>
      {authType}
      <Helmet>
        <title>{capitalize(authType)} | Gifsical</title>
      </Helmet>
    </div>
  );
}
