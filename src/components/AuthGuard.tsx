import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory, useLocation } from 'react-router-dom';
import { firebaseInstance } from '../helpers/firebase';

interface IProps {
  // children: ReactNode;
}

const AuthGuard = ({}: IProps) => {
  const [user] = useAuthState(firebaseInstance.auth());
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const isAuthPage = ['/login', '/signup'].includes(pathname);

    if (user && isAuthPage) {
      // User has no business on auth page.
      history.push('/');
    }

    if (!user && !isAuthPage) {
      history.push('/login');
    }
  }, [user]);

  return <></>;
};

export default AuthGuard;
