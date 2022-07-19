import "./App.css";
import "./style/Countdown.css";
import Countdown from "./components/Countdown";
import { format } from "date-fns";
import { useState } from "react";

const THIS_YEAR = new Date().getFullYear();

const CTO_BIRTHDAY = `12/24/${THIS_YEAR}`;
const VERBOSE_DATE_STRING = "MMM dd yyyy";

function App() {
  const [birthday, setBirthday] = useState(CTO_BIRTHDAY);

  const onChange = (e) =>
    setBirthday(e.currentTarget.value.match(/^[^a-zA-Z]+$/));

  const birthdayYear = new Date(birthday).getFullYear();

  const appTitle = birthdayYear < THIS_YEAR ? "Countup" : "Countdown";

  return (
    <div className="App">
      <header className="App-header">
        <h1>{appTitle}</h1>
      </header>
      <h2>{format(new Date(birthday), VERBOSE_DATE_STRING)}</h2>
      <div className="content">
        <Countdown date={birthday ?? CTO_BIRTHDAY} />
      </div>
      <div>New Birthdate</div>
      <input value={birthday ?? ""} onChange={onChange} type="text" />
    </div>
  );
}

export default App;
