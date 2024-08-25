import { Command } from "commander";

const program = new Command();
program.name("calculator_cli").description("計算を行うCLIです");
const floatingNumber = program.createOption("-f", "floating number");
const add = program.command("add");

const even = program
  .createCommand("even")
  .argument("<numbers...>")
  .action((numbers, str, options) => {
    let n = 0;
    let result = 0;

    if (add.getOptionValue("f")) {
      for (const arg of options.args) {
        Number.parseFloat(arg) % 2 === 0 ? (result += Number(arg)) : result;
      }
      console.log(result);
    } else {
      while (n < options.args.length) {
        Number(numbers[n]) % 2 === 0 ? (result += Number(numbers[n])) : result;
        n++;
      }
      console.log(result);
    }
  });

const odd = program
  .createCommand("odd")
  .argument("<numbers...>")
  .action((numbers, str, options) => {
    let n = 0;
    let result = 0;

    if (add.getOptionValue("f")) {
      while (n < options.args.length) {
        Number.parseFloat(numbers[n]) % 2 === 1 ? (result += Number(numbers[n])) : result;
        n++;
      }
      console.log(result);
    } else {
      while (n < options.args.length) {
        Number(numbers[n]) % 2 === 1 ? (result += Number(numbers[n])) : result;
        n++;
      }
      console.log(result);
    }
  });

add
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
