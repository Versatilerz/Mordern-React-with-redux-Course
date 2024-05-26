import { ReactNode } from "react";

import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link: React.FC<{
  children: ReactNode;
  to: string;
  className?: string;
  activeClassName: string;
}> = ({ children, to, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event: React.MouseEvent) => {
    if (event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
export default Link;
