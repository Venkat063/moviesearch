import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {


  //http://www.omdbapi.com/?apikey=c409130f
const [ searchWord , setSearchWord]= useState(" ")
const [moviesData, setMoviesData] = useState([])

const searchMovies = async ( )=> {
  try{
    let apiPath = `http://www.omdbapi.com/?apikey=c409130f&s=${searchWord}`
    console.log(apiPath)
    let apiResponse = await axios.get(apiPath)
    console.log(apiResponse)
    setMoviesData([...apiResponse.data.Search])
  }catch(ex){
    alert(' Unable to process your request')
  }
}



  return (
   <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-md-7'>
        <h3 className=''>MovieSearch</h3>

        <div className='card mt-4 boder-0 shadow sm'>
          <div className='card-body'>
          <div>
            <input type='text' className='form-control' placeholder= ' search movies, series ' onChange={e => setSearchWord(e.target.value)} />
          </div>
          <div className='mt-4'>
          <button className='btn btn-primary' onClick={e => searchMovies()}>Search</button>
           
           </div>
          </div>
           

        </div>



        {
          moviesData.map(movie => (
            <div className='card mt-4 border-0 shadow-sm'>
              <div className='row gap-0'>
                <div className='col-md-2'>
                  <img src={movie.Poster} className='img-fluid rounded-start'/>
                </div>
                <div className='col-md-10'>
                  <a href={'view/'+ movie.imdbID} target='_blank'><h5>{movie.Title}</h5></a>
                  <div>Year:{movie.Year}</div>
                  <div>Type:{movie.Type}</div>
                </div>
              </div>
            </div>
          ))
        }


      </div>
    </div>
   </div>
  );
}

export default App;
