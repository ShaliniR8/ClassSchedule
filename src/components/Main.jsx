import useJsonQuery from "../utilities/fetch"
import Banner from "./Banner";
import TermPage from './TermPage';

const Main = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
 
  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;

  return [Banner(data.title) ,Object.entries([data.courses]).map(([id,courses]) => <TermPage key = {id} courses={courses} />)];

}

export default Main;