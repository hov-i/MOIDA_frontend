import {createContext, useState} from "react";
// 안되네 힝..
const LoginContext = createContext({
    loggedUser : {
        username: '',
        email: '',
        phone: ''
    },
    isLogin: false,
    setIsLogin: () => {},
    setLoggedUser: () =>{}
});

export const ContextProvider = ({children}) => {

    const setLoggedUser = (data) => {
        setState(prevState => (
            {
                ...prevState,
                loggedUser: data
            }
        ))
    }

    const setIsLogin = () => {
        setState(prevState => (
            {
                ...prevState,
                isLogin: !prevState.isLogin
            }
        ))
    }

    const initialState = {
        loggedUser: {},
        isLogin: false,
        setLoggedUser,
        setIsLogin
    }

    const [state, setState] = useState(initialState);


    return (
        <ContextProvider value={state}>
            {children}
        </ContextProvider>
    )
}

export default LoginContext;