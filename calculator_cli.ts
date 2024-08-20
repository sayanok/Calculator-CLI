import { Command } from "commander";

const program = new Command();

function calculate(result: number, number: number) {
  return result + number;
}

const even = program.createCommand("even").action((str, options) => {
  let n = 0;
  let result = 0;

  while (n < options.args.length) {
    Number(options.args[n]) % 2 === 0 ? (result = calculate(Number(result), Number(options.args[n]))) : result;
    n++;
  }
  console.log(result);
});

const odd = program.createCommand("odd").action((str, options) => {
  let n = 0;
  let result = 0;

  while (n < options.args.length) {
    Number(options.args[n]) % 2 === 1 ? (result = calculate(Number(result), Number(options.args[n]))) : result;
    n++;
  }
  console.log(result);
});

program.name("calculator_cli").description("計算を行うCLIです");

program
  .command("add")
  .description("加算する")
  .option("-f", "floating number")
  .addCommand(even)
  .addCommand(odd)
  .action((str, options) => {
    let n = 0;
    let result = 0;

    while (n < options.args.length) {
      if (str.f) {
        result = calculate(result, Number.parseFloat(options.args[n]));
      } else {
        Number.isInteger(Number(options.args[n])) ? (result = calculate(result, Number(options.args[n]))) : result;
      }
      n++;
    }
    console.log(result);
  });

program.parse();
