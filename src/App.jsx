import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './components/Main';


const queryClient = new QueryClient();

const App = () =>{
return(
<div className="container">
  <QueryClientProvider client={queryClient}>
      <Main />
  </QueryClientProvider>
</div>
)
};

export default App;
