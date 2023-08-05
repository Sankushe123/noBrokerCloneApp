import React,{useState,useRef,useEffect} from 'react'
import signupimg from '../../../assets/signupHome.png'
import { RxCross2 } from 'react-icons/rx'
import './registration.scss'
import axios from 'axios'
import {BiCheck} from 'react-icons/bi'

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PHNO_REGEX = /^[0-9]{10}$/;


const Registration = ({openlogin,setOpenlogin}) => {


    const userRef = useRef();
    const errRef = useRef();
    const [check,setCheck]= useState(false);
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [phno, setPhno] = useState('');
    const [validPhno, setValidPhno] = useState(false);
    const [phnoFocus, setPhnoFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    //set the focus when component loades
    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    //used for name validation
    useEffect(() => {
        setValidName(user);
    }, [user])
    
    useEffect(() => {
        setValidPhno(PHNO_REGEX.test(phno));
    }, [phno])

    //passwoard validation
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    //ifUserChenged state
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, phno, matchPwd])

    useEffect(()=>{
        if(!validName || !validPhno || !validPwd || !validMatch){
            setCheck(true);
        }
        else{
            setCheck(false)
        }
    },[validName, validPhno, validPwd, validMatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = user;
        const v2 = PHNO_REGEX.test(phno);
        const v3 = PWD_REGEX.test(pwd);
        const dataapi = {user:user,phno:phno,pwd:pwd}
        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        axios.post('http://localhost:5000/create/account',dataapi).then((resp)=>{
            console.log(resp.data);
            console.log('Date send');
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
            setMatchPwd('');
        }).catch ((err)=>{ 
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        })
    }

    const handlesignin=(e)=>{
        e.preventDefault();

        const logindataapi = {phno:phno,pwd:pwd};

        axios.post("http://localhost:5000/user/login",logindataapi).then((resp)=>{
            const {user_id,token} = resp.data;
            localStorage.setItem("user_id", user_id);
            localStorage.setItem("token", token);
            setOpenlogin(false);
            console.log("logged in succesfully");
        }).catch((err)=>{
            if (err.response?.status === 500) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 401) {
                setErrMsg('Invalid credentials');
            } else {
                setErrMsg('Registration Failed')
            }
            console.log(err);
        })

    }
  return (
    <div className='signup'>
       
        {/* <Toaster toastOptions={{ duration: 4000 }} /> */}
        <div className="signupcontainer">
           
            <div className="signupLeft">
                <div className="leftContainer">
                    <img src={signupimg} alt="signup" />
                    <div className="lc-text">
                        <h3>Login / Sign Up</h3>
                        <ul>
                            <li><BiCheck/> Zero Brokerage.</li>
                            <li><BiCheck/> Thousends of new listings daily.</li>
                            <li><BiCheck/> 100cr+ Brokerage saved monthly.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="signupRight">
                <div className='righttop'>
                    <div className="crossbtn" onClick={()=>setOpenlogin(false)}>
                    <RxCross2/>
                    </div>

                    <div className="inputinfo">
                    
            {success ? (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h3>Sign In</h3>
                    <form className='form'  >
                        <input
                            type="numeric"
                            id="number"
                            onChange={(e) => setPhno(e.target.value)}
                            required
                            placeholder='Phone number'
                            autoComplete='off'
                        />
                    
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            placeholder='Password'
                        />
                       
                    </form>

                    <button disabled={!validPhno || !validPwd ? true : false} className='signupBtn' onClick={handlesignin}>Sign In</button>
                </section>
            ) : (
                <section>
                    
                    <h3>Sign Up</h3>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleSubmit} className='form' autocomplete="off">
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autocomplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            placeholder='Name'
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        {console.log(userFocus)}
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <input
                            type="numeric"
                            id="number"
                            onChange={(e) => setPhno(e.target.value)}
                            required
                            placeholder='Phone number'
                            aria-invalid={validPhno ? "false" : "true"}
                            aria-describedby="phnote"
                            onFocus={() => setPhnoFocus(true)}
                            onBlur={() => setPhnoFocus(false)}
                        />
                        <p id="phnote" className={phnoFocus && !validPhno ? "instructions" : "offscreen"}>
                            Enter 10 digit valid phone number
                        </p>

                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            placeholder='Password'
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                         
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            placeholder='Confirm password'
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            Must match the first password input field.
                        </p>
                    </form>
                    <button disabled={check ? true : false} className='signupBtn' onClick={handleSubmit}>Sign Up</button>
                    <div className='signin'>
                        <p>Already registered?</p>
                        <div className='signin-btn'>
                            <button onClick={()=>setSuccess(true)}>Sign In</button>
                        </div>
                    </div>
                </section>
            )}
    
                    </div>
                </div>
                <div className="tc">
                    <p>By Connecting, you agree to our <span>Terms & Condition</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration