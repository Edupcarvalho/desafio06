const alunos = [
    {
        nome: "Eduardo",
        primeiraNota: Number(5),
        segundaNota: Number(6)
    },
    {
        nome: "Julia",
        primeiraNota: Number(8),
        segundaNota: Number(9)
    },

   

]



function media(primeiraNota, segundaNota){
    return ((primeiraNota + segundaNota)/2).toFixed(2)
}



function aprova(primeiraNota, segundaNota){
   if(((primeiraNota + segundaNota)/2) >= 7){
    return "e você foi aprovado(a) no concurso"
   }else{
    return "e você não foi aprovado(a) no concurso"
   }
}



function printAluno(aluno){
   return `
       Aluno(a) ${aluno.nome} possui média de ${media(aluno.primeiraNota, aluno.segundaNota)}
       e ${aprova(aluno.primeiraNota, aluno.segundaNota)}

   `

   
   
}





for(let aluno of alunos){
    let message = printAluno(aluno);
    alert(message);
   

}