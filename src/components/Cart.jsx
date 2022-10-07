import './css/Cart.css';
import "./Course"

const Cart = ({selected, courses}) => (
  <div className="cart">
    {
      selected.length === 0 ? <div><h2>The cart is empty.</h2> <span> Click on a course card to add it to your Cart </span></div>: selected.map(courseid => (
          
            <div className="list-group">
            {
              courses.map(([id, course]) =>   id===courseid? <li className="list-group-item d-flex justify-content-between align-items-center "> {course.number}:{course.title} <div className="badge badge-pill badge-primary">{course.meets}</div></li>  :'' )
            }
          </div>
        ))
    }
  </div>
);

export default Cart;