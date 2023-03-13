import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { ButtonState } from './App.stories';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library
test('renders button in default state', () => {
    render(<ButtonState />);
    expect(screen.getByText(/Click Me/i)).not.toBeNull();
});

test('onClick handler is called when clicked', () => {
    render(<ButtonState />);
    screen.getByRole('button').click();
    expect(screen.getByText(/Thanks/i)).not.toBeNull();
})