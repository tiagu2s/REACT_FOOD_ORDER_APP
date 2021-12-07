import classes from "./Checkout.module.css";

const submitHandler = (event) => {
  event.preventDefault();
};
const Checkout = (props) => {
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button>Confirm</button>
      <button onClick={props.onCancel}>Cancel</button>
    </form>
  );
};

export default Checkout;
