import { connect } from 'react-redux';
import UserTable from '../components/UserTable';
import { selectList } from '../actions/index';

// Switch content of userList prop based off filter
const mapStateToProps = (state) => {
  const { alltime, recent } = state.listReducer.dataByList;
  const selectedList = state.listReducer.selectedList;

  return selectedList === 'alltime'
    ? { userList: alltime.items, filter: selectedList }
    : { userList: recent.items, filter: selectedList };
};

const mapDispatchToProps = dispatch => ({
  clickAll: () => dispatch(selectList('alltime')),
  clickRecent: () => dispatch(selectList('recent')),
});

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserTable);

export default UserListContainer;
