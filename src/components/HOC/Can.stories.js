import React from 'react';
import Can from './Can';
import { Button } from '../Button/Button';

export default {
  title: 'HOC/Can',
  component: Can,
  argTypes: {
    children: {control: 'text'},
    isAvailable: {control: 'boolean'}
  }
}

const LoginButton = Can(Button);

const Template = args => <LoginButton {...args} />;

export const CanArgs = Template.bind({});
CanArgs.args = {
  children: 'Login',
  isAvailable: true
};
