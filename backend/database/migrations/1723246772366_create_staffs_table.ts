import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Staffs extends BaseSchema {
  protected tableName = 'staffs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()

      table.date('created_at').notNullable()
      table.date('modified_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
