import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'form/Checkbox',
  component: Checkbox,
  argTypes: {
    header: {control: 'text'},
    text: {control: 'text'},
  }
}

const Template = args => <Checkbox {...args} />;

export const CheckboxArgs = Template.bind({});
CheckboxArgs.args = {
  header: 'Checkbox',
  text: 'is'
};
