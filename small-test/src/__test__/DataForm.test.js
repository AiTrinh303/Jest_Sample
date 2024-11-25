import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import DataForm from '../components/DataForm';

test('selecting different elements', () => {
    render(<DataForm />);

    // screen.logTestingPlaygroundURL();

    const elements = [
        screen.getByRole('button', {name: /submit/i}),
        screen.getByLabelText(/email/i),
        screen.getByPlaceholderText(/red/i),
        screen.getByText(/enter data/i),
        screen.getByTestId('image wrapper'),
        screen.getByDisplayValue(/test@test.com/i),
        screen.getByTitle(/click me/i),
        
    ];

    for(let element of elements) {
       expect(element).toBeInTheDocument();
    }

});
