import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Erro'))
}

async function pegaArquivo(path){
    try {
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(path, encoding)
        console.log(chalk.green(texto)) 
    } catch (error) {
        trataErro(error)
    } finally{
        console.log('operacao concluida')
    }
}

/*function pegaArquivo(path){
    const encoding = 'utf-8'
    fs.promises.readFile(path, encoding)
    .then((texto) => {
        console.log(chalk.green(texto))
    })
    .catch(trataErro)
}*/

/*function pegaArquivo(path){
    fs.readFile(path, 'utf-8', (erro, texto)=>{
        if(erro){
            trataErro(erro)
        }
        console.log(chalk.green(texto))
    })
}*/

pegaArquivo('./arquivos/texto.md')