import className from "classnames";
import { twMerge } from "tailwind-merge";
import { GoSync } from "react-icons/go";

type ButtonProps = {
  rounded?: boolean;
  outline?: boolean;
  //   purpose?: string;
  primary?: boolean;
  secondary?: boolean;
  succes?: boolean;
  warning?: boolean;
  danger?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  [key: string]: any;
};

const Button: React.FC<ButtonProps> = ({
  loading,
  rounded,
  outline,
  children,
  primary,
  secondary,
  succes,
  warning,
  danger,
  ...rest
}) => {
  const validateProps = () => {
    const props = [primary, secondary, succes, warning, danger];
    const trueProps = props.filter((prop) => {
      return prop === true;
    });

    if (trueProps.length > 1) {
      throw new Error(
        "Only one of 'primary', 'secondary', 'success', 'warning', or 'danger' can be set to true."
      );
    }
  };

  validateProps();

  const classes = twMerge(
    className(rest.className, "flex items-center px-3 py-1.5 border w-30 h-8", {
      "opacity-80": loading,
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": succes,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && succes,
      "text-yellow-400": outline && warning,
      "text-red-500": danger && outline,
    })
  );

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
};

export default Button;
