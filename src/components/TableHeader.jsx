import React, { PropTypes } from 'react';

const propTypes = {
  filter: PropTypes.string.isRequired,
  onAllTimeClick: PropTypes.func.isRequired,
  onRecentClick: PropTypes.func.isRequired,
};

const TableHeader = ({ filter, onAllTimeClick, onRecentClick }) => (
  <thead>
    <tr id="user-table-header">
      <th><p>UserName</p></th>
      <th>
        <button
          onClick={onAllTimeClick}
          className={filter === 'alltime' ? 'active' : 'inactive'}
        >
          All Time
          {filter === 'alltime' ? <i className="fa fa-arrow-down" aria-hidden="true" /> : ''}
        </button>
      </th>
      <th>
        <button onClick={onRecentClick} className={filter === 'recent' ? 'active' : 'inactive'}>
          Recent
          {filter === 'recent' ? <i className="fa fa-arrow-down" aria-hidden="true" /> : ''}
        </button>
      </th>
    </tr>
  </thead>
);

TableHeader.propTypes = propTypes;

export default TableHeader;
