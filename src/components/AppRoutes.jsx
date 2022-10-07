
import Main from './Main';
import CourseForm from './CourseForm';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const AppRoutes = ({data}) =>(

     <BrowserRouter>
          <Routes>
          <Route path="/" element={<Main data={data} />} />
          <Route path="/course_form/:id" element={<CourseForm data={data}/>} />
          </Routes>
     </BrowserRouter>

)

export default AppRoutes;
