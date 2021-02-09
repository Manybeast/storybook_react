import React from 'react';
import { Checkbox } from '../../components/Checkbox/Checkbox';

class AppCheckbox extends React.Component {
  constructor() {
    super();
    this.state = {
      isCheckboxVisible: true,
    };
  }

  handleSwitch() {
    this.setState({isCheckboxVisible: !this.state.isCheckboxVisible});
  }

  render() {
    return (
        <div>
          <button onClick={this.handleSwitch.bind(this)}>
            Show/Hide checkbox
          </button>
          {
            this.state.isCheckboxVisible &&
                <Checkbox
                header="Checkbox"
                text="is"
                visible={this.state.isCheckboxVisible}
                />
          }
        </div>
    )
  }
}

export default AppCheckbox;
