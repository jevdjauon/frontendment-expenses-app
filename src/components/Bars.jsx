import "../styles/bars.scss";
import data from "../data/data.json";

const ids = data.map((obj) => {
  return obj.amount;
});

const max = Math.max(...ids);

const Header = () => {
  return (
    <div className="bars-container">
      {data.map((item) => {
        return (
          <div className="bar" key={item.day}>
            <div className="value">${item.amount}</div>
            <div
              className={item.amount == max ? "biggest" : "standard"}
              style={{
                height: `calc(${item.amount}px * 2)`,
              }}
            ></div>
            <p>{item.day}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
