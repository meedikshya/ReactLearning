import './App.css';


/*
function App() {
  return (
    <div className="App">
      <User name = "dikxu" age ={20} />
      <User name= "sita" age = {29} />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  );
};
*/

//use of props , use for reusability

/*
function App() {
  return (
    <div className='App'>
      <Job salary = {10000} position = "CEO" company = "Amazon" />
      <Job salary = {50000} position = "Assistance" company = "Daraz" />
    </div>
  )
}


const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
    )
}*/




//condition rendering
/*
function App() {
    const age = 16;

      if (age >= 18) {
        return <h1>Over age</h1>

      } else {
        return <div className='App'> Under Age</div>;
      }
}*/

//orrrrrrrrrrrrrr

/*
function App() {
  const age = 18;

  return <div className='App'>
    {age >= 18 ? <h1>Over </h1> : <h1>Under</h1>}
    <div className='head'>
      <h1> Helloooo</h1>
    </div>
  </div>;
}*/


//working with Lists

/*
function App() {
  const names = ["Ram", "asd", 1];

  return (
    <div className='App'>
      {names.map((name,key) => {
        return <h1 key= {key}> {name} </h1>
      })}
    </div>
  );
}*/



//Working with List using props

/*
function App() {
  const names = [
    { Name: "Ram", age: 9},
    { Name: "Hari", age: 10}
  ];

return (
  <div className='App'>
    {names.map((name, key) => {
      return <User name={name.Name} age= {name.age} />
    })}
  </div>
);
}

const User = (props) => {
  return (
    <div>
      {props.Name}
      {props.age}
    </div>
  );
};
*/



export default App;
