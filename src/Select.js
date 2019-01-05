import React from "react";

export const Select = ({ users, selectUser }) => {
  let forSelect = users.filter(
    (thing, index, self) =>
      self.findIndex(t => t.place === thing.place && t.age === thing.age) ===
      index
  );
  return (
    <select name="names" id="names" onChange={selectUser}>
      <option value="select_age">---Please select age -----</option>
      {forSelect
        .sort((a, b) => a > b)
        .map(user => (
          <option key={user.id} val={user.age}>
            {user.age}
          </option>
        ))}
    </select>
  );
};
