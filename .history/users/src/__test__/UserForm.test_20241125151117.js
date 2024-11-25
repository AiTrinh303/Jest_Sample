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


// //Solution1: 
// test('it calls addUser when the form is submitted', () => {
//     //NOT THE BEST IMPLEMENTATION
//     const argList = [];
//     const callback = (...args) => {
//         argList.push(args);
//     }

//     //Try to render my component
//     render(<UserForm addUser={callback}/>);

//     //Find the two inputs
//     const [nameInput, emailInput] = screen.getAllByRole('textbox');

//     //Simulate typing in a name
//     user.click(nameInput);
//     user.keyboard('John Doe');

//     //Simulate typing in an email
//     user.click(emailInput);
//     user.keyboard('john@john.com');

//     //find the button
//     const button = screen.getByRole('button');

//     //Simulate clicking the button
//     user.click(button);

//     //Assertion to make sure 'addUser' was called
//     expect(argList).toHaveLength(1);
//     expect(argList[0][0]).toEqual({name: 'John Doe', email: 'john@john.com'});

// })

//Solution2: use Mock Function
//Solution1: 
test('it calls addUser when the form is submitted', () => {
    //create Mock function
    const mockAddUser = jest.fn();

    //Try to render my component
    render(<UserForm addUser={mockAddUser}/>);

    // //Find the two inputs
    // const [nameInput, emailInput] = screen.getAllByRole('textbox');

    //Find name input
    const nameInput = screen.getByRole('textbox', {name: /name/i});

    //Find email input
    const emailInput = screen.getByRole('textbox', {name: /email/i});

    //Simulate typing in a name
    user.click(nameInput);
    user.keyboard('John Doe');

    //Simulate typing in an email
    user.click(emailInput);
    user.keyboard('john@john.com');

    //find the button
    const button = screen.getByRole('button');

    //Simulate clicking the button
    user.click(button);

    //Assertion to make sure 'addUser' was called
    expect(mockAddUser).toHaveBeenCalled();
    expect(mockAddUser).toHaveBeenCalledWith({name: 'John Doe', email: 'john@john.com'});
})

test('empty two inputs when form is submitted',() => {
    render(<UserForm addUser={()=> {}}/>);
    const nameInput = screen.getByRole('textbox', {name: /name/i});
    const emailInput = screen.getByRole('textbox', {name: /email/i});
    const button = screen.getByRole('button');

    user.type(nameInput, 'John Doe');
    user.type(emailInput, 'john@john
});
