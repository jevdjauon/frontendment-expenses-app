import "./styles/app.scss";
import Header from "./components/Header";
import Spending from "./components/Spending";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Spending />
    </div>
  );
};

export default App;
