import { useState } from 'react';
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

/*
function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Venus", isGasPlanet: true }
  ];

  return  (
  <div className='App'>

  {planets.map((planet,key) => {
    if (planet.isGasPlanet) return  <h1> {planet.name} </h1>;
  })}

  </div>
  );
}*/

//use of states

/*
function App() {

  const[age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);
  }

  return(
    <div className='App'>
      <h1>{age}</h1>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  )

}*/


//use cases with states
/*
function App(){
  const[inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return(
    <div className='App'>
      <input type='text' onChange={handleInputChange} />
      {inputValue}
    </div>
  )
}*/



/*
function App(){

  const[color, setColor] = useState("black");

  const toggle = () => {
    setColor(color === "black" ? "red" : "black");
  }

  return(
    <div className='App'>
    <button onClick={toggle}> Change </button>
     <h1 style={{color: color}}> Hi, asdfghj </h1>
    </div>
  )
}*/


//orrrr

/*
function App(){

  const[color, setColor] = useState("black");

  return(
    <div className='App'>
    <button onClick={() => {
      setColor(color === "black" ? "red" : "black");
    }}>Show/Hide
    </button>
    <h1 style={{color: color}}> Hi, asdfghj </h1>
    </div>
  )
}*/

/*
function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  const setToZero = () => {
    setCount(0);
  }

  return (
    <div className='App'>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set To Zero </button>
      {count}
    </div>
  )
}*/




// TO DO LIST 

function App() {
  const[todoList, setTodoList] = useState([]);
  const[newTask, setNewTask] = useState("");

  const handleChange = (event) => { 
    setNewTask(event.target.value);
  }

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  }

  const deleteTask = (taskName) => {
    const newToDoList = todoList.filter((task) => {
      return task !==  taskName
    });
    setTodoList(newToDoList);
  }
  return (
    <div className='App'>

      <div className='task'>
      <input onChange={handleChange} />

      <button onClick={addTask}>Add Task</button>

      </div>

      <div className='list'>
      {todoList.map((todo) => {
        return (
        <div>
        <h1> {todo}
        
         </h1>
         <button onClick={() => deleteTask(todo)}> x </button>
        
        </div>
        )
      })}
    
      </div>
    </div>
  )
}

export default App;
