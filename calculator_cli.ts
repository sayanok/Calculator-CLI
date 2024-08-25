import { Command } from "commander";

const program = new Command();
program.name("calculator_cli").description("計算を行うCLIです");
const add = program.command("add");
const floatingNumber = program.createOption("-f", "floating number");

const even = program
  .createCommand("even")
  .argument("<numbers...>")
  .action((numbers) => {
    const result = calculateForEvenAndOdd("even", numbers);
    console.log(result);
  });

const odd = program
  .createCommand("odd")
  .argument("<numbers...>")
  .action((numbers) => {
    const result = calculateForEvenAndOdd("odd", numbers);
    console.log(result);
  });

add
  .description("加算する")
  .arguments("<numbers...>")
  .addCommand(even)
  .addCommand(odd)
  .addOption(floatingNumber)
  .action((numbers, option) => {
    let result = 0;
    for (const arg of numbers) {
      if (option.f) {
        result += Number.parseFloat(arg);
      } else {
        Number.isInteger(Number(arg)) ? (result += Number(arg)) : result;
      }
    }
    console.log(result);
  });

program.parse();

function calculateForEvenAndOdd(oddOrEven, numbers) {
  let result = 0;
  let remainder = 0;

  oddOrEven === "even" ? (remainder = 0) : (remainder = 1);

  if (add.getOptionValue("f")) {
    for (const arg of numbers) {
      Number.parseFloat(arg) % 2 === remainder ? (result += Number(arg)) : result;
    }
    return result;
  } else {
    for (const arg of numbers) {
      Number(arg) % 2 === remainder ? (result += Number(arg)) : result;
    }
    return result;
  }
}
