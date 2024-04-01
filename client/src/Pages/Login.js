import React, {useState} from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <center>
        <div>
          <h1>Login</h1>
          <form>
                    <table>
                        <tr>
                            <td>Email :</td>
                            <td><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>Password :</td>
                            <td><input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>Forgot Password:</td>
                            <td><a href='/ForgotPass'>Reset Password</a></td>
                        </tr>
                        <br></br>
                        <tr>
                            <td></td>
                            <td><button>Login</button></td>
                        </tr>
                    </table>
                </form>
        </div>
        </center>
      );
}

export default LoginPage;