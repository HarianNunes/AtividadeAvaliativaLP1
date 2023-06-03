import { openDB } from './config/db.js'
import { CREATE_TABLE_OCORRENCIA, INSERT_OCORRENCIA, drop_table, foreign_keys_on } from './config/queries.js'

const vitimas = [
  {
    id: 1,
    nome: 'Vitima 1',
    idade: 23,
    genero: 'Masculino'
  },
  {
    id: 2,
          nome: 'Vitima 2',
          idade: 35,
          genero: 'Feminino'
  },
  {
    id: 3,
          nome: 'Vitima 3',
          idade: 47,
          genero: 'Masculino'
  }
]

const ocorrencias = [
  {
    id: 1,
    descricao: 'Roubo à mão armada',
    endereco: 'Rua Heitor Villa Lobos, 666, bairro Japiim',
    vitima: 1,
    obito: 'Não'
  },
  {
    id: 2,
    descricao: 'Roubo de veículo durante a noite',
    endereco: 'Rua Zuldimar Saraiva de Pinho, 140, bairro Cauamé',
    vitima: 1,
    obito: 'Sim'
  },
  {
    id: 3,
        descricao: 'Assassinato a tiros em bar',
        endereco: 'Rua José de Souza, 123, bairro Maria de Fátima',
        vitima: 2,
        obito: 'Sim'
  },
  {
    id:4,
    descricao: 'Chamada de emergência devido a uma briga de casal',
    endereco: 'Avenida Pau Brasil Condomínio 2 Bloco 4, 981, bairro Prefeito José Walter',
    vitima: 2,
    obito: 'Não'
  },
  {
    id:5,
    descricao: 'Assalto a estabelecimento comercial',
    endereco: 'Rua Policarpo de Melo, 928, Jardim Oriental',
    vitima: 3,
    obito: 'Não'
  },
  {
    id:6,
    descricao: 'Acidente de trânsito com vítima',
    endereco: 'Rua Barra de Guaraiba, 427, bairro Tancredo Neves',
    vitima: 3,
    obito: 'Não'
  }
]

;(async () => {
  const db = await openDB()
  await db.run(foreign_keys_on)
  // await db.exec(CREATE_TABLE_VITIMA)
 //await db.exec(CREATE_TABLE_OCORRENCIA)


 //Popular a tabela vítimas

  for(let i = 0; i < vitimas.length; i++){
    const {
      id, nome, idade, genero
    } = vitimas[i];

    await db.run(INSERT_VITIMA, id, nome, idade, genero)
    console.log(`Vítima #${i + 1} adicionada!`);
  }

  //Popular a tabela ocorrências

  for(let i = 0; i < ocorrencias.length; i++){
    const {id, descricao, endereco, vitima, obito} = ocorrencias[i];

    await db.run(INSERT_OCORRENCIA, id, descricao, endereco, vitima, obito)
    console.log(`Ocorrência número #${i + 1} Adicionada!`);
  }

    
  
  })()
