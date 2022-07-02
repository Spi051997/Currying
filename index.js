// Import stylesheets
import './style.css';

function sum(operation) {
  return (a) => {
    return (b) => {
      if (operation == 'sum') {
        return a + b;
      } else if (operation == 'multiply') {
        return a * b;
      } else if (operation == 'divide') {
        return Math.ceil(a / b);
      } else if (operation == 'subtract') {
        if (a >= b) {
          return a - b;
        } else {
          return 'Invalid subtract operation';
        }
      } else {
        return 'no/Invalid operation';
      }
    };
  };
}

console.log(sum('divide')(2)(5));
