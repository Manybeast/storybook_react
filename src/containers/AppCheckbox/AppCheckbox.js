import React, { useState } from 'react';
import { Checkbox } from '../../components/Checkbox/Checkbox';

const AppCheckbox = () => {
  const [isCheckboxVisible, setCheckboxVisible] = useState(true);

  const handleSwitch = () => {
    setCheckboxVisible(!isCheckboxVisible);
  };

  return (
      <div>
        <button onClick={handleSwitch}>
          Show/Hide checkbox
        </button>
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
