import React from 'react';

import Text from '../components/text';

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: 'Text',
  component: Text,
};

const Template = (args) => <Text {...args}>Example Text<br/>This is a long line of text to show lineheight and wrapping options. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>;
const ShortTemplate = (args) => <Text {...args}>Example Text</Text>;

export const Default = Template.bind({});
Default.args = {
};

export const Uppercase = ShortTemplate.bind({});
Uppercase.args = {
  uppercase: true,
};

export const Bold =  ShortTemplate.bind({});
Bold.args = {
  bold: true,
};

