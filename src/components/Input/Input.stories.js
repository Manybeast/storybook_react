import React from 'react';
import { Input } from './Input';
import {text, boolean} from '@storybook/addon-knobs';

export default {
  title: 'form/Input',
  component: Input,
  argTypes: {
    size: {control: 'text'},
  }
}

const Template = args => <Input {...args} />;

export const Small = () => <Input size={'small'} />;
export const Medium = () => <Input />;
export const Large = () => <Input size={'large'} />;
export const KnobsInput = () => (
    <Input
        size={text('Size', 'small')}
        disabled={boolean('notEditable', false)}
    />
);

export const InputArgs = Template.bind({});
InputArgs.args = {
  size: 'small',
};
