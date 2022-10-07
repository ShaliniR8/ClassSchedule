import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Main from './components/Main';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import CourseForm from './components/CourseForm';


const queryClient = new QueryClient();

const App = () =>{
return(
<div className="container">
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/course_form/:id" element={<CourseForm />} />
    </Routes>
    </BrowserRouter>
  </QueryClientProvider>
</div>
)
};

export default App;
