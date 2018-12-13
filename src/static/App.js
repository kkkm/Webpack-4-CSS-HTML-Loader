import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div>
      <p className="p-3 mb-2 bg-danger text-white">React here!</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));