import Bars from "./Bars";
import "../styles/spending.scss";

const Spending = () => {
  return (
    <div className="spending-container">
      <h1>Spending - Last 7 days</h1>
      <Bars />
      <div className="divider"></div>
      <div className="total">
        <div className="this-month">
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>
        <div className="last-month">
          <h5>+2.4%</h5>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Spending;
