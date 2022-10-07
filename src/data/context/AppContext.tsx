// External Libraries
import { createContext, useState } from "react";

// Type
type Theme = "dark" | "";

// Interface
interface AppContextProps {
  theme?: Theme;
  toggleTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider({ children }) {
  const [theme, setTheme] = useState<Theme>("");

  function toggleTheme() {
    setTheme(theme === "" ? "dark" : "");
  }

  return (
    <AppContext.Provider
      value={{
        theme, // <- state
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
// export const AppConsumer = AppContext.Consumer;
