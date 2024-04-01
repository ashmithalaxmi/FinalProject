import React from "react";

const ChangePass = ()  => {
    return(
        <center>
        <div>
            <h1>Change Password</h1>
            <form>
                <table>
                    <tr>
                        <td>Enter Your New Password</td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>
                            <input type="password" placeholder="Password"/>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td><button>Submit</button></td>
                    </tr>
                </table>
            </form>
        </div>
        </center>
    );
}
export default ChangePass;