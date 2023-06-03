import { openDB } from './config/db.js'
import { select_idade, select_vitima_feminia_obito, select_vitima_ocorrencia_endereco } from './config/queries.js'
;(async () => {
  const db = await openDB()
  // //Recuperar todas as vítimas cuja idade esteja entre uma faixa de idade (idade mínima e idade máxima)
  // const idade_menor = 20;
  // const idade_maior = 40;

  // const result = await db.all(select_idade, idade_menor, idade_maior)
  // console.log(result);

  //Recuperar todas as ocorrências com vítimas do gênero feminino onde houve óbito
  // const result = await db.all(select_vitima_feminia_obito)
  // console.log(result);

  //Recuperar todas as vítimas que tiveram ocorrências relacionadas a elas em um determinado endereço, onde apenas parte do endereço deve ser informado (ignorando maiúsculas e minúsculas)
  // const endereco = 'a';
  // const result = await db.all(select_vitima_ocorrencia_endereco, endereco);
  // console.log(result);
})()
