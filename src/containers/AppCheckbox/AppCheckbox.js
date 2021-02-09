import React, { useState } from 'react';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Button } from '../../components/Button/Button'

const AppCheckbox = () => {
  const [isCheckboxVisible, setCheckboxVisible] = useState(true);

  const handleSwitch = () => {
    setCheckboxVisible(!isCheckboxVisible);
  };

  return (
      <div>
        <Button
            clickHandler={handleSwitch}
            children={'Show/Hide checkbox'}
        />
        {
          isCheckboxVisible &&
          <Checkbox
              header="Checkbox"
              text="is"
              visible={isCheckboxVisible}
          />
        }
      </div>
  )
};

export default AppCheckbox;
