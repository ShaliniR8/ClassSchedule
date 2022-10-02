import { useState } from "react";
import "./Course.css"
import CourseList from "./CourseList";
import CoursePage from "./CoursePage";

const terms = {
  Fall: "Fall",
  Winter: "Winter",
  Spring: "Spring"
};

const TermButton = ({term, selection, setSelection}) => (
  <div>
    <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
      onChange={() => setSelection(term)} />
    <label className="btn btn-success mb-1 p-2" htmlFor={term}>
    { term }
    </label>
  </div>
);

const TermSelector = ({selection, setSelection}) => (
  <div className="btn-group">
    { 
      Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
    }
  </div>
);

const Term = ({courses, selection}) => {
  const term = terms[selection]
  const arr = Object.entries(courses)
  const filtered = Object.entries([arr.filter(([key, value]) => value["term"] === term)])
  return (<div className="card">{filtered.map(([id, courses]) => <CoursePage key={id} courses={courses} />)}</div>)
}

const TermPage = ({courses}) => {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
  return (
    <div>
      <TermSelector selection={selection} setSelection={setSelection} />
      <Term courses={courses} selection = {selection} />
    </div>
  );
 
}

export default TermPage;