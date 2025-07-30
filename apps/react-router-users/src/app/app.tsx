import { Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
      </div>

      <Routes />
    </div>
  );
}

export default App;
