import { ReactNode, createContext, useEffect, useState } from "react";

type NavigationInit = {
  navigate: (to: string) => void;
  currentPath: string;
};

const NavigationContext = createContext<NavigationInit>({
  navigate: () => {},
  currentPath: "/",
});

const NavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
