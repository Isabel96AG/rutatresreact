
import './App.css';
import peliculas from './peliculas';
import Peliculas from './film';
import {BrowserRouter, Route,Link} from 'react-router-dom';



function App() {
  const verPeliculas=peliculas.map(function(pelicula){
    return (
      <div >
         <img src={pelicula.cartel} alt=""/>
       <Link to={"/" +pelicula.titulo}>  
       <h1>{pelicula.titulo}</h1>
       </Link>
        
  
      </div>
    );
  });


  return  (
    <BrowserRouter>
   
    <Route exact path="/Los surfistas nazis deben morir">
    <Peliculas titulo={peliculas[0].titulo} 
          cartel={peliculas[0].cartel} 
          sinopsis={peliculas[0].sinopsis}
          />
    </Route>
    <Route exact path="/Jesucristo cazavampiros">
    <Peliculas titulo={peliculas[1].titulo} 
          cartel={peliculas[1].cartel} 
          sinopsis={peliculas[1].sinopsis}
          />
    </Route>
    <Route exact path="/Mutantes en la universidad">
    <Peliculas titulo={peliculas[2].titulo} 
          cartel={peliculas[2].cartel} 
          sinopsis={peliculas[2].sinopsis}
          />
    </Route>
    <Route exact path="/">
    {verPeliculas}

    </Route>
    </BrowserRouter>
       
  )

}

export default App;
