import React from 'react';
import { Button } from './Button';
import { action } from '@storybook/addon-actions';
import {text, boolean} from '@storybook/addon-knobs';

export default {
  title: 'form/Button',
  component: Button,
  argTypes: {
    buttonType: {control: 'text'},
    children: {control: 'text'},
    backgroundColor: {control: 'color'}
  }
}

const Template = args => <Button {...args} />;

export const Primary = () => <Button>Primary</Button>;
export const Secondary = () => <Button buttonType={'secondary'}>Secondary</Button>;
export const Success = () => <Button buttonType={'success'}>Success</Button>;
export const Danger = () => <Button buttonType={'danger'}>Danger</Button>;
export const KnobsButton = () => (
    <Button disabled={boolean('notClickable', false)}>
      {text('Label', 'Button Label')}
    </Button>
);
export const ButtonArgs = Template.bind({});
ButtonArgs.args = {
  buttonType: 'success',
  children: 'Success Args'
};
