// External Libraries
import { useContext } from "react";

// Context
import AppContext from "../context/AppContext";

// acessar dados a partir do hook
const useAppData = () => useContext(AppContext);

export default useAppData;
