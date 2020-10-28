import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory, useLocation } from 'react-router-dom';
import { firebaseInstance } from '../helpers/firebase';

const AuthGuard = () => {
  const [user, loading] = useAuthState(firebaseInstance.auth());
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (loading) return;

    const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(pathname);

    if (user && isAuthPage) {
      // User has no business on auth page.
      history.push('/');
    }

    if (!user && !isAuthPage) {
      history.push('/login');
    }
  }, [user, loading]);

  return <span />;
};

export default AuthGuard;
