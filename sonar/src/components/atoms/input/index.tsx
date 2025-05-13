
import "../input/index.css";
import { Eye, EyeOff } from "lucide-react";
import {useState} from "react";

interface InputFieldProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?:"email"|"password";
}

const InputField: React.FC<InputFieldProps> = ({ type = "text", placeholder, value, onChange}) => {

  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="input-container">
    <input
      // type={type}
      type={isPassword && showPassword ? "text" : type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      
      className="input-field"
    />
     {isPassword && (
        <span
          className="icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      )}
  </div>
  );
};

export default InputField;
