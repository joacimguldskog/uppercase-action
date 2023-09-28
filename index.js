const core = require("@actions/core");

try {
  const text = core.getInput("text");
  const textUppercase = text.toUpperCase();

  core.setOutput("textUppercase", textUppercase);
} catch (error) {
  core.setFailed(error.message);
}
