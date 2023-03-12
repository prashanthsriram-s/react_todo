import Header from "./header";
import Footer from "./footer";
import { useState } from "react";
function Tasks(){
  const [tasks, setTasks] = useState([]);
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
