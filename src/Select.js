import React from "react";

export const Select = ({ users, selectUser }) => {
  let agesUnique = users
    .map(item => item.age)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => a - b);
  console.log(agesUnique);
  return (
    <select name="names" id="names" onChange={selectUser}>
      <option value="select_age" key="-1">
        ---Please select age -----
      </option>
      {agesUnique.map(user => (
        <option key={user} value={user}>
          {user}
        </option>
      ))}
    </select>
  );
};

//selected принудительно
