import './App.css';
import React,{useState,useEffect} from "react";



function App() {

  const [joke,setJoke]=useState("get a joke");
  const [loading,setLoading]=useState(false);


  useEffect(()=>{
    handleGet();
  },[])


  

  const handleGet=async()=>{
    try{
      setLoading(true);
      const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

      const res=await fetch(url);
      const responseJson=await res.json();
      setJoke(responseJson);
      setLoading(false);

    }
    catch(error){
      setJoke(error);
    }
  }


  return (
    <div className="whole_container">
  <div className="heading">Random Joke generator</div>
  <button className="joke_button" onClick={handleGet}>Tell me a joke</button>
  <div className="joke_container">{loading?<h1>loading....</h1>:(
    <div className="main">
    <p>{joke.joke}</p>
    <h3>Category : {joke.category}</h3>
    </div>
  )}</div>
  
    </div>
  )
}

export default App;
