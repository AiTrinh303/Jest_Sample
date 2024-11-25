import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on a list', () => {
    render(<App />);
     //Find name input
     const nameInput = screen.getByRole('textbox', {name: /name/i});


     //Find email input
     const emailInput = screen.getByRole('textbox', {name: /email/i});

     //Find button
     const button = screen.getByRole('button');

     //Simulate user typing in a name
     user.click(nameInput);
     user.keyboard('John');

    //Simulate user typing in an email
      user.click(emailInput);
      user.keyboard('john@john.com');

     //Simulate user clicking the button
     user.click(button);

    //  screen.debug();
    const nameCell = screen.getByRole('cell', {name: 'John'});
    const email = screen.getByRole('cell', {name: 'john@john.com'});

    expect(namecell).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  
});
