import { useState } from 'react';
import CourseList from "./CourseList";
import Modal from './Modal';
import Cart from './Cart';

const CoursePage = ({courses}) => {
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

    return (
    <div>
      <div class="d-flex align-items-end flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight">
          <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" >
            <i className="bi bi-cart4">Course Plan</i>
          </button>
        </div>
      </div>
      
      <Modal>
        <Cart selected={selected} courses={courses} />
      </Modal>
      {Object.entries([courses]).map(([id, courses]) => <CourseList key={id} courses={courses} selected={selected} toggleSelected={toggleSelected} />)}
    </div>
    )

};

export default CoursePage;