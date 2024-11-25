import {render, screen} from '@testing-library/react';
import AccessibleName from '../components/AccessibleName';


test('can select by accessible name', () => {
    render(<AccessibleName />);

    const submitButton = screen.getByRole('button', {name: 'Submit'});
    const cancelButton = screen.getByRole('button', {name: 'Cancel'});

    expect(submitButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
});