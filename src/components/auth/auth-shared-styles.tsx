/**
 * Common styles for auth pages
 * @module
 * @author Puru Vijay
 */

import {
  FormControl,
  styled,
  TextField,
  TextFieldProps,
} from '@material-ui/core';
import React from 'react';

/**
 * Backdrop for login screen
 */
export const AuthPage = styled('section')(({ theme }) => ({
  height: '100%',
  width: '100%',

  backgroundColor: theme.palette.primary.main,

  display: 'flex',
  justifyContent: 'center',
}));

/**
 * The main auth box
 */
export const AuthArea = styled('div')(({ theme }) => ({
  width: '90%',

  [theme.breakpoints.between('sm', 'md')]: {
    width: '50%',
  },

  [theme.breakpoints.up('md')]: {
    width: '30%',
  },
}));

export const AuthTextField = styled((props: TextFieldProps) => (
  <FormControl>
    <TextField {...props} color="secondary" variant="filled" />
  </FormControl>
))(({ theme }) => ({
  margin: theme.spacing(0.5, 0),
}));
