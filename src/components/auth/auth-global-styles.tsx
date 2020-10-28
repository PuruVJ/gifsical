import { useTheme } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const GlobalAuthStyles = () => {
  const { pathname } = useLocation();
  const { palette } = useTheme();

  useEffect(() => {
    const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(pathname);

    document.body.style.backgroundColor = isAuthPage
      ? palette.primary.main
      : palette.background.default;
  }, [pathname]);

  return <span></span>;
};
