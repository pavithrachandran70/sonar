

// type Buttonprops ={
//   label?: string;
//   variants?:'small'|'medium'|'large'
//   color?: string;
//   rounded?: boolean;
//   fullWidth?: boolean;
//   onClick?: () => void;
//   disabled?: boolean;
// }

// // const Button: React.FC<Buttonprops> = ({ label, onClick }) => {
// //   return (
// //     <button className="button" onClick={onClick}>
// //       {label}
// //     </button>
// //   );
// // };

// const Button = ({
//   label = 'Click Me',
//   variants = 'medium',
//   color = 'gray',
//   rounded = false,
//   fullWidth = false,
//   onClick,
//   disabled = false,
// }:Buttonprops) => {
//   const sizeStyles = {
//       small: { width: 100, height: 40 },
//       medium: { width: 200, height: 40 },
//       large: { width: 200, height: 60 },
//     };
//     const style = {
//       backgroundColor: color,
//       borderRadius: rounded ? 'px' : '2%',
//       width: fullWidth ? '100%' : sizeStyles[variants].width,
//       height: sizeStyles[variants].height,
//       opacity: disabled ? 0.5 : 1,
//       color: 'white',
//       border: 'none',
//       cursor: disabled ? 'not-allowed' : 'pointer',
//     };
  
// return (
//   <button
  
//   className="button" style={style} onClick={onClick} disabled={disabled}>
//         {label}
//       </button>
//       // className="button" onClick={onClick}>
        

 

// );
// };

//  export default Button




import "../Button/index.css"

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export  default Button;