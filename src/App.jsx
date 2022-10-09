import 'bootstrap/dist/css/bootstrap.min.css';

import AppData from './AppData';


const url = 'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php'

const App = () =>{
  return(
  <div className="container">
    <AppData/>
  </div>
  )
};

export default App;
