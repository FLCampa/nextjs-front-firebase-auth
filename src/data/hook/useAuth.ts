// External Libraries
import { useContext } from "react";

// Context
import AuthContext from "../context/AuthContext";

// acessar dados a partir do hook
const useAuth = () => useContext(AuthContext);

export default useAuth;
