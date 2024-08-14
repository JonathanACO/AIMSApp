import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Formulario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare pesoKg: number

  @column()
  declare diagnosticoMedico: string

  @column()
  declare viveSolo: boolean

  @column()
  declare viveConFamilia: boolean

  @column()
  declare viveConHijos: boolean

  @column()
  declare escolaridad:
    | 'Primaria'
    | 'Secundaria'
    | 'Preparatoria'
    | 'Licenciatura'
    | 'Maestria'
    | 'Doctorado'

  @column()
  declare religion: string

  @column()
  declare estadoCivil: 'Soltero' | 'Casado' | 'Divorciado' | 'Viudo'

  @column()
  declare alergias: string

  @column()
  declare habitosToxicos: boolean

  @column()
  declare hospitalizacionesPrevias: string

  @column()
  declare enfermedadesCronicas: string

  @column()
  declare antecedentesQuirurgicos: string

  @column()
  declare tratamientoFarmacologico: string

  @column()
  declare escalaGlasgowAo: number

  @column()
  declare escalaGlasgowRv: number

  @column()
  declare escalaGlasgowRm: number

  @column()
  declare escalaGlasgowTotal: number

  @column()
  declare escalaRass: number

  @column()
  declare reflejoPupilar: boolean

  @column()
  declare dificultadRespirar: boolean

  @column()
  declare spo2: number

  @column()
  declare secrecionesBronquiales: string

  @column()
  declare dificultadExpectoracion: boolean

  @column()
  declare ruidosRespiratoriosNormales: boolean

  @column()
  declare ruidosRespiratoriosAnormales: boolean

  @column()
  declare suplementoO2Nebulizador: boolean

  @column()
  declare suplementoO2PuntualesNasales: number

  @column()
  declare ventilacionMecanicaNoInvasiva: boolean

  @column()
  declare ventilacionMecanicaInvasiva: boolean

  @column()
  declare ventilacionMecanicaParametros: string

  @column()
  declare perfilGasesPo2: number

  @column()
  declare perfilGasesPco2: number

  @column()
  declare perfilGasesPh: number

  @column()
  declare perfilGasesHco3: number

  @column()
  declare colorPielMucosas: 'Palidez' | 'Cianosis_Central' | 'Cianosis_Periferica'

  @column()
  declare controlRadiologico: string[]

  @column()
  declare frecuenciaCardiaca: number

  @column()
  declare tiposPulso: 'Normal' | 'Debil' | 'Paradojico' | 'Ausente'

  @column()
  declare taMmHg: number

  @column()
  declare apoyoAminasInotropicos: boolean

  @column()
  declare dolorPrecoardial: number

  @column()
  declare llenadoCapilarSupSeg: number

  @column()
  declare llenadoCapilarInfSeg: number

  @column()
  declare ingurgitacionYugular: boolean

  @column()
  declare hepatomegalia: boolean

  @column()
  declare edemaSitio: string

  @column()
  declare marcapaso: boolean

  @column()
  declare marcapasoTemp: number

  @column()
  declare marcapasoFrecuencia: number

  @column()
  declare marcapasoAmperaje: number

  @column()
  declare ritmoCardiaco: 'Normal' | 'Anormal'

  @column()
  declare dietaCarnes: string // Agrega los valores específicos del enum

  @column()
  declare dietaVerduras: string // Agrega los valores específicos del enum

  @column()
  declare dietaFrutas: string // Agrega los valores específicos del enum

  @column()
  declare dietaHarinas: string // Agrega los valores específicos del enum

  @column()
  declare dietaLeguminosas: string // Agrega los valores específicos del enum

  @column()
  declare dietaLacteos: string // Agrega los valores específicos del enum

  @column()
  declare consistenciaDieta: string

  @column()
  declare bebidas: string

  @column()
  declare ingestaLiquidos24hrs: number

  @column()
  declare apetito: string

  @column()
  declare suplementoAlimenticio: boolean

  @column()
  declare estadoCavidadOral: 'Sin_Caries' | 'Con_Caries' | 'Protesis_Dental'

  @column()
  declare problemas: string

  @column()
  declare sondaAlimentacion: boolean

  @column()
  declare alteracionesPeso: string

  @column()
  declare solucionesAdministradas: string

  @column()
  declare accesosVenosos: string

  @column()
  declare patronUrinarioCaracteristicas: string

  @column()
  declare patronUrinarioDiureticos: boolean

  @column()
  declare patronUrinarioSuplencia: boolean

  @column()
  declare patronIntestinalFrecuencia: number

  @column()
  declare patronIntestinalCaracteristicas: string

  @column()
  declare patronIntestinalSuplencia: boolean

  @column()
  declare diaforesis: boolean

  @column()
  declare dispositivos: string

  @column()
  declare estadoPiel: 'Hidratada' | 'Deshidratada' | 'Integra' | 'Con_Lesion'

  @column()
  declare escalaRiesgoUpp: number

  @column()
  declare escalaRiesgoCaida: number

  @column()
  declare intervenciones: string

  @column()
  declare tiposLesion: string[] // Enum como array de strings

  @column()
  declare estadiosUpp: 'Estadio_I' | 'Estadio_II' | 'Estadio_III' | 'Estadio_IV'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
