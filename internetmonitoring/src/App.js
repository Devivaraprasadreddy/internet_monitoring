import './App.css';
import './Components/Updateform.css';

import Updateform from './Components/Updateform';
import Dropdown from './Components/Dropdown';
function App() {
  return (
    <div className="App">
   <Updateform placeholder="Roll Number"/>
   <Updateform placeholder="Email"/>
   <Updateform placeholder="Mobile Number"/>
   <Dropdown/>  

   
        
    </div>
  );
}

export default App;
