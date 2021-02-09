import React, { useState } from 'react';
import Can from '../../components/HOC/Can';
import { Button } from '../../components/Button/Button';

const LoginButton = Can(Button);

export const Login = () => {
  const [hasPermission, setPermission] = useState(false);

  const handleClick = () => setPermission(!hasPermission);

  return (
      <div>
        <LoginButton
            children={'Login'}
            isAvailable={hasPermission}
        />
        <Button
            children={!hasPermission ? "Get access" : "remove access rights"}
            clickHandler={handleClick}
        />
      </div>
  )
};
