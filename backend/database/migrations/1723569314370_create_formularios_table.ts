import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Formularios extends BaseSchema {
  protected tableName = 'formularios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('peso_kg').notNullable()
      table.string('diagnostico_medico').notNullable()
      table.boolean('vive_solo').notNullable()
      table.boolean('vive_con_familia').notNullable()
      table.boolean('vive_con_hijos').notNullable()
      table
        .enum('escolaridad', [
          'Primaria',
          'Secundaria',
          'Preparatoria',
          'Licenciatura',
          'Maestria',
          'Doctorado',
        ])
        .notNullable()
      table.string('religion').notNullable()
      table.enum('estado_civil', ['Soltero', 'Casado', 'Divorciado', 'Viudo']).notNullable()
      table.text('alergias').notNullable()
      table.boolean('habitos_toxicos').notNullable()
      table.text('hospitalizaciones_previas').notNullable()
      table.text('enfermedades_cronicas').notNullable()
      table.text('antecedentes_quirurgicos').notNullable()
      table.text('tratamiento_farmacologico').notNullable()
      table.integer('escala_glasgow_ao').notNullable()
      table.integer('escala_glasgow_rv').notNullable()
      table.integer('escala_glasgow_rm').notNullable()
      table.integer('escala_glasgow_total').notNullable()
      table.integer('escala_rass').notNullable()
      table.boolean('reflejo_pupilar').notNullable()
      table.boolean('dificultad_respirar').notNullable()
      table.integer('spo2').notNullable()
      table.string('secreciones_bronquiales').notNullable()
      table.boolean('dificultad_expectoracion').notNullable()
      table.boolean('ruidos_respiratorios_normales').notNullable()
      table.boolean('ruidos_respiratorios_anormales').notNullable()
      table.boolean('suplemento_o2_nebulizador').notNullable()
      table.integer('suplemento_o2_puntuales_nasales').notNullable()
      table.boolean('ventilacion_mecanica_no_invasiva').notNullable()
      table.boolean('ventilacion_mecanica_invasiva').notNullable()
      table.string('ventilacion_mecanica_parametros').notNullable()
      table.integer('perfil_gases_po2').notNullable()
      table.integer('perfil_gases_pco2').notNullable()
      table.decimal('perfil_gases_ph').notNullable()
      table.decimal('perfil_gases_hco3').notNullable()
      table
        .enum('color_piel_mucosas', ['Palidez', 'Cianosis_Central', 'Cianosis_Periferica'])
        .notNullable()
      table.specificType('control_radiologico', 'text[]').notNullable()
      table.integer('frecuencia_cardiaca').notNullable()
      table.enum('tipos_pulso', ['Normal', 'Debil', 'Paradojico', 'Ausente']).notNullable()
      table.integer('ta_mmHg').notNullable()
      table.boolean('apoyo_aminas_inotropicos').notNullable()
      table.integer('dolor_precoardial').notNullable()
      table.integer('llenado_capilar_sup_seg').notNullable()
      table.integer('llenado_capilar_inf_seg').notNullable()
      table.boolean('ingurgitacion_yugular').notNullable()
      table.boolean('hepatomegalia').notNullable()
      table.text('edema_sitio').notNullable()
      table.boolean('marcapaso').notNullable()
      table.integer('marcapaso_temp').notNullable()
      table.integer('marcapaso_frecuencia').notNullable()
      table.integer('marcapaso_amperaje').notNullable()
      table.enum('ritmo_cardiaco', ['Normal', 'Anormal']).notNullable()
      table.enum('dieta_carnes', ['opcion1', 'opcion2']).notNullable()      // Agrega los valores específicos
      table.enum('dieta_verduras', ['opcion1', 'opcion2']).notNullable()    // Agrega los valores específicos
      table.enum('dieta_frutas', ['opcion1', 'opcion2']).notNullable()      // Agrega los valores específicos
      table.enum('dieta_harinas', ['opcion1', 'opcion2']).notNullable()     // Agrega los valores específicos
      table.enum('dieta_leguminosas', ['opcion1', 'opcion2']).notNullable() // Agrega los valores específicos
      table.enum('dieta_lacteos', ['opcion1', 'opcion2']).notNullable()     // Agrega los valores específicos
      table.string('consistencia_dieta').notNullable()
      table.string('bebidas').notNullable()
      table.integer('ingesta_liquidos_24hrs').notNullable()
      table.string('apetito').notNullable()
      table.boolean('suplemento_alimenticio').notNullable()
      table
        .enum('estado_cavidad_oral', ['Sin_Caries', 'Con_Caries', 'Protesis_Dental'])
        .notNullable()
      table.text('problemas').notNullable()
      table.boolean('sonda_alimentacion').notNullable()
      table.text('alteraciones_peso').notNullable()
      table.text('soluciones_administradas').notNullable()
      table.text('accesos_venosos').notNullable()
      table.string('patron_urinario_caracteristicas').notNullable()
      table.boolean('patron_urinario_diureticos').notNullable()
      table.boolean('patron_urinario_suplencia').notNullable()
      table.integer('patron_intestinal_frecuencia').notNullable()
      table.string('patron_intestinal_caracteristicas').notNullable()
      table.boolean('patron_intestinal_suplencia').notNullable()
      table.boolean('diaforesis').notNullable()
      table.text('dispositivos').notNullable()
      table
        .enum('estado_piel', ['Hidratada', 'Deshidratada', 'Integra', 'Con_Lesion'])
        .notNullable()
      table.integer('escala_riesgo_upp').notNullable()
      table.integer('escala_riesgo_caida').notNullable()
      table.text('intervenciones').notNullable()
      table.specificType('tipos_lesion', 'text[]').notNullable()
      table
        .enum('estadios_upp', ['Estadio_I', 'Estadio_II', 'Estadio_III', 'Estadio_IV'])
        .notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
