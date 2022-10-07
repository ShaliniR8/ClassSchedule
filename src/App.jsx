import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CourseForm from './components/CourseForm';
import useJsonQuery from './utilities/fetch';


const url = 'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php'

const App = () =>{
  const [data, isLoading, error] = useJsonQuery(url);
 
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
    
  return(
  <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main data={data} />} />
        <Route path="/course_form/:id" element={<CourseForm data={data}/>} />
      </Routes>
      </BrowserRouter>
  </div>
  )
};

export default App;
