import  { useMemo } from 'react';
import { valueToPoint } from '../utils.js';

const StatComponent = ({ stat, index, total }) => {
  const point = useMemo(() => {
    return valueToPoint(stat.value + 10, index, total);
  }, [stat.value, index, total]);

  return (
    <text x={point.x} y={point.y}>
      {stat.label}
    </text>
  );
};

export default StatComponent;
