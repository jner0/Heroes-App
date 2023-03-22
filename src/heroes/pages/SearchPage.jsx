import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'; //este paqueto lo instalamos dentro del proyecto  yarn add query-string

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation(); //aqui obtenemos toda la info que esta en url

  const { q = '' } = queryString.parse(location.search); //procesa los query apram de manera separada

  const { searchText, onInputChange } = useForm({
    searchText: ''

  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if(searchText.trim().length <= 1 ) return;

    navigate(`?q=${searchText}`);

  }

  return (
    <>
        <h1>Search</h1>
        <hr />

        <div className="row">

            <div className="col-5">
              <h4>Searching</h4>
              <hr />

              <form onSubmit={ onSearchSubmit }>
                <input 
                  type="text" 
                  placeholder="Search a hero"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={ onInputChange }
                />

                <button className="btn btn-outline-primary mt-1">
                  Search
                </button>
              </form>
            </div>

            <div className="col-7">
                <h4>Results</h4>
                <hr />

                <div className="alert alert-primary">
                  Search a Hero
                </div>

                <div className="alert alert-danger">
                  No Hero with <b>{q}</b>
                </div>

                {/* <HeroCard/> */}

            </div>

        </div>

    </>
  )
}
