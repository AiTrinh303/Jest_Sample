import {render, screen} from '@testing-library/react';  
// import user from '@testing-library/user-event';w
import UserList from '../components/UserForm';

test('render one row per user',( ) => {
    //Render the UserList component
    const users=[
        {name: 'John Doe', email: 'john@gmail.com'},
        {name: 'Jane Doe', email: 'jane@gmail.com
    render(<UserList/>);

    //Find all the rows in the table

    //Assertion: correct number of rows in the table

});

test('render the name and email of each user', () => {

});