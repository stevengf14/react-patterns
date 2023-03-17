import PropTypes from "prop-types";

import "./styles.css";

export const CustomComponent = ({
  name,
  children,
  className = "div",
  style = {},
}) => {
  return (
    <div
      name={name}
      children={children}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
};

CustomComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};
