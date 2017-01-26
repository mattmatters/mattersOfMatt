/* eslint-disable */
import React, { PropTypes } from 'react';

const propTypes = {
  img: PropTypes.string,
  username: PropTypes.string,
  lastUpdate: PropTypes.string,
  alltime: PropTypes.number,
};

const User = ({ img, username, alltime, recent }) => (
  <tr className="">
    <td className="">
      <img className="img-profile img-thumbnail" src={img} alt="profile" />
      {username}
    </td>
    <td className="">{alltime}</td>
    <td className="">{recent}</td>
  </tr>
);

User.propTypes = propTypes;

export default User;
