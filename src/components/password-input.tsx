import { IconButton, InputAdornment, TextField, TextFieldProps } from '@material-ui/core';
import { mdiEye, mdiEyeOff } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useRef, useState } from 'react';

export const PasswordInput = ({ ...rest }: TextFieldProps) => {
  const [visible, setVisible] = useState(false);

  // Refs
  const inputContainerRef = useRef<HTMLDivElement>(null);

  function toggleVisibility() {
    const inputEl = inputContainerRef.current?.querySelector('input') as HTMLInputElement;

    setVisible(!visible);

    inputEl.focus();
  }

  return (
    <TextField
      {...rest}
      type={visible ? 'text' : 'password'}
      ref={inputContainerRef}
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
