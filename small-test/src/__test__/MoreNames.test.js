import {render, screen} from '@testing-library/react';
import MoreNames from '../components/MoreNames';


test('shows an email and search input', () => {
    render(<MoreNames />);

    // screen.logTestingPlaygroundURL();

    const emailInput = screen.getByRole('textbox', {name: /email/i});
    const searchInput = screen.getByRole('textbox', {name: /search/i});

    expect(emailInput).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();

});