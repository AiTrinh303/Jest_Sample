import React from 'react'
import './UserList.css';

const UserList = ({users}) => {
    const renderUsers = users.map((user, index) => {
        return (
            <tr key={index}>
                <th>{user.name}</th>
                <th>{user.email}</th>
            </tr>
        )
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            {/* <tbody data-testid='table'>
                {renderUsers}
            </tbody> */}
            <tbody>
                {renderUsers}
            </tbody>
        </table>
    )
}

export default UserList
