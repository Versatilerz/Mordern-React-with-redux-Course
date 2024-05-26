import { ReactNode } from "react";

import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link: React.FC<{ children: ReactNode; to: string }> = ({
  children,
  to,
}) => {
  const { navigate } = useNavigation();

  const classes = classNames("text-blue-500");

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
