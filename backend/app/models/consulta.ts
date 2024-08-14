import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Paciente from './paciente.js'
import Formulario from './formulario.js'
import User from './user.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Consulta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fechaConsulta: Date

  @column()
  declare sugerenciasNanda: string[]

  @column()
  declare sugerenciasNic: string[]

  @column()
  declare sugerenciasNoc: string[]

  @column()
  declare planDeCuidados: string[]

  @column()
  declare pacienteId: number

  @belongsTo(() => Paciente, {
    foreignKey: 'pacienteId',
  })
  declare paciente: BelongsTo<typeof Paciente>

  @column()
  declare formularioId: number

  @belongsTo(() => Formulario, {
    foreignKey: 'formularioId',
  })
  declare formulario: BelongsTo<typeof Formulario>

  @column()
  declare enfermeroId: number

  @belongsTo(() => User, {
    foreignKey: 'enfermeroId',
  })
  declare enfermero: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
