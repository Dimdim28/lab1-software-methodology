"use strict";

const getDiscriminant = (a, b, c) => b ** 2 - 4 * a * c;

const getTwoRoots = (a, b, discriminant) => {
  const sqrt = Math.sqrt(discriminant);
  return [(-b - sqrt) / (2 * a), (-b + sqrt) / (2 * a)];
};

const getSolve = (a, b, discriminant) => {
  if (discriminant === 0) {
    const x1 = -b / (2 * a);
    console.log("There is 1 root");
    return `x1 = ${x1}`;
  } else if (discriminant > 0) {
    const [x1, x2] = getTwoRoots(a, b, discriminant);
    console.log("There are 2 roots");
    return `x1 = ${x1}\nx2 = ${x2}`;
  } else return "There are 0 roots";
};

const quadraticEquationSolver = (a, b, c) => {
  console.log(`Equation is: ${a} x^2 + ${b} x + ${c} = 0`);
  if (!a) return `Error. Expected a valid real number, got ${a} instead`;
  const discriminant = getDiscriminant(a, b, c);
  return getSolve(a, b, discriminant);
};

console.log(quadraticEquationSolver(2, 1, -3));
