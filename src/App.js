import dictionary from "./dictionary.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dictionary} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        This was coded by{" "}
        <a href="https://adoring-haibt-562efa.netlify.app/">Amanda Hotchkiss</a>{" "}
        and is open-sourced on{" "}
        <a href="https://github.com/hotkiss1011/react-weather-project">
          GitHub
        </a>{" "}
        and hosted using <a href="https://www.netlify.com/">Netlify</a>.
      </footer>
    </div>
  );
}