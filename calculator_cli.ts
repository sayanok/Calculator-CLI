import { Command } from "commander";

const program = new Command();
program.name("calculator_cli").description("計算を行うCLIです");
const floatingNumber = program.createOption("-f", "floating number");
const add = program.createCommand("add").addOption(floatingNumber);

const even = program.createCommand("even").action((str, options) => {
  let n = 0;
  let result = 0;

  if (options.parent.getOptionValue("f")) {
    // console.log(add.getOptionValue("floatingNumber"));
    while (n < options.args.length) {
      Number.parseFloat(options.args[n]) % 2 === 0 ? (result += Number(options.args[n])) : result;
      n++;
    }
    console.log(result);
  } else {
    while (n < options.args.length) {
      Number(options.args[n]) % 2 === 0 ? (result += Number(options.args[n])) : result;
      n++;
    }
    console.log(result);
  }
});

const odd = program.createCommand("odd").action((str, options) => {
  let n = 0;
  let result = 0;

  if (options.parent.getOptionValue("f")) {
    while (n < options.args.length) {
      Number.parseFloat(options.args[n]) % 2 === 1 ? (result += Number(options.args[n])) : result;
      n++;
    }
    console.log(result);
  } else {
    while (n < options.args.length) {
      Number(options.args[n]) % 2 === 1 ? (result += Number(options.args[n])) : result;
      n++;
    }
    console.log(result);
  }
});

program
  .command("add")
  .description("加算する")
  .arguments("<numbers...>")
  .addCommand(even)
  .addCommand(odd)
  .addOption(floatingNumber)
  .action((numbers, option) => {
    let n = 0;
    let result = 0;

    while (n < numbers.length) {
      if (option.f) {
        result += Number.parseFloat(numbers[n]);
      } else {
        Number.isInteger(Number(numbers[n])) ? (result += Number(numbers[n])) : result;
      }
      n++;
    }
    console.log(result);
  });

program.parse();
