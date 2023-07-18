
import "./App.css";
import { Person } from "./components/Person";

function App(){


  return (
    <div className="App">
<Person
name = "ram"
email = "ram12@gmail.com"
age = {21}
isMarried = {true}
friends = {["harry", "pete", "steve"]}
 />
    </div>
  )
}
export default App;

