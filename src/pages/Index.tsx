import { Button, Link, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {}

/**
 * The main page where chats will be shown
 */
export default function IndexPage({ location }: IProps) {
  const { pathname } = location;

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  // Styles
  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <Button color="primary" variant="contained">
          Hello
        </Button>

        <Link component={NavLink} to="/login">
          Login
        </Link>
      </section>
    </>
  );
}

const useStyles = makeStyles(({}) => ({
  root: {},
}));
