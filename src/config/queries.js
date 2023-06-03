export const foreign_keys_on = `
  PRAGMA foreign_keys = ON;
`

export const CREATE_TABLE_VITIMA = `
  create table if not exists vitima (
    id integer primary key,
    nome text not null,
    idade integer not null,
    genero text not null
  )
`

export const CREATE_TABLE_OCORRENCIA = `
    create table if not exists ocorrencia (
      id integer primary key,
      descricao text not null,
      endereco text not null,
      fk_vitima integer not null,
      houve_obito text not null,
      foreign key (fk_vitima) references vitima (id)
    )
`

export const INSERT_VITIMA = `
      insert into vitima values (?, ?, ?, ?)
`

export const INSERT_OCORRENCIA = `
      insert into ocorrencia values (?,?,?,?,?)
      `


export const select_idade = `
      select * from vitima where idade > ? and idade < ?
`

export const select_vitima_feminia_obito = `
      select ocorrencia.id, ocorrencia.descricao, ocorrencia.endereco, ocorrencia.fk_vitima, ocorrencia.houve_obito from ocorrencia join vitima on ocorrencia.fk_vitima = vitima.id where vitima.genero = 'Feminino' and ocorrencia.houve_obito = 'Sim'
`

export const select_vitima_ocorrencia_endereco = `
      select vitima.id, vitima.nome, vitima.idade, vitima.genero, ocorrencia.endereco from vitima join ocorrencia on ocorrencia.fk_vitima = vitima.id where lower(ocorrencia.endereco) like lower(? || '%')
`