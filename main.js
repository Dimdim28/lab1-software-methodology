import { startFileMode } from "./file.js";
import { startInteractiveMode } from "./interactive.js";

if (process.argv.length < 3) {
  startInteractiveMode();
} else {
  startFileMode();
}
