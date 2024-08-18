import { Command } from "commander";

const program = new Command();

program.name("calculator_cli").description("計算を行うCLIです");

program
  .command("add")
  .description("加算する")
  .option("--even", "偶数のみ加算する")
  .option("--odd", "偶数のみ加算する")
  .option("-f", "floating number")
  .action((str, options) => {
    let n = 0;
    let result = 0;

    while (n < options.args.length) {
      if (!str.even && !str.odd && str.f) {
        str.f ? (result += Number.parseFloat(options.args[n])) : (result += Number(options.args[n]));
      } else if (str.even) {
        Number(options.args[n]) % 2 === 0 ? (result += Number.parseFloat(options.args[n])) : result;
      } else if (str.odd) {
        Number.parseFloat(options.args[n]) % 2 !== 0 ? (result += Number.parseFloat(options.args[n])) : result;
      } else if (!str.even && !str.odd && !str.f) {
      }

      n++;
    }
    console.log(result);
  });

program.parse();
