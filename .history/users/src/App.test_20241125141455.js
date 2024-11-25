import { render, screen } from '@testing-library/react';
import App from './App';

test('it shows a form and a list of users', () => {
    render(<App/>);
    const form = screen.getByRole('form');
    const list = screen.getByRole('list');
    expect(form).toBeInTheDocument();
    expect(list).toBeInTheDocument();
}
