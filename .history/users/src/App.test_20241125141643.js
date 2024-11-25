import { render, screen } from '@testing-library/react';
import App from './App';

test('can receive a new user and show it on a list', () => {

    render(<App />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    const name = 'John Doe';
    const email = '
