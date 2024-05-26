import { render } from "react-dom";
import Link from "./Link";

const Sidebar = () => {
  const links = [
    {
      label: "Dropdown",
      path: "/",
    },
    {
      label: "Accordion",
      path: "/accordion",
    },
    {
      label: "Buttons",
      path: "/buttons",
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link to={link.path} key={link.label}>
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLinks}
    </div>
  );
};
export default Sidebar;
