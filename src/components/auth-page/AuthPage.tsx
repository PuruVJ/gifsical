import React from 'react';

interface IAuthPageProps {
  authType: 'login' | 'signup'; 
} 

export default function AuthPage({ authType }: IAuthPageProps) {
  // @ts-ignore

  return <div>{authType}</div>;
}
