import "./styles.css";
import { useClassState as subscribe } from "./useComplextState";
import { useState } from "react";

class Data {
  data = {
    count: 0,
    user: { age: 10, address: { city: "Hyd" } }
  };
  get formatCount() {
    return "$" + this.data.count;
  }
  increment = () => {
    debugger;
    console.log("increment");
    this.data.count++;
    this.changeCity("Delhi");
  };
  changeCity = (newCity) => {
    console.log("in change city");
    this.data.user.address.city = newCity;
  };
}

let data = new Data();

export default function App() {
  subscribe(data);

  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() => {
          count++;
          setCount(count);
        }}
      >
        {count}
      </button>
      <h1 onClick={() => data.increment(10)}>Hello CodeSandbox</h1>
      {data.data.count} {data.formatCount}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
