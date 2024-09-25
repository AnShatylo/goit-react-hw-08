import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilters } from '../../redux/filters/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const handleSearch = value => {
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        value={filter}
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
  );
}
