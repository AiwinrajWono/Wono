import React from 'react'
import '../styles/bodyLogin.css'
const LoginPage = () => {
    return (
        <>
        <div className="login-container">
            <div className='form-section' style={{ width:'40%' }}>
                <h2>LOGIN</h2>
                <div>
                    <div style={{ gap: '1rem', marginBottom: '1rem'}}>
                        <div  >
                            <div className="col" style={{ gap: '1rem', marginBottom: '1rem' }}>
                                <input type="text" className="form-control" placeholder="Email" aria-label="email" />
                            </div>
                            <div className="col">
                                <input type="password" className="form-control" placeholder="Password" aria-label="password" />
                            </div>
                        </div>
                    </div>
                    <div className="button_space" style={{borderBottom:'0.5px solid black', paddingBottom:'1.5rem'}}>
                        <button className='submit-button'>Submit</button>
                    </div>
                    <div style={{marginTop:'2rem'}}>
                    <span>Don't have an account ? <span style={{textDecoration:'underline', color:'blue'}}>Register</span></span>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default LoginPage
