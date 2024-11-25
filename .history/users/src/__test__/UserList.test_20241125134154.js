import {render, screen, within} from '@testing-library/react';  
// import user from '@testing-library/user-event';w
import UserList from '../components/UserList';

test('render one row per user',( ) => {
    //Render the UserList component
    const users=[
        {name: 'John Doe', email: 'john@gmail.com'},
        {name: 'Jane Doe', email: 'jane@gmail.com'}
    ];
    const {container} = render(<UserList users={users}/>);

    //Find all the rows in the table
    // screen.logTestingPlaygroundURL();
    
    // const rows = screen.getAllByRole('row');

    // const rows = within(screen.getByTestId('table')).getAllByRole('row');

    //Assertion: correct number of rows in the table
    // expect(rows).toHaveLength(users.length + 1);
    expect(rows).toHaveLength(2);

});

test('render the name and email of each user', () => {

});