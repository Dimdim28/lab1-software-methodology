import { readFileSync, existsSync } from "fs";
import { quadraticEquationSolver } from "./solver.js";

const formatChecker = (data) =>
  /^-?\d+(\.\d+)? -?\d+(\.\d+)? -?\d+(\.\d+)?\r?\n$/g.test(data);

const startFileMode = () => {
  const filePath = process.argv[2];
  if (!existsSync(filePath)) {
    console.log(`Error: file ${filePath} does not exist`);
    process.exit(1);
  }
  const fileData = readFileSync(filePath).toString();
  if (!formatChecker(fileData)) {
    console.log("invalid file format");
    process.exit(1);
  }
  const params = fileData
    .split("\n")[0]
    .split(" ")
    .map((string) => parseFloat(string));
  if (params[0] === 0) {
    console.log("Error. a cannot be 0");
    process.exit(1);
  }
  console.log(quadraticEquationSolver(...params));
};

export { startFileMode };
