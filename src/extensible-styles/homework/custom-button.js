import PropTypes from "prop-types";

import "./styles.css";

export const CustomButton = ({
  name,
  type,
  onClick,
  children,
  className = "btn btn-primary",
  style = {},
}) => {
  return (
    <button
      name={name}
      type={type}
      onClick={onClick}
      children={children}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit"]).isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};
