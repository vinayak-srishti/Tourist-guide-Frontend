import React, { useState } from 'react'
import '../components/Registration.css'
import axios from 'axios'
import Img from'../components/custlog.jpeg'

function Registration() {
    const [vals,setvals]=useState({Name:'',Email:'',City:'',Country:'',Gender:'',Contact:'',IDtype:'',})

    const Sumit=(data)=>{
        console.log(data)
        console.log(vals)
        setvals({...vals,[data.target.name]:data.target.value})
    }
    const btns=(vals_add)=>{
        vals_add.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts",vals)
        .then(rest=>{
            console.log(rest)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
            <div style={{ marginTop: '30px' }}>
                <form onSubmit={btns}>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <picture>
                                    <img src={Img} className="img-fluid " alt="custlog" />
                                </picture>
                            </div>
                            <div className="col-6 " style={{ backgroundColor: 'whitesmoke', borderRadius: '30px 15px 30px 15px', marginTop: '20px' }}>
                                <div style={{ marginTop: '200px', marginBottom: '20px' }}>
                                    <p style={{marginLeft:'190px',fontSize:'30px',fontStyle:'normal'}}>New Member Login </p>
                                    <div className='row g-3'>

                                        <div className='col-md-6'>
                                            
                                            <input type='text'placeholder='Name' className='form-control bg-light' onChange={Sumit} name='Name' value={vals.Name} />
                                        </div>
                                        <div className='col-md-6'>
                                            <input type='email' placeholder='Email'className='form-control bg-light' onChange={Sumit} name='Email' value={vals.Email} />
                                        </div>
                                        <div className='col-md-6'>
                                            
                                            <input type='text' placeholder='City'className='form-control bg-light' onChange={Sumit} name='City' value={vals.City} />
                                        </div>
                                        <div className='col-md-6'>
                                            
                                            <input type='text' placeholder='Country'className='form-control bg-light' onChange={Sumit} name='Country' value={vals.Country} />
                                        </div>
                                        <div className='col-12'>
                                            
                                            <select className='form-select bg-light'placeholder='Gender' onChange={Sumit} name='Gender' value={vals.Gender}>
                                                <option>Choose</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>other</option>
                                            </select>
                                        </div>
                                        <div className='col-md-6'>
                                           
                                            <input type='number'placeholder='phoneno' className='form-control bg-light' onChange={Sumit} name='Contact' value={vals.Contact} />
                                        </div>
                                        <div className='col-md-6'>
                                          <select className='form-select bg-light'placeholder='Idtype'onChange={Sumit} name='IDtype' value={vals.IDtype}>
                                            <option>Choose</option>
                                            <option>Aadhar No</option>
                                            <option>Pasport No</option>
                                            <option>License No</option>
                                          </select>
                                        </div>
                                        <div className='col-md-6'>
                                           
                                            <input type='number'placeholder='ID number' className='form-control bg-light' onChange={Sumit} name='ID number' value={vals.IDnumber} />
                                        </div>
                                        <div className='col-md-6'>
                                            <input type='password' placeholder='password' className='form-control bg-light'onChange={Sumit} name='Password' value={vals.Password}/>
                                            </div>
                                        <div className='col-md-12'>
                                            <button className='btn btn-outline-success col-12' >Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Registration