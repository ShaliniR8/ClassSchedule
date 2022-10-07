import 'bootstrap/dist/css/bootstrap.min.css';
import useJsonQuery from './utilities/fetch';
import AppRoutes from './components/AppRoutes';


const url = 'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php'

const App = () =>{
  const [data, isLoading, error] = useJsonQuery(url);
 
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
    
  return(
  <div className="container">
      <AppRoutes data={data}/>
  </div>
  )
};

export default App;
