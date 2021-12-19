import React from "react";
import PropTypes from "prop-types";

export default function User(props) {
  console.log(props);
  const { name, surname, age, isLoggedIn, address } = props;
  return (
    <div>
      <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Please login!"}</h1>
      {address.title} {address.postCode}
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isLoggedIn: PropTypes.bool.isRequired,
  address: PropTypes.shape({
    title: PropTypes.string,
    postCode: PropTypes.number,
  }),
};
