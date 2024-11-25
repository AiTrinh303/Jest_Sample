import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on a list', () => {
    render(<App />);

    // Find the name input
    const nameInput = screen.getByRole('textbox', { name: /name/i });

    // Find the email input
    const emailInput = screen.getByRole('textbox', { name: /email/i });

    // Find the submit button
    const button = screen.getByRole('button', { name: /add user/i }); // Adjust name if necessary

    // Simulate user typing a name
    user.type(nameInput, 'John');

    // Simulate user typing an email
    user.type(emailInput, 'john@john.com');

    // Simulate user clicking the add button
    user.click(button);

    // Debugging can help confirm the state of the DOM
    screen.debug();

    // Verify that the name appears in the table
    const nameCell = screen.getByRole('cell', { name: 'John' });
    const emailCell = screen.getByRole('cell', { name: 'john@john.com' });

    expect(nameCell).toBeInTheDocument();
    expect(emailCell).toBeInTheDocument();
});