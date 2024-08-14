import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Pacientes extends BaseSchema {
  protected tableName = 'pacientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('fecha_nacimiento').notNullable()
      table.integer('edad').notNullable()
      table.enum('sexo', ['Masculino', 'Femenino']).notNullable()
      table.integer('talla_cm').notNullable()
      table.date('created_at').notNullable()
      table.date('modified_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
