import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on a list', async () => {
    render(<App />);

    // Find inputs and button
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const button = screen.getByRole('button', { name: /add user/i });

    // Simulate user interactions
    await user.type(nameInput, 'John');
    await user.type(emailInput, 'john@john.com');
    user.click(button);

    await screen.debug();

    // Assert that the table updates
    const nameCell = await screen.findByRole('cell', { name: 'John' });
    const emailCell = await screen.findByRole('cell', { name: 'john@john.com' });

    expect(nameCell).toBeInTheDocument();
    expect(emailCell).toBeInTheDocument();
});
