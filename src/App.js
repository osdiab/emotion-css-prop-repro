import { css as cssCss } from "@emotion/css"
import { css as reactCss } from "@emotion/react"
import './App.css';

function App() {
  return (
    <div className="App">
      <p css={cssCss`
        color: red;
      `}>This should be red but it's not</p>
      <p css={reactCss`
        color: green;
      `}>This is green, as it should be</p>
    </div>
  );
}

export default App;
