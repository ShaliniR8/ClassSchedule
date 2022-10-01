import './components/Course.css'
import Banner from "./components/Banner.jsx"
import CourseList from "./components/CourseList.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';



// const App = () => {
  
//   return (
//     <div className="App">
//       <header className="App-header">
//       {Banner(schedule.title)}
//       </header>

//       <div className="course-list">
//       { Object.entries(schedule.courses).map(([id, course]) => <CourseList key={id} course={course} />) }
//       </div>

//     </div>
//   );
// };
const queryClient = new QueryClient();
const App = () => 
 {
  const [data, isLoading, error] = useJsonQuery("https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php");
  return (
    <div className="App">
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div>
          {data.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};
export default App;
