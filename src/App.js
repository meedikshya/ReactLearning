import "./App.css";
//import { useState } from "react";
//import  Axios  from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
//import { Profile } from "./pages/Profile"
//import { useState, createContext   } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/*function App() {
  const [inputValue, setInputValue] = useState("");

 const handleInputChange = (event) => {
    setInputValue(event.target.value);
 }

  return (
    <div className="App">
    <input type="text" onChange={handleInputChange}/>
    {inputValue}
    </div>
  )
}
*/

/*
function App() {

  const [colour, setColour] = useState("black");

  //external Function
  const changeColour = () => {
      setColour(colour === "black" ? "red" : "black")
       }

  return (
    <div className="App">
    <button onClick={changeColour}>change colour</button>

    <h1 style={{color : colour}}>ASDFGHJK</h1>
    </div>
  )
  
}*/


//fetching data

/*
function App() {
  const [excuse, setExuse] = useState("");

  const fetch = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
    .then((res) => {
      setExuse(res.data[0].excuse); //array ma cha api ma data , so [0] lekhnu parcha
    });
  };


  return (
    <div className="App">
    <h1>Generate an Excuse </h1>
    <button onClick = {() => fetch("party")} > party </button>
    <button onClick= {() => fetch("family")}> family </button>
    <button onClick= {() => fetch("office")} > office </button>

    <p>  { excuse } </p>
    </div>
  )
}*/


//self-done fetching api
//weather forecast 


/*
function App() {

  const [city, setCity] = useState("");

  const [weather, setWeather] = useState("");

  const fetchData = () => {
    Axios.get(`https://wttr.in/${city}?format=3`).then
    ((res) => {
      setWeather(res.data);
    });
  };

  const handleInput = (event) => {
      setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1> Get the Weather Prediction </h1>
      <input type="text" onChange={handleInput} />
      <button onClick={fetchData}> Predict </button>
      <p> {weather} </p>
          </div>
  )
}*/

/*
export const AppContext = createContext();

//REact Roter Dom
function App() {
const [username, setUsername] = useState("Dikshya");


  return (
    <div className="App">
    <AppContext.Provider value={{username,setUsername}}>
    <Router>
<Navbar />
      <Routes>
        <Route path="/" element= {<Home  />} />
        <Route path="/menu" element= { <Menu/>} />
        <Route path="/contact" element= { <Contact />} />
        <Route path="/profile" element = {<Profile  />} />
        <Route path="*" element = {<h1>Page not Found </h1>} />
      </Routes>
    </Router>
</AppContext.Provider>
    </div>
  )
}*/


function App() {
const client = new QueryClient(  );

    return (
      <div className="App">
      <QueryClientProvider client={client}>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element= {<Home  />} />
          <Route path="/menu" element= { <Menu/>} />
          <Route path="/contact" element= { <Contact />} />
          <Route path="*" element = {<h1>Page not Found </h1>} />
        </Routes>
      </Router>
      </QueryClientProvider>
      </div>
    )
  }
  



export default App;