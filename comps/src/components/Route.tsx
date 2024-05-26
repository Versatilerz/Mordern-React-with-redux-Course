import { ReactNode, useContext } from "react";
import NavigationContext from "../context/navigation";

const Route: React.FC<{ path: string; children: ReactNode }> = ({
  path,
  children,
}) => {
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) {
    return children;
  }

  return null;
};

export default Route;
