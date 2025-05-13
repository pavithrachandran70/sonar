

import { useState } from "react";
import InputField from "../atoms/input/index";
import Button from "../atoms/Button/index";
import "../molecules/index.css"
import image from "../../../src/assets/email.svg"

interface LoginFieldsProps {
  onLogin: (email: string,password:string) => void;
}

const LoginFields: React.FC<LoginFieldsProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  const [password, setPassword] = useState(""); 
  const [emailError, setEmailError] = useState("");
  // const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState(""); 
 
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      valid = false;
    } else {
      setEmailError("");
    }
    // const nameRegex = /^[A-Za-z\s]+$/; 

    // if (name.trim() === "") {
    //   setNameError("Name is required.");
    //   valid = false;
    // } else if (name.length < 3) {
    //   setNameError("Name should contain at least 3 characters.");
    //   valid = false;}
    // else if (!nameRegex.test(name)) {
    //   setNameError("Name should contain only letters and spaces.");
    //   valid = false;
    // } else {
    //   setNameError("");
    // }

  

  if (password.trim() === "") {
    setPasswordError("Password is required.");
    valid = false;
  } else if (password.length < 6) {  // You can change the password validation as needed
    setPasswordError("Password must be at least 6 characters.");
    valid = false;
  } else {
    setPasswordError("");
  }


  if (valid) {
    onLogin(email,password);
  }
};


  return (
    <div className="login-fields">
      <div className=""
      <InputField
    
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)
         
        }

      />
      {emailError && <p className="error-text">{emailError}</p>}
       {/* <InputField
        type="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}

      />
      {nameError && <p className="error-text">{nameError}</p>} */}
    

      <InputField
        type="password"  // Type set to "password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordError && <p className="error-text">{passwordError}</p>}

      <Button label="Continue"  onClick={handleLogin} />
     
    </div>
  );
};

export default LoginFields;
