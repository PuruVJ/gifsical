import { IconButton, InputAdornment, TextField, TextFieldProps } from '@material-ui/core';
import { mdiEye, mdiEyeOff } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useRef, useState } from 'react';

// interface IProps {
// }

export const PasswordInput = ({ ...rest }: TextFieldProps) => {
  const [visible, setVisible] = useState(false);

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);

  function toggleVisibility() {
    setVisible(!visible);

    inputRef.current?.focus();
  }

  return (
    <TextField
      inputRef={inputRef}
      {...rest}
      type={visible ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={toggleVisibility}>
              {visible ? VisibilityOn : VisibilityOff}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const VisibilityOn = <Icon size="24" path={mdiEye} />;

const VisibilityOff = <Icon size="24" path={mdiEyeOff} />;
