import { BaseSchema } from '@adonisjs/lucid/schema'
import { Sex } from '../../app/enums/sexEnum.js'
import { Role } from '../../app/enums/roleEnum.js'
import { Shift } from '../../app/enums/shiftEnum.js'

export default class Staffs extends BaseSchema {
  protected tableName = 'staffs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()

      table.string('name', 255).notNullable()
      table.enum('sex', Object.values(Sex)).notNullable()
      table.integer('age').notNullable().unsigned()
      table.string('email', 255).notNullable()
      table.string('password').notNullable()

      table.enum('role', Object.values(Role)).notNullable()
      table.enum('shift', Object.values(Shift)).nullable()
      table.integer('work_experience_in_months').nullable().unsigned()
      table.integer('room_id') // Foreign key a la tabla room

      table.date('created_at').notNullable()
      table.date('modified_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
