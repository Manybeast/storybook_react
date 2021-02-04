import React from 'react';
import { Header } from './Header';
import {text} from '@storybook/addon-knobs';

export default {
  title: 'form/Header',
  component: Header,
  argTypes: {
    position: {control: 'text'},
    backgroundColor: {control: 'color'}
  }
}

const Template = args => <Header {...args} />;

export const HeaderLeft = () => (
    <Header
        buttonType={'primary'}
    />
);

export const HeaderCenter = () => (
    <Header
        position={'center'}
        buttonType={'secondary'}
    />
);

export const HeaderRight = () => (
    <Header
        position={'right'}
        buttonType={'success'}
    />
);

export const HeaderKnobs = () => (
    <Header
        position={text('Position', 'left')}
        buttonType={text('Styles', 'danger')}
    />
);

export const HeaderArgs = Template.bind({});
HeaderArgs.args = {
  position: 'center',
  buttonType: 'success'
};
