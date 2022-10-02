import { useState } from 'react';
import CourseList from "./CourseList";

const CoursePage = ({courses}) => {
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

    return <div>{Object.entries([courses]).map(([id, courses]) => <CourseList key={id} courses={courses} selected={selected} toggleSelected={toggleSelected} />)}</div>

};

export default CoursePage;