import {Link, redirect, useNavigate} from "react-router-dom";
import { useState} from "react";



const Login =()=> {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [redirect1, setRedirect1] = useState(false)

    const submit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:8080/api/user/login', {
                method: "POST",
                headers: {'Content-Type':'application/json'},
                credentials:"include",
                body: JSON.stringify({
                username,
                password,
            })
        });

        setRedirect1(true)
    }


    const navigate = useNavigate()

    if (redirect1) {
        return navigate('/')
    }

    return(
        <section id="Login">
            <form className="Container" onSubmit={submit}>
                <h1>Login</h1>
                <input type="username" placeholder="Username" onChange={e=>{setUserName(e.target.value)}} required />
                <input type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}} required />

                <button className="main-button" type="submit">Login</button>
                <p>or register <Link to="/Register">here</Link></p>
            </form>

        </section>
    )
}

export default Login