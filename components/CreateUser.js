import React from 'react'


const CreateUser = ({onChangeForm, createUser }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 pb-4">
                    <h2>Create User</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-12 pb-2">
                                <label htmlFor="InputPseudo">Pseudo</label>
                                <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="pseudo" id="pseudo" placeholder="Pseudo" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-12 pb-4">
                                <label htmlFor="InputEmail">Email</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="email" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <button type="button" onClick= {(e) => createUser()} className="btn btn-danger">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser