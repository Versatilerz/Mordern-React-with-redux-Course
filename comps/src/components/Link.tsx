import { ReactNode, useContext } from "react";
import NavigationContext from "../context/navigation";

const Link: React.FC<{ children: ReactNode; to: string }> = ({
  children,
  to,
}) => {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
};
export default Link;
