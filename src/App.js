import Resturant from "./component/basics/Resturant"
import menuApi from './component/basics/menuApi'
const App = () => {
  const mystyle = {
    
    backgroundColor: "purple",
    padding: "50px",
    fontFamily: "Arial",
    margin: "0px",
    textAlign:"center",
  
    
  };
  return (
    <div>
      <h1 style={mystyle}>its aman's website </h1><br/>
      <Resturant/>  
    </div>
  )
}

export default App