import React from 'react'

function login() {
    return (
        <div>
            <div class="text_box">
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <img src={img1} alt="custlog" style={{ height: '530px' }}></img>
                            <p>ADVENTURE IS OUT THERE</p>
                        </div>
                        <div class="col">
                            <div class="second">
                                <p>Member login</p>
                                <input type="name" id="name" name="name" placeholder="Name" required></input><br></br>
                                <br></br>
                                <input type="email" id="password" name="email" placeholder="email" required></input>
                                <br></br>
                                <input type="city" id="password" name="city" placeholder="city" required></input>
                                <input type="country" id="country" name="email" placeholder="country" required></input>
                                <div class="login_button">
                                    <button type="Login" class="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login