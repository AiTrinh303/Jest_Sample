import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on a list', () => {
    render(<App />);
     //Find name input
     const nameInput = screen.getByRole('textbox', {name: /name/i});

     //Find email input
     const emailInput = screen.getByRole('textbox', {name: /email/i});

     user.click(naemInput)
});
