import React from 'react';
import { addDecorator} from "@storybook/react";
import { Center } from '../src/storyDecorators/Center/Center'
import {withKnobs} from '@storybook/addon-knobs'

addDecorator(story => <Center>{story()}</Center>);
addDecorator(withKnobs);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
