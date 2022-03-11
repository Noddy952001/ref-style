import styled  from "styled-components"

const Button = styled.button`

    padding: 16px 32px;
    font-size: 16px;
    margin: 4px 2px;
    border-radius : 10px;
    transition-duration: 0.4s;
    cursor: pointer;
    color: black; 
    border: 2px solid #008CBA;
    background-color: ${({theme}) => (theme === "light" ? "#4CAF50" :" #f44336")}; 

    &:hover {
        background-color: #008CBA;
        color: white;
    }
`



export {Button}
// export const Button = ({children ,onClick}) => {
//     return(
//         <button onClick={onClick}>
//             {children}
//         </button>
//     )
// }