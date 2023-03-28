import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'; //este paqueto lo instalamos dentro del proyecto  yarn add query-string

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation(); //aqui obtenemos toda la info que esta en url

  const { q = '' } = queryString.parse(location.search); //procesa los query apram de manera separada
  const heroes = getHeroesByName(q);

  //para los mensajes condicionales de error y otro
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q

  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if(searchText.trim().length <= 1 ) return;
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

                {/* {
                  ( q === '' )
                  ? <div className="alert alert-primary">Search a Hero</div>
                  : ( heroes.length === 0 ) && <div className="alert alert-danger">No Hero with <b>{q}</b></div>
                } */}

                <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>
                  Search a Hero
                </div>

                <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}>
                  No Hero with <b>{q}</b>
                </div>
                                
                {
                  heroes.map( hero => (
                    <HeroCard key={ hero.id } { ...hero } />
                  ))
                }

                {/* <HeroCard/> */}

            </div>

        </div>

    </>
  )
}
