import { quadraticEquationSolver } from "./solver.js";

const startInteractiveMode = () => {
  const questions = ["a = ", "b = ", "c = "];
  const params = [];

  process.stdin.on("data", (data) => {
    if (params.length < questions.length) {
      const parsedData = parseFloat(data.toString());
      params.push(parsedData);
      if (params.length < questions.length) {
        process.stdout.write(questions[params.length]);
      } else {
        console.log(quadraticEquationSolver(...params));
        process.exit();
      }
    }
  });

  process.stdout.write(questions[0]);
};

export { startInteractiveMode };
