
import React, { useState } from "react"
import Cookies from "js-cookie";
import '../App.css'
import {useSelector,useDispatch} from 'react-redux'
export default function Registerform(props) {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const isAuthenticated = !!Cookies.get("token");
  if (isAuthenticated) {
    props.history.push("/App");
  }
  let [authMode, setAuthMode] = useState("signin")
  let [name,setName] = useState('')
  let [email,setEmail]=useState('')
  let [pwd,setPwd] = useState('')
  let [brand,setBrand] =useState('')
  let [signemail,setSignemail] = useState('')
  let [signpwd,setSignpwd] = useState('')
  let [resultmessage,setResultmessage] = useState('')
  let [layout,setLayout] = useState('')
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  const handleName = (e) =>
  {
    setName(e.target.value)
  }
  const handleEmail = (e) =>
  {
    setEmail(e.target.value)
  }
  const handlePassword = (e) =>
  {
    setPwd(e.target.value)
  }
  const handleBrand = (e) =>
  {
     setBrand(e.target.value)
  }
  const handleSignEmail = (e)=>
  {
        setSignemail(e.target.value)
  }
  const handleSignPwd = (e) =>
  {
      setSignpwd(e.target.value)
  }
  const handleLayout = (e) =>
  {
      setLayout(e.target.value)
  }
  const handleLogin = async () =>
  {
            const res = await fetch('http://localhost:8000/login',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                body:JSON.stringify({
                    email:signemail,
                    password:signpwd
                })
            }
            )
            const result = await res.json()
            
            if (result.access_token !== '')
            {
              Cookies.set("token",result.access_token)
              dispatch({type:'AddLayout',payload:layout})
                props.history.push("/App")
            }
            
  }
  const handleRegister = async () => {
    console.log('in register' + {
        name:name,
        email:email,
        password:pwd,
        brand:brand
    })
    const res = await fetch('http://localhost:8000/register',{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify({
            name:name,
            email:email,
            password:pwd,
            brand:brand
        })
    })
    const result = await res.json()
    console.log('success ' + result)
    setResultmessage(result.message)
    //window.location.href="/"
    props.history.push("/")
  }
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e)=>{handleSignEmail(e)}}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e)=>{handleSignPwd(e)}}
              />
            </div>
            <div className="form-group mt-3">
              <label>Layout</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Layout"
                onChange={(e)=>{handleLayout(e)}}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button  className="btn btn-primary" onClick={()=>handleLogin()}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="fullname"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={(e)=>{handleName(e)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e)=>{handleEmail(e)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e)=>{handlePassword(e)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Brand</label>
            <input
              type="brand"
              className="form-control mt-1"
              placeholder="brand"
              onChange={(e)=>{handleBrand(e)}}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={()=>handleRegister()}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
          <p variant="primary">{resultmessage}</p>
        </div>
      </div>
    </div>
  )
}