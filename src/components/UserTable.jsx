import React, { PropTypes } from 'react';
import User from '../components/User';
import TableHeader from '../components/TableHeader';

const propTypes = {
  filter: PropTypes.string.isRequired,
  clickAll: PropTypes.func.isRequired,
  clickRecent: PropTypes.func.isRequired,
  userList: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    username: PropTypes.string.isRequired,
    lastupdate: PropTypes.string,
    alltime: PropTypes.number,
    recent: PropTypes.number,
  }).isRequired).isRequired,
};

const UserTable = ({ filter, clickAll, clickRecent, userList }) => (
  <table className="user-table table-responsive table-bordered center-block">
    <TableHeader filter={filter} onAllTimeClick={clickAll} onRecentClick={clickRecent} />
    <tbody>
      {userList.map(user => <User {...user} />)}
    </tbody>
  </table>
);

UserTable.propTypes = propTypes;

export default UserTable;
