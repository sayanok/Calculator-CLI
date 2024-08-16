import { Command } from "commander";

const program = new Command();

program.name("calculator_cli").description("計算を行うCLIです");

program
  .command("add")
  .description("加算する")
  .option("-s, --separator <char>", "<char>で入力された数値を区切る")
  .action((str, options) => {
    let n = 0;
    let result = 0;

    while (n < String(options.args).split(str.separator).length) {
      result += Number(String(options.args).split(str.separator)[n]);
      n++;
    }
    console.log(result);
  });

program.parse();
