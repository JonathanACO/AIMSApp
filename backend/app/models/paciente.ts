import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Paciente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime()
  declare fechaNacimiento: DateTime

  @column()
  declare edad: number

  @column()
  declare sexo: 'Masculino' | 'Femenino'

  @column()
  declare tallaCm: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
