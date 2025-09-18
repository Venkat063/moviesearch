import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function ViewDetails(){
const {imdbID} = useParams ()
const [data, setData] = useState(null)

useEffect( () =>{
    const getData = async ( ) => {
        try {
            let apiPath = `http://www.omdbapi.com/?apikey=c409130f&i=${imdbID}`
        console.log(apiPath)
        let apiResponse = await axios.get(apiPath)
        console.log(apiResponse)
        setData({...apiResponse.data})
        } catch (error) {
            setData(null)
            alert("Unable to process your request")
        }

    }
    getData()
}, [])

return(
    <div className="container">
        <div className="row justify-content-center mt-5">
            {
                data != null &&
                <div className="row">
                    <div className="col-md-4">
                        <img src = {data.Poster} className= " img-fluid rounded shadow" />
                    </div>

                    <div className="col-md-8">
                        <h2>{data.Title} {data.Year} </h2>
                        <p> {data.Plot} <em>{data.Released}</em> </p>
                        <p><strong>Genre:</strong> {data.Genre} </p>
                        <p><strong>Write:</strong> {data.Writer} </p>
                        <p><strong>Director:</strong> {data.Director} </p>
                        <p><strong>Actors:</strong> {data.Actors} </p>
                        <p><strong>Awards:</strong> {data.Awards} </p>
                        <p><strong>BoxOffice:</strong> {data.BoxOffice} </p>
                        <p><strong>Ratings:</strong>{" "} imdbRating: {data.imdbRating}, {data.Ratings.map(r => `${r.Source}: ${r.Value}`).join(", ")}</p>

                        
                    </div>

                </div>
            }

        </div>
    </div>
)

}

export default ViewDetails