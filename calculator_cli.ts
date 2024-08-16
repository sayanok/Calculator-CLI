import { Command } from "commander";

const program = new Command();

program.name("calculator_cli").description("計算を行うCLIです");

program
  .command("add")
  .description("加算する")
  .action((str, options) => {
    let n = 0;
    let result = 0;

    while (n < options.args.length) {
      result += Number(options.args[n]);
      n++;
    }
    console.log(result);
  });

program.parse();
