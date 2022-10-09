import AppRoutes from "./components/AppRoutes";
import { useDbData } from "./utilities/firebase";

const AppData = () => {
  const [data, error] = useDbData('/');

  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;
  
  return <AppRoutes data={data} />
};

export default AppData;