// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories


import React from 'react';
import App from './App';

export default {
    title: "Button",
    text: "Click Me"
};

//export const ClickButton = () => <App> </App>;

const Template = args => <App {...args} />;

export const State1 = Template.bind({});
State1.args = {
    app: {
        title: "Button in State 1",
        text: "Click Me"
    }
}

export const State2 = Template.bind({});
State2.args = {
    app: {
        title: "Button in State 2",
        text: "Thanks"
    }
}
