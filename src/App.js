import React, {useEffect, useState} from 'react'
import './App.css';
import getGifs from './services/getGifs'


function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    getGifs({keyword: 'rick'}).then(gifs=> setGifs(gifs))    
  }, [])

  return(
    <div className="App">
    <section className="App-content">
      {
        gifs.map(singleGif => {
          return <div>
            <h4>{singleGif.title}</h4>
            <small>{singleGif.id}</small>
            <img alt={singleGif.title} src={singleGif.url} alt="" /> 
          </div>
        })
      }
    </section>
    </div>
  )
}

export default App;
