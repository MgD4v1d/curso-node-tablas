const fs = require('fs');
const colors = require('colors');


const createFile = async(base = 5, listar=false, hasta = 10) => {

    try{

        let salida, output = '';

        for(let i =1; i<= hasta; i++){
            salida += `${colors.brightCyan(base)} ${colors.green('x')} ${colors.brightMagenta(i)} ${'='.gray} ${base * i}\n`;
            output += `${base} x ${i} = ${base * i}\n`;
        }

        if(listar){
            console.log('====================='.rainbow);
            console.log(colors.trap('    Tabla del:').random, colors.cyan(base));
            console.log('====================='.random);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, output);

        return colors.brightYellow(`tablaa-${base}.txt`);

    }catch(err){
        return  
    }

}


module.exports = {
    createFile
}