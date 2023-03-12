import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
function Tasks(){
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  function handleAdd(){
    setTasks([...tasks, {val:text, done:false}]);
    setText('');
  }

  return(
    <>
    <div className="addTask">
      <input value={text} onChange={(e)=>setText(e.target.value)}/>  
      <button onClick={handleAdd}>Add</button>
    </div>
    <div className="taskList">
      <ul>
      {tasks.map((t, i)=><li key={i}>{t.val}</li>)}
      </ul>
    </div>
    </>
  )
}
function App() {
  return (
    <>
    <Header />
    <Tasks />
    <Footer />
    </>
  );
}

export default App;
