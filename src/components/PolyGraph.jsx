
import AxisLabel from './AxisLabel';
import { valueToPoint } from '../utils';

// eslint-disable-next-line react/prop-types
const PolyGraph = ({ stats }) => {
  const points = stats
    // eslint-disable-next-line react/prop-types
    .map((stat, i) => {
      // eslint-disable-next-line react/prop-types
      const { x, y } = valueToPoint(stat.value, i, stats.length);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <g>
      <polygon points={points}></polygon>
      <circle cx="100" cy="100" r="80"></circle>
      {stats.map((stat, index) => (
        <AxisLabel
          key={index}
          stat={stat}
          index={index}
          // eslint-disable-next-line react/prop-types
          total={stats.length}
        />
      ))}
    </g>
  );
};

export default PolyGraph;
