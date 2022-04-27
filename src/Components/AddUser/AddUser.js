import React from 'react';

const AddUser = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = {name, email};

        //sent data to the server 
               fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            alert('users added Successfully');
            event.target.reset();
          })
    }
    
    return (
        <div  className=' w-50 mx-auto'>
            <h1>ADd USer </h1>
            <form onSubmit={handleSubmit} > 
               
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="button" value="Add User" />
             
            </form>
        </div>
    ); 
};

export default AddUser;