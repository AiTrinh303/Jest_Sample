import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import UserForm from '../components/UserForm';

test ('it shows two inputs and a button', () => {
    //render the component
    render(<UserForm/>);

    //Manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    //Assertion -make sure the component is doing
    //what we expect it to do

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();

})

test('it calls addUser when the form is submitted', () => {
    //Try to render my component

    //Simulate typing in a name

    //Simulate typing in an email

    //find the button

    //Simulate clicking the button

    //Asswertion to make sure 




})