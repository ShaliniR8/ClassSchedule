import './components/Course.css'
import Banner from "./components/Banner.jsx"
import CourseList from "./components/CourseList.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';

const Main = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return [Banner(data.title), <div className="course-list">{Object.entries(data.courses).map(([id, course]) => <CourseList key={id} course={course} />)}</div>];
}

const queryClient = new QueryClient();

// const App = () => {

//   return (
//     <div className="App">
//    
//       <QueryClientProvider client={queryClient}>
//         <div className="container">
//           <Main />
//         </div>
//       </QueryClientProvider>

//       {/* <div className="course-list">
//       { Object.entries(schedule.courses).map(([id, course]) => <CourseList key={id} course={course} />) }
//       </div> */}

//     </div>
//   );
// };


const App = () =>{
return(
  <QueryClientProvider client={queryClient}>
    <div className="App">
      <Main />
    </div>
  </QueryClientProvider>
)
};

export default App;
