import React from 'react'

export const DisplayBoard = ({numberOfUsers, getAllUsers}) => {

    return(
        <div className="display-board">
            <h4 className="pb-4">Users Created</h4>
            <div className="number pb-2">
                {numberOfUsers}
            </div>
            <div className="btn p-0">
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-warning">Get all Users</button>
            </div>
        </div>
    )
}