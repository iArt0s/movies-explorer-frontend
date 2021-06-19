import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import search from '../../images/search.svg';


function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
          <img className='search__form-icon' src={search} alt='Логотип' />
        <input className='search__form-input' placeholder='Фильм'></input>
        <button className='search__form-submit-btn link'>Найти</button>
      </form>

      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
