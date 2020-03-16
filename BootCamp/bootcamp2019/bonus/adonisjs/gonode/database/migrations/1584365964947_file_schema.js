'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileSchema extends Schema {
  up () {
    this.create('files', (table) => {
      table.increments()
      table.string('file').notNullable() // caminho do arquivo no disco
      table.string('name').notNullable() // nome original do arquivoble
      table.string('type', 20) // se é imagem, pdf, etc
      table.string('subtype', 20) // subtipo
      table.timestamps()
    })
  }

  down () {
    this.drop('files')
  }
}

module.exports = FileSchema
