import React from 'react'

export const Users = ({users}) => {

    if (users.length === 0) return null

    const UserRow = (user,index) => {

        return(
            <tr key = {index} className={index%2 === 0?'odd':'even'}>
                <td>{index + 1}</td>
                <td>{user.pseudo}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

    const userTable = users.map((user,index) => UserRow(user,index))

    return(
        <div className="container p-4">
            <h2>Users</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>Pseudo</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {userTable}
                </tbody>
            </table>
        </div>
    )
}