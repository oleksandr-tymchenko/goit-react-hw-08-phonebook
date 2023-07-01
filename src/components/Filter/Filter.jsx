import { FilterCont, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { setFilterValue } from 'redux/filter/slice';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const onSearchValue = e => {
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <FilterCont>
      <label htmlFor="filter">Find contacts by name</label>

      <Input
        type="text"
        value={filterValue}
        id="filter"
        onChange={onSearchValue}
        placeholder="Jacob Mercer"
      />
    </FilterCont>
  );
}
