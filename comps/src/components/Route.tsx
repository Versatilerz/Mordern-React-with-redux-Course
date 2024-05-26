import { ReactNode } from "react";
import useNavigation from "../hooks/use-navigation";

const Route: React.FC<{ path: string; children: ReactNode }> = ({
  path,
  children,
}) => {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
};

export default Route;
