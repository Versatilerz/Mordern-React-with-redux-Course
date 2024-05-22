import classNames from "classnames";

type PanelProps = {
  className: string;
  children: React.ReactNode;
  [key: string]: any;
};

const Panel: React.FC<PanelProps> = ({ children, className, ...rest }) => {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};
export default Panel;
