import React, { useState, useEffect } from "react";
import { StyledButton, StyledInput, NeuButton } from "../../StyledComponents/styledComponents";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { VscLoading } from "react-icons/vsc"
import { Link } from "react-router-dom"

import {ReactComponent as SuccessImg} from "../../Assets/SuccessNew.svg"

import "./Signup.css"

const Signup = () => {

    const [loginData, setLoginData] = useState({})
    const [loading, setLoading] = useState(false)
    const [inputData, setInputData] = useState({
        experience : "",
        designation: "",
        // intRoles: []
    })

    const [signupComplete, setSignupComplete] = useState(false)

    const handleGoogleLogin = () => {
        setLoading(true)
        console.log("Logging in")

        let loginTimeout = setTimeout(() => {
            setLoginData({
                username: "dummyName",
                email: "dummyemail@gmail.com"
            })
            setLoading(false)
        },2000)

        // clearTimeout(loginTimeout)  
    }

    const handleGithubLogin = () => {
        console.log("Logging in")
    }

    const handleInputChange = e => {
        let name = e.target.name
        let value = e.target.value

        setInputData(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const handleCompleteSignupProcess = () => {
        //Append the current login data with the added info.(experience, current roles, interested roles) into the redux store
        //Then redirect to the signup complete page

        if(inputData.designation.length > 0 && inputData.experience.length > 0) {
            let currentLoginData = {...loginData}
        
            currentLoginData['experience'] = parseFloat(inputData.experience)
            currentLoginData['designation'] = inputData.designation

            setLoading(true)

            setTimeout(() => {
                setLoginData(currentLoginData)
                setSignupComplete(true)
                setLoading(false)
            },3000)
        }
    }

    return (
        <div className='signup-root'>
            {!signupComplete ?
                <div className={'signup-box ' + (Object.keys(loginData).length > 0 ? "increasedHeight" : "")}>
                { loading ? 
                    <VscLoading style={{ width: '24px', height: '24px', color: '#0D3140' }}/> 
                    :
                    (Object.keys(loginData).length === 0  ?
                            <>
                                <p>Complete the signup</p>
                                <div className="signup-button-group">
                                    <NeuButton className="signup-button-modified" onClick={handleGoogleLogin} dark={false}>Sign up with <FcGoogle className="signup-icons"/></NeuButton>
                                    <NeuButton className="signup-button-modified" onClick={handleGithubLogin} dark={false}>Sign up with <ImGithub className="signup-icons"/></NeuButton>
                                </div>
                            </>
                        :
                            <>
                                <div className="signup-last-page">
                                    <p>Almost there...</p>
                                    <div className="form">
                                        <div className="form-inputDiv">
                                            <p>Total Experience (in years) *</p>
                                            <StyledInput type="number" onChange={handleInputChange} value={inputData.experience} name="experience"/>
                                        </div>

                                        <div className="form-inputDiv">
                                            <p>Current Designation *</p>
                                            <StyledInput type="text" onChange={handleInputChange} value={inputData.designation} name="designation"/>
                                        </div>

                                        {/* <div className="form-inputDiv">
                                            <p>Interested roles</p>
                                            <StyledInput type="text" onChange={handleInputChange} value={inputData.intRoles}/>
                                        </div> */}

                                        <div>
                                            <p></p>
                                        </div>
                                    </div>
                                    {/* <StyledButton onClick={handleCompleteSignupProcess} className="finish-signup">Finish</StyledButton> */}
                                    <StyledButton onClick={handleCompleteSignupProcess} dark={true}>Finish</StyledButton>
                                </div>
                            </>
                        )
                    }
                </div>
                :
                <div className="signup-success">
                    <p>Successfully created your profile!</p>
                    <SuccessImg style={{ width: "508.33px", height: "492.34px" }}/>
                    <p>Now, checkout some jobs to apply <Link to="/jobs">here</Link></p>
                </div>
            }
        </div>
    )
}

export default Signup;