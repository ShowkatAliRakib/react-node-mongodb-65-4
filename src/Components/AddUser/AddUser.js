import React from 'react';

const AddUser = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = {name, email};
    }
    return (
        <div>
            <h1>ADd USer </h1>
            <form onSubmit={handleSubmit} > 
                <input type="text" name='name' placeholder='Name' />
                <input type="email" name="email" placeholder='Email' />
                <input type="button" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;