import React, { useState ,useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [v,setV]=useState(null)
  const [dat,setDat]=useState(null);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(dat.id){
      axios
        .post(`http://localhost:8000/api/datas/${dat.id}/`,JSON.stringify(dat))
        .then((e)=>{
          console.log("added data to database")
          setDat(null)
        })  
        .catch((err)=>{
          console.error(err)
        })
    }
    else{
    //   axios
    //     .post(`http://localhost:8000/api/datas/`,JSON.stringify(dat))
    //     .then((e)=>{
    //       console.log("added data to database")
    //       setDat(null)
    //     })
    //     .catch((err)=>{
    //       console.error(err)
    //     })
    // }
        var data = JSON.stringify({
          "datas": dat
        });
        
        var config = {
          method: 'post',
          url: 'http://localhost:8000/api/datas/',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log("data added successfully");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  useEffect(()=>{
    axios
      .get('http://localhost:8000/api/datas/')
      .then((e)=>{
        console.log(e.data)
        setV(e.data[0].datas)
      })
      .catch((err)=>{
        console.error(err)
      })
  },[dat])
  
  return (
    <div className="App">
      <div className="heads">
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder={dat} onChange={(e)=>{setDat(e.target.value)}}/>
            <input type="submit" value="add" />
          </form>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default App
