import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Img from'../components/custlog.jpeg'
import '../components/foot.css'

function foot() {
    return (
        <div><div className='sticky-bottom'>
            <div className='fot'>
                <div class="container ">
                    <div class="row row-cols-3">
                        <div class="col ">
                            <ul >
                                <h4>Company</h4>
                                <h6 >
                                    <li><a href=''>About Us</a></li>
                                    <li><a href=''>Contact Us</a></li>
                                    <li><a href=''>Privacy Policy</a></li>
                                    <li><a href=''>Terms & Condition</a></li>
                                    <li><a href=''>FAQs & Help</a></li>
                                </h6>
                            </ul>
                        </div>
                        <div class="col">
                            <ul>
                                <h4>Contact</h4>
                                <h6>
                                    <br></br>
                                    <p>Marthandam</p>
                                    <p>+91 8438566175</p>
                                    <p>Ab.zhk@outlook.com</p>
                                </h6>
                            </ul>
                        </div>
                        <div class='row' className='cont'>
                            <div class='col'>
                                <h4>Gallery</h4>
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14126.276101096391!2d77.2093330387409!3d8.307281600335273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b045516f27e1797%3A0x9eaf4bffb1fa19c1!2sMarthandam%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1707580930790!5m2!1sen!2sin" width="350" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                                <div class="row">
                                    <div class="col-2">
                                        <img src={Img} style={{ width: '65px', height: '39px', }}></img>
                                    </div>
                                    <div class="col-2">
                                        <img src={Img} style={{ width: '65px', height: '39px' }}></img>
                                    </div>
                                    <div class="col">
                                        <img src={Img} style={{ width: '65px', height: '39px' }}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default foot