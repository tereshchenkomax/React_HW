import React from "react";

export const User = props => {
  let { name, age, id } = props;
  return (
    <li>
      id#{id} - {name} - {age}
    </li>
  );
};
