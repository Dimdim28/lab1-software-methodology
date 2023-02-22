import { quadraticEquationSolver } from "./solver.js";

const startInteractiveMode = () => {
  const questions = ["a = ", "b = ", "c = "];
  const params = [];

  const checkNumber = (data) => {
    return (
      data.toString().trim() === parseInt(data.toString()).toString().trim() ||
      data.toString().trim() === parseFloat(data.toString()).toString().trim()
    );
  };

  process.stdin.on("data", (data) => {
    if (params.length < questions.length) {
      const parsedData = parseFloat(data.toString());
      if (params.length === 0 && parsedData === 0) {
        console.log("Error. a cannot be 0");
        process.stdout.write(questions[0]);
      } else if (!checkNumber(data)) {
        console.log(
          `Error. Expected a valid real number, got ${data
            .toString()
            .trim()} instead`
        );
        process.stdout.write(questions[params.length]);
      } else {
        params.push(parsedData);
        if (params.length < questions.length) {
          process.stdout.write(questions[params.length]);
        } else {
          console.log(quadraticEquationSolver(...params));
          process.exit(0);
        }
      }
    }
  });

  process.stdout.write(questions[0]);
};

export { startInteractiveMode };
