import engines from '../../../assets/engines.json';
import chassis from '../../../assets/chassis.json';
import bodies from '../../../assets/bodies.json';
import colors from '../../../assets/colors.json';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function createMockData() {
  const cars = Array.from({
    length: 50,
  },
    () => {
      const costs = shuffleArray([0, 1, 2]);
      return {
        name: 'Random car ' + Math.ceil(Math.random() * 1000),
        speed: engines[costs[0]].speed,
        handling: chassis[costs[1]].handling,
        body: bodies[costs[2]].type,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });
  return {
    cars,
    engines,
    bodies,
    chassis,
    colors,
  };
}
