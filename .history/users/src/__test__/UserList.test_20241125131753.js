import {render, screen} from '@testing-library/react';  
// import user from '@testing-library/user-event';w
import UserList from '../components/UserList';

test('render one row per user',( ) => {
    //Render the UserList component
    const users=[
        {name: 'John Doe', email: 'john@gmail.com'},
        {name: 'Jane Doe', email: 'jane@gmail.com'}
    ];
    render(<UserList users={users}/>);

    //Find all the rows in the table
    // screen.logTestingPlaygroundURL();
    const rows = screen.getAllByRole('row');

    //Assertion: correct number of rows in the table
    expect() 

});

test('render the name and email of each user', () => {

});