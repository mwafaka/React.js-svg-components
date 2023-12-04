import './App.css';
import { useState } from 'react';
import PolyGraph from './components/PolyGraph';

const App = () => {
  const [newLabel, setNewLabel] = useState('');
  const [stats, setStats] = useState([
    { label: 'A', value: 100 },
    { label: 'B', value: 100 },
    { label: 'C', value: 100 },
  ]);

  const add = (e) => {
    e.preventDefault();
    if (!newLabel) return;
    setStats((prevStats) => [
      ...prevStats,
      { label: newLabel, value: 100 },
    ]);
    setNewLabel('');
  };

  const remove = (stat) => {
    console.log(stats.length);
    if (stats.length > 3) {
      setStats((prevStats) =>
        prevStats.filter((s) => s !== stat)
      );
    } else {
      alert("Can't delete more!");
    }
  };

  return (
    <div>
      <svg width="200" height="200">
        <PolyGraph stats={stats} />
      </svg>
      {/* controls */}
      {stats.map((stat) => (
        <div key={stat.label}>
          <label>{stat.label}</label>
          <input
            type="range"
            value={stat.value}
            min="0"
            max="100"
            onChange={(e) => {
              setStats((prevStats) =>
                prevStats.map((s) =>
                  s === stat
                    ? { ...s, value: parseInt(e.target.value) }
                    : s
                )
              );
            }}
          />
          <span>{stat.value}</span>
          <button
            onClick={() => remove(stat)}
            className="remove"
          >
            X
          </button>
        </div>
      ))}
      <form id="add">
        <input
          name="newlabel"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
        />
        <button onClick={add}>Add a Stat</button>
      </form>
    </div>
  );
};

export default App;
