const { createContext, useState, useContext } = require("react");
const { useNavigate } = require("react-router-dom");

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    const login = (username,password) =>{
        if(username == "admin" && password == "123"){
            setUser(username)
            localStorage.setItem("user",username)
           navigate('/dashboard')
        }
    }

    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("user")
        navigate("/")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
          {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () =>{
    return useContext(AuthContext)
}