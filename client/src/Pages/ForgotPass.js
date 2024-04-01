import React from "react";

const ForgotPass = ()  => {
    return(
        <center>
        <div>
            <h1>Forgot Password</h1>
            <form>
                <table>
                    <tr>
                        <td>Enter Your Email</td>
                    </tr>
                    <br></br>
                    <tr>
                        <td>
                            <input type="email" placeholder="Email"/>
                        </td>
                    </tr>
                    <br></br>
                    <tr>
                        <td><button>Get Link</button></td>
                    </tr>
                </table>
            </form>
        </div>
        </center>
    );
}
export default ForgotPass;