import React from "react";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const ValueBtn = props => (
  <span className="value-btn" {...props}>
value time 
  </span>
);
export default ValueBtn;