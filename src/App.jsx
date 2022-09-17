import RouterMain from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
        <RouterMain />
        <ToastContainer 
        toastStyle={{ backgroundColor: "#fff", color: "black" }}autoClose={1500}/>
      
    </>
  )
}

export default App;

