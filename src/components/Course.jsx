import './css/Course.css'
import { Link } from 'react-router-dom'; 
import { useAuthState } from '../utilities/firebase';
import { useProfile } from '../utilities/profile';

const AdminAlert = () => {
     return <div class="alert alert-info" role="alert">hi</div>
}

const ShowEditButton = ({id}) => {
     const [user] = useAuthState();
     const [profile, profileLoading, profileError] = useProfile();
     if (user){
          // const error = profile.isAdmin ? 
          if (profile.isAdmin) return <Link to={`/courses/${id}`} className="btn btn-outline-success bi-pen-fill"/>

     }
     else return <></> ;     


}

const Course = ({id, course, selected, useStateToggler, conflict}) => (
     <>
     <div className="card m-1 p-2" data-cy="course"> 
          <ShowEditButton id = {id}/>
          <div className="card m-1 p-2" onClick={() => {useStateToggler(id, course.meets, selected, conflict) }}>
          <div className={`card-body ${conflict.includes(id)? "bi bi-x-circle-fill" : (selected.includes(id)? 'selected' : '')}`}>
          <h3 className="card-title"> {course.term} CS {course.number} </h3>
          <p className="card-text"> {course.title} </p>
          <div className="card-footer">
          <p className="card-text"> {course.meets} </p>
          </div>
          </div>
          </div>
     </div>
     </>
);

export default Course;