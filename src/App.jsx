import EmployeeList from "./components/EmployeeList";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="heading">React CRUD App</h1>
      <EmployeeList />
    </div>
  );
};
export default App;
