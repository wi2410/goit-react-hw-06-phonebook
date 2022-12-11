import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label>
        Find contacts by name <br />
        <FilterInput
          type="text"
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        />
      </label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onFilter: PropTypes.func,
};