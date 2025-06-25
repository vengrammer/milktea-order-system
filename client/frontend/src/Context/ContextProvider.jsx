import { createContext, useState, useContext } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    getToken: () => {},
    setNotification: () => {},
})

function ContextProvider({children}){
    const [user, setUser] = useState({});
    const [notification, _setNotification] = useState('');
    const [token, setToken] = useState(localStorage.getItem('user_token'));

    function setNotification(message){
        _setNotification(message);
        setTimeout(()=>{
            _setNotification('')
        }, 5000)
    }

    function getToken(token){
        setToken(token);
        if(token){
            localStorage.setItem('user_token')
        }else{
            localStorage.removeItem('user_token')
        }
    }

    return(
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            getToken,
            notification,
            setNotification
        }}>
            {children}
        </StateContext.Provider>
    )

}

export default ContextProvider;
export const useStateContext = () => useContext(StateContext);