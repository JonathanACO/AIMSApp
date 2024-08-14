import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Consultas extends BaseSchema {
  protected tableName = 'consultas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('paciente_id')
        .unsigned()
        .references('id')
        .inTable('pacientes')
        .onDelete('CASCADE')
      table
        .integer('formulario_id')
        .unsigned()
        .references('id')
        .inTable('formularios')
        .onDelete('CASCADE')
      table.date('fecha_consulta').notNullable()
      table.specificType('sugerencias_nanda', 'text[]').notNullable()
      table.specificType('sugerencias_nic', 'text[]').notNullable()
      table.specificType('sugerencias_noc', 'text[]').notNullable()
      table.specificType('plan_de_cuidados', 'text[]').notNullable()
      table
        .integer('enfermero_id')
        .unsigned()
        .references('id')
        .inTable('staffs')
        .onDelete('CASCADE')
      table.date('created_at').notNullable()
      table.date('modified_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
