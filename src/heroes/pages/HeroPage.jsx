import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const {id} = useParams(); //el ID viene de la ruta en donde se especifico /hero:id
  //console.log(id);

  const hero = getHeroById(id);

  if(!hero){
    return <Navigate to="/marvel"/>
  }

  return (
    <h1>Hero</h1>
  )
}
