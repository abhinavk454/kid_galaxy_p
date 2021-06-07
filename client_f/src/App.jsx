import React, { useState ,useEffect} from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [v,setV]=useState([])
  const [count,setCount]=useState(0)
  const [dat,setDat]=useState(null);
  
  const handleDelete=()=>{}
  const handleEdit=()=>{}

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
          setCount(count+1)
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
        setV(e.data)
      })
      .catch((err)=>{
        console.error(err)
      })
  },[dat,count])
  
  return (
    <div className="App">
      <div className="heads">
        <div className="frm">
          <form onSubmit={handleSubmit}>
            <input id="fm" type="text" placeholder={dat} onChange={(e)=>{setDat(e.target.value)}}/>
            <input type="submit" value="add"/>
          </form>
        </div>
        <div>
          {
            v.map((da,key)=>
              <div className="main_d">
                <div>
                  <li>
                    <ol>{da.datas}</ol>
                  </li>
                </div>
                <div className="op">
                  <button onClick={handleDelete}>Delete</button>
                  <button onClick={handleEdit}>Edit</button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
