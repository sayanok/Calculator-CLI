import { Command } from "commander";

const program = new Command();

program.name("calculator_cli").description("計算を行うCLIです");

program
  .command("add")
  .description("加算する")
  .option("-f", "floating number")
  .action((str, options) => {
    let n = 0;
    let result = 0;

    while (n < options.args.length) {
      str ? (result += Number.parseFloat(options.args[n])) : (result += Number(options.args[n]));
      n++;
    }
    console.log(result);
  });

program.parse();
