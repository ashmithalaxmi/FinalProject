import React from "react";

const CreateUserPage = () => {
  return (
    <center>
    <div>
      <h1>Create New User</h1>
      <form>
                <table>
                    <tr>
                        <td>Email :</td>
                        <td><input type="email" placeholder="Email"/></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>First Name :</td>
                        <td><input type="text" placeholder="First Name"/></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>Last Name :</td>
                        <td><input type="text" placeholder="Last Name"/></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>Password :</td>
                        <td><input type="password" placeholder="Password"/></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>Role :</td>
                        <td><input type="text" placeholder="Role"/></td>
                    </tr>
                    <br></br>
                    <tr>
                        <td></td>
                        <td><button>Create</button></td>
                    </tr>
                </table>
            </form>
    </div>
    </center>
  );
};

export default CreateUserPage;