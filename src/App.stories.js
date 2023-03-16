// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories

import React from 'react';
import App from './App';
import {ButtonText} from './App';
import {ButtonChangeState} from './App';

export default {
    title: "Button"
};

const Template = (args) => <App {...args} />;
export const ButtonState = Template.bind({});
ButtonState.args = {
    button: {
        title: "Default Button",
        component: App
    }
}

// Template to allow user to input different labels 
// as button text in storybook
const Template2 = (args) => <ButtonText {...args} />;
export const ButtonState2 = Template2.bind({});
ButtonState2.args = {
    button: {
        title: "Changeable Text Button"
    },
    text: "button text here"
};

// Template to allow user to test functionality of button labels 
// based on user input for button state in storybook
const Template3 = (args) => <ButtonChangeState {...args} />;
export const ButtonState3 = Template3.bind({});
ButtonState3.args = {
    button: {
        title: "Changeable State Button"
    },
    buttonState: false
};