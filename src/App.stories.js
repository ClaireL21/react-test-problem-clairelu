// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories


import React from 'react';
import App from './App';

export default {
    title: "Button",
    component: App
};

//export const ClickButton = () => <App> </App>;

const Template = args => <App {...args} />;

export const ButtonState = Template.bind({});
ButtonState.args = {
    app: {
        title: "Button",
        component: App
    }
}

// export const State2 = Template.bind({});
// State2.args = {
//     app: {
//         title: "Button in State 2",
//         text: "Thanks"
//     }
// }

// export const Primary = () => {

// }