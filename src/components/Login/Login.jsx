import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import Logo from '../../assets/login-logo.svg'
import Banner from '../../assets/login-hero.svg'
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const dispatch = useDispatch();

    const loginToApp = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }))
            })
            .catch(error => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert("Please enter a full name");
        };

        auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        }))
                    })
            }).catch(error => alert(error));
    };

    return (
        <>
            <div className="navigate">

                <a href="/">

                    <img
                        src={Logo}
                        alt="linkin logo"
                    />
                </a>
                <div className="b1">Join now</div>
                <div className="b2">Sign in</div>

            </div>
            <div className="greet">
                Connecting millions of people around the world.
            </div>

            <div className='loginBox' >
                <div className="login">


                    <form>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Full name (required if registering)"
                        />
                        <input
                            type="text"
                            value={profilePic}
                            onChange={e => setProfilePic(e.target.value)}
                            placeholder="Profile picture URL (optional)"
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <button type="submit" onClick={loginToApp}>Sign In</button>
                    </form>
                    <p>
                        Not a member? {" "}
                        <span className="login_register" onClick={register}>Join Now</span>
                    </p>
                </div>



                <div className="banner">
                    <img src={Banner} alt="" />
                </div>
            </div>

        </>
    );
}

export default Login
