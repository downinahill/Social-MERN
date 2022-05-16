// import React from 'react';
// import styled from 'styled-components'
// import { Button } from '@material-ui/core'
// import { auth, provider } from '../firebase';
// import { useStateValue } from '../StateProvider'
// import { actionTypes } from '../Reducer'

// const Login = () => {
//     const [{}, dispatch] = useStateValue()

//     const signIn = () => {
//         auth.signInWithPopup(provider)
//             .then(result => {
//                 console.log(result)
//                 dispatch({
//                     type: actionTypes.SET_USER,
//                     user: result.user
//                 })   
//             })
//             .catch(error => alert(error.message))
//     }
//     return (
//         <LoginWrapper>
//             <div className="login-logo">
//                 <img src="logo512.png" alt="login" />
//                 <h1>Popular Social</h1>
//             </div>
//             <Button type='submit' className="login_btn"
//             onClick={signIn}>Sign In</Button>
//         </LoginWrapper>
//     )
// }

// const LoginWrapper = styled.div`
//     display: grid;
//     place-items: center;
//     height: 100vh;
//     .login_logo {
//         display: flex;
//         flex-direction: column;
//         img {
//             object-fit: contain;
//             height: 150px;
//             max-width: 200px;
//         }
//     }
//     .login_btn {
//         width: 300px;
//         background-color: #2e81f4;
//         color: #eff2f5;
//         font-weight: 800;
//         &:hover {
//             background-color: white;
//             color: #2e81f4;
//         }
//     }
// `

// export default Login