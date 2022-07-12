import fs from "fs";
import chalk from "chalk";

const pegarArquivo = (caminhoDoArquivo) => {
  const encoding = "utf-8";
  fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
    console.log(chalk.green(texto));
  });
};

pegarArquivo("./files/texto1.md");
