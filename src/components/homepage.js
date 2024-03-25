import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Img from '../components/logo.jpg'
import '../components/homepage.css'
import img1 from '../components/custlog.jpeg'
import axios from 'axios'

function homepage() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <img src={Img} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
                    <a class="navbar-brand" href="#">Tourist Guide</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#" style={{ paddingLeft: '700px' }}>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Register
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/regi    ">New user</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Existing User</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="user_box">
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <img src={img1} alt="custlog" style={{ height: '530px' }}></img>
                            <p>ADVENTURE IS OUT THERE</p>
                        </div>
                        <div class="col">
                            <div class="second">
                                <p>Member login</p>
                                <input type="email" id="email" name="email" placeholder="Enter your email" required></input><br></br>
                                <br></br>
                                <input type="password" id="password" name="password" placeholder="Enter your password" required></input>
                                <br></br>
                                <div class="login_button">
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homepage