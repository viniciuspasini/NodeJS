import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Erro'))
}

function pegaArquivo(path){
    fs.readFile(path, 'utf-8', (erro, texto)=>{
        if(erro){
            trataErro(erro)
        }
        console.log(chalk.green(texto))
    })
}

pegaArquivo('./arquivos/texto.md')