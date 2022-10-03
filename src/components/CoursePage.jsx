import { useState } from 'react';
import CourseList from "./CourseList";
import Modal from './Modal';
import Cart from './Cart';
import { timeAndDay, checkConflict } from '../utilities/timeOperations';

const CoursePage = ({courses}) => {
  const [selected, setSelected] = useState([]);
  const [conflict, setConflict] = useState([])
  
  const toggleConflict = (item, selectedTime) => {
    const arr1 = Object.entries(courses).map(([id, course]) => course )  
    const arr2 = arr1.filter((x) => x[0] !== item)
    const tempConflict = arr2.filter((x) => checkConflict(selectedTime, x[1].meets))
    const arr3 = Object.entries(tempConflict).map(([id, course])=> course[0])
 
    setConflict(selected.includes(item)? conflict.filter((x)=> arr3.includes(x)===false):conflict.concat(arr3))
  
    
  }

  const toggleSelected = (item) =>{
    console.log("Selected: ", selected)
        console.log("Conflict: ", conflict)

            console.log("item: ", item)

    setSelected(
    (selected.includes(item) || conflict.includes(item)) 
    ? selected.filter(x => x !== item)
    : [...selected, item]
  )};
  



    return (
    <div>
      <div className="d-flex align-items-end flex-column bd-highlight mb-3">
        <div className="p-2 bd-highlight">
          <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" >
            <i className="bi bi-cart4">Course Plan</i>
          </button>
        </div>
      </div>
      
      <Modal>
        <Cart selected={selected} courses={courses} />
      </Modal>
      {Object.entries([courses]).map(([id, courses]) => <CourseList key={id} courses={courses} selected={selected} toggleSelected={toggleSelected} conflict = {conflict} toggleConflict={toggleConflict}/>)}
    </div>
    )

};

export default CoursePage;