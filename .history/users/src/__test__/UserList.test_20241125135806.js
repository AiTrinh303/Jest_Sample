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

    //Solution1:
    // const rows = screen.getAllByRole('row');

    //Solution2:data-testid
    // const rows = within(screen.getByTestId('table')).getAllByRole('row');

    //Solution3:container.querySelector()
    //eslint-disable-next-line
    const table = container.querySelector('table');
    //eslint-disable-next-line
    const rows = container.querySelectorAll('tbody tr');

    //Assertion: correct number of rows in the table
    // expect(rows).toHaveLength(users.length + 1);
    // expect(rows).toHaveLength(2);
    expect(table).toBeInTheDocument();
    expect(rows).toHaveLength(2);

});

test('render the name and email of each user', () => {
    //Render the UserList component
    const users=[
        {name: 'John Doe', email: 'john@gmail.com'},
        {name: 'Jane Doe', email: 'jane@gmail.com'}
    ];
    render(<UserList users={users}/>);

    // screen.logTestingPlaygroundURL();

});