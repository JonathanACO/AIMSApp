export type MedicalAssesment = {
  id: number;
  appointmentId: number;
} & MedicalAssesmentDto;

export type MedicalAssesmentDto = {
  datosPersonales: {
    edad: number | null;
    sexo: "Masculino" | "Femenino" | null;
    tallaEnCm: number | null;
    pesoEnKg: number | null;
    diagnosticoMedico: string | null;
    datoSocial: "Vive solo" | "Con familia" | null;
    datoSocialEspecificado: string | null;
    escolaridad: string | null;
    religion: string | null;
    estadoCivil:
      | "Soltero"
      | "Casado"
      | "Viudo"
      | "Separado"
      | "Unión libre"
      | "Sin datos"
      | null;
  };
  antecedentes: {
    habitosToxicos: "Alcohol" | "Tabaco" | "Otras drogas" | "Negadas" | null;
    habitoToxicoEspecificado: string | null;
    hospitalizacionesPrevias: boolean | null;
    cronicoDegenerativas:
      | "Diabetes Mellitus"
      | "Otras enfermedades"
      | "Hipertension arterial"
      | null;
    otrasEnfermedades: string | null;
    tiempoPadeciendolaEnAnos: number | null;
    antecedentesQuirurgicosTransfusionales:
      | "Quirurgico"
      | "Transfusionales"
      | null;
    tiempoQuirurgicosTransfusionales: Date | null;
    medicamentoEnCasa: string | null;
    dosisEnCasa: string | null;
    horarioEnCasa: string | null;
    administradoEnCasaPor: "Enfermero" | "Paciente" | null;
    medicamentoEnHospital: string | null;
    dosisEnHospital: string | null;
    horarioEnHospital: string | null;
    administradoEnHospitalPor: "Enfermero" | "Paciente" | null;
    alergias: boolean | null;
    tipoDeAlergia: "Medicamentosa" | "Alimenticia" | "Material" | string | null;
  };
  estadoDeConciencia: {
    estado: "Consciente" | "Inconsciente" | "Sedado" | null;
    aberturaOcular: number | null;
    respuestaVerbal: number | null;
    respuestaMotoral: number | null;
    escalaDeRASS: number | null;
    reflejoPupilar: "Isocoria" | "Miosis" | "Midriasis" | "Anisocoria" | null;
    datosSubjetivoEstadoDeConciencia: string | null;
  };
  necesidadDeOxigenacion: {
    pulmonary: {
      frecuenciaRespiratoria: number | null;
      dificultadRespiratoria:
        | "Apnea"
        | "Disnea en reposo"
        | "Disnea en esfuerzo"
        | null;
      SPO2: number | null;
      secrecionesBronquiales: boolean | null;
      secrecionesBronquialesCaracteristicas:
        | "Blancas hialinas escasas"
        | "Blancas hialinas abundantes"
        | "Blancas hialinas espesas escasas"
        | "Blancas hialinas espesas abundantes"
        | "Amarillas purolentas espesas escasas"
        | "Amarillas purolentas espesas abundantes"
        | "Hematicas esacasas"
        | "Hematicas abundantes"
        | null;
      dificultadExpectoración: boolean | null;
      datosSubjetivosDificultadExpectoracion: string | null;
      ruidosRespiratorios: "Normales" | "Anormales" | null;
      tiposDeRuidosRespiratoriosAnormales:
        | "Vesicular"
        | "Broncovesicular"
        | "Estertores"
        | "Sibilancias"
        | "Roce pleural"
        | null;
      datosSubjetivosRuidosRespiratorios: string | null;
      suplementoDeO2: boolean | null;
      nebulizador: number | null;
      puntasNasales: number | null;
      mascarillaSimple: number | null;
      mascarillaConReservorio: number | null;
      ventilacionMecanica:
        | "Invasiva"
        | "No invasiva"
        | "Valores dinamicos"
        | null;
      modalidadVM: "AC - V" | "AC - P" | "SIMV" | "CPAP" | null;
      volumenCorrienteVM: number | null;
      fio2VM: number | null;
      flujoVM: number | null;
      presionSoporteVM: number | null;
      PEEPVM: number | null;
      sensibilidadVM: number | null;
      horaPerfilDeGases: string | null;
      pHPerfilDeGases: number | null;
      PO2PerfilDeGases: number | null;
      HCO3PerfilDeGases: number | null;
      PCO2PerfilDeGases: number | null;
      lactatoPerfilDeGases: number | null;
      glucosaPerfilDeGases: number | null;
      electrolitoSodioPerfilDeGases: number | null;
      electrolitoPotasioPerfilDeGases: number | null;
      electrolitoCalcioPerfilDeGases: number | null;
      encimasCardiacas: string | null;
      otrosLaboratorios: string | null;
      controlRadiologico:
        | "Congestion pulmonar"
        | "Infiltrados"
        | "Foco neumónico"
        | "Derrame"
        | null;
      datosSubjetivosControlRadiologico: string | null;
    };
    cardiovascular: {
      frecuenciaCardiaca: number | null;
      tensionArterialSistolica: number | null;
      tensionArterialDiastolica: number | null;
      apoyoDeAminas: boolean | null;
      apoyoDeAminasEspecificado: string | null;
      apoyoDeInotropicos: boolean | null;
      apoyoDeInotropicosEspecificado: string | null;
      tiposDePulso:
        | "Braquial"
        | "Radial"
        | "Carotideo"
        | "Popliteo"
        | "Pedio"
        | "Femoral"
        | null;
      dolorPrecordial: number | null;
      miembroSuperior: number | null;
      miembroInferior: number | null;
      ingurgitacionYugular: boolean | null;
      hepatomegalia: boolean | null;
      edema: boolean | null;
      sitioDelEdema:
        | "Miembros inferiores"
        | "Miembros superiores"
        | "Otro"
        | string
        | null;
      tipoDeEdema: "+" | "++" | "+++" | "++++" | null;
      marcapasos: boolean | null;
      tipoDeMarcapasos: "Temporal" | "Definitivo" | null;
      frecuenciaMarcapasos: number | null;
      sensibilidadMarcapasos: number | null;
      datosSubjetivosMarcapasos: string | null;
      ritmoTrazoElectrocardiografico: "Normal" | "Anormal" | null;
      ritmoEspecífico:
        | "Ritmo sinusal"
        | "Bradicardia sinusal"
        | "Asistolia"
        | "Taquicardia sinusal"
        | "Dorsal de pointes"
        | "Taquicardia ventricular"
        | "Bloqueo de primer grado"
        | "Fibrilación auricular"
        | "Bloqueo de segundo grado"
        | "Fibrilación ventricular"
        | "Bloqueo de tercer grado"
        | "Flutter auricular"
        | "Actividad eléctrica sin pulso"
        | "Flutter ventricular"
        | null;
    };
  };
  necesidadDeAlimentacion: {
    tipoDeDieta:
      | "Normal"
      | "Liquida"
      | "Blanda"
      | "Vegana"
      | "Ayuno"
      | "Libre de gluten"
      | "Ayuno"
      | "NPT"
      | "Otra"
      | string
      | null;
    dietaHabitualCarnes: boolean;
    dietaHabitualVerduras: boolean;
    dietaHabitualFrutas: boolean;
    dietaHabitualHarinas: boolean;
    dietaHabitualLeguminosas: boolean;
    dietaHabitualLacteos: boolean;
    dietaHabitualRefresco: boolean;
    dietaHabitualCafe: boolean;
    dietaHabitualAgua: boolean;
    dietaNoApegadaAEnfermedad: boolean;
    dietaHabitualOtros: boolean;
    otraDietaHabitual: string | null;
    ingestaDeLiquidos:
      | "Menos de 1 lt."
      | "De 1 a 2 lts."
      | "Mayor a 2 lts."
      | null;
    apetito: "Conservado" | "Aumentado" | "Disminuido" | null;
    suplementoAlimenticio: boolean | null;
    especificarSuplemento: string | null;
    estadoCavidadOral: "Sin caries" | "Con caries" | null;
    protesisDental: boolean | null;
    siprotesisDental: "Fija" | "Movil" | null;
    mucosasOrales: "Hidratadas" | "Deshidratadas" | null;
    adoncia: "Total" | "Parcial" | null;
    problemasDeMasticacion:
      | "Masticacion"
      | "Deglucion"
      | "Intolerancia"
      | "Nauseas"
      | "Vomito"
      | "No aplica"
      | null;
    datosSubjetivosDeProblemasDeMasticacion: string | null;
    sondaDeAlimentacion: boolean | null;
    calibreSonda: "12" | "14" | "16" | "18" | "20" | "22" | null;
    alteracionesDePeso: boolean | null;
    siAlteracionesDePeso: "Sobrepeso" | "Obesidad" | "Obesidad morbida" | null;
    solucionBase: number | null;
    sf: "1000" | "500" | null;
    sg: "5" | "10" | "Otro" | null;
    otroSg: string | null;
    infusiones: string | null;
    accesosVenosos:
      | "CVPC"
      | "CVC"
      | "C. Swan Ganz"
      | "C. Tenckhoff"
      | "C. HD"
      | null;
    calibreAccesoVenoso: number | null;
    fechaDeColocacion: Date | null;
    fechaDeCuracionAlimentacion: Date | null;
    balanceParcial: "Neutro" | string | null;
    datosSubjetivosBalanceParcial: string | null;
  };
  necesidadDeEliminacion: {
    frecuenciaPatronUrinario: number | null;
    caracteristicasNormalesPatronUrinario: boolean | null;
    caracteristicasPatronUrinario:
      | "Oliguria"
      | "Anuria"
      | "Poliuria"
      | "Disuria"
      | "Nicturia"
      | "Tenesmo"
      | "Incontinencia"
      | null;
    caracteristicasEspecificasPatronUrinario: string | null;
    coloracionPatronUrinario: "Normal" | "Anormal" | null;
    coloracionAnormal: "Hematurica" | "Colurica" | "Otro" | string | null;
    sondaVesical: boolean | null;
    calibreSondaVesical: number | null;
    cantidadH2O: number | null;
    fechaDeColocacionEliminacion: Date | null;
    usoDeDiureticos: boolean | null;
    especificarUsoDiureticos: string | null;
    apoyoParcial:
      | "Acompanamiento al sanitario"
      | "Proporcionar comodo/orinal"
      | "Cambio de panal"
      | null;
    apoyoTotal: boolean | null;
    tratamientoSustitutivoRenal: boolean | null;
    tipoTratamientoSustitutivoRenal:
      | "Dialisis peritoneal"
      | "Hemodialisis"
      | null;
    datosSubjetivosSustitutivoRenal: string | null;
    frecuenciaPatronIntestinal: number | null;
    caracteristicasPatronIntestinal: "Normal" | "Anormal" | null;
    caracteristicaAnormalEspecifica:
      | "Estrenimiento"
      | "Diarrea"
      | "Incontinencia"
      | null;
    caracteristicaIndividual:
      | "Acolia"
      | "Melena"
      | "Mucoide"
      | "Pastosa"
      | "Fetida"
      | "Liquida con sangre fresca"
      | null;
    suplenciaIntestinal:
      | "Sin suplencia"
      | "Suplencia parcial"
      | "Suplencia total"
      | null;
    ostomias: string | null;
    datosSubjetivosPatronIntestinal: string | null;
  };
  necesidadDeTermorregulacion: {
    clasificacionTemperatura:
      | "Nomotermia"
      | "Hipotermia"
      | "Hipertermia"
      | "Fiebre"
      | null;
    temperatura: number | null;
    diaforesis: boolean | null;
    datosSubjetivosTermorregulacion: string | null;
  };
  necesidadDeHigiene: {
    estadoDeLaPiel: string | null;
    especificarLesionEnPiel: string | null;
    coloracionDeLaPiel:
      | "Pálida"
      | "Robicunda"
      | "Marmórea"
      | "Ictérica"
      | "Equimosis"
      | "Hematomas"
      | "Cianótica"
      | null;
    dispositivoCateteres: boolean | null;
    dispositivoCVPC: boolean | null;
    dispositivoCVC: boolean | null;
    dispositivoSondas: boolean | null;
    dispositivoSondaVesical: boolean | null;
    dispositivoHeridas: boolean | null;
    dispositivoUPP: boolean | null;
    dispositivoFlictemas: boolean | null;
    // lugarDeDispositivos: {};
    puntuacionRiesgoCaidas:
      | {
          factorDeRiesgo: string;
          puntuacion: number;
        }[]
      | null;
    riesgoCaidas: "Alto" | "Mediano" | "Bajo" | null;
    puntuacionRiesgoUPP:
      | { factor: string; opcion: { valor: string; puntuacion: number } }[]
      | null;
    riesgoUPP: "Alto" | "Moderado" | "Bajo" | null;
    tiposDeLesion:
      | "Quirúrgica"
      | "En proceso de cicatrización sin infección"
      | "Infectada"
      | "Dehiscente"
      | "Ulcera por presión"
      | "Ulcera venosa"
      | "Ulcera diabética"
      | "Otra"
      | "Proceso de cicatrización"
      | null;
    gradoOTipoEspecifico: string | null;
    estadio: number | null;
    caracteristicas: string | null;
    fechaDeCuracion: string | null;
    suplenciaParaElBano:
      | "Independiente"
      | "Baño de regadera asistido"
      | "Baño de esponja en cama"
      | null;
    datosSubjetivos: string | null;
    otrosDatosRelevantes: string | null;
    notaDeEnfermeria: {
      situacionDelPaciente: string | null;
      informacionClinica: string | null;
      evaluacion: string | null;
      recomendaciones: string | null;
    };
    firmaDelEnfermero: string | null;
  };
};

export const initialMedicalAssesment: MedicalAssesmentDto = {
  datosPersonales: {
    edad: null,
    sexo: null,
    tallaEnCm: null,
    pesoEnKg: null,
    diagnosticoMedico: null,
    datoSocial: null,
    datoSocialEspecificado: null,
    escolaridad: null,
    religion: null,
    estadoCivil: null,
  },
  antecedentes: {
    habitosToxicos: null,
    habitoToxicoEspecificado: null,
    hospitalizacionesPrevias: null,
    cronicoDegenerativas: null,
    otrasEnfermedades: null,
    tiempoPadeciendolaEnAnos: null,
    antecedentesQuirurgicosTransfusionales: null,
    tiempoQuirurgicosTransfusionales: null,
    medicamentoEnCasa: null,
    dosisEnCasa: null,
    horarioEnCasa: null,
    administradoEnCasaPor: null,
    medicamentoEnHospital: null,
    dosisEnHospital: null,
    horarioEnHospital: null,
    administradoEnHospitalPor: null,
    alergias: null,
    tipoDeAlergia: null,
  },
  estadoDeConciencia: {
    estado: null,
    aberturaOcular: null,
    respuestaVerbal: null,
    respuestaMotoral: null,
    escalaDeRASS: null,
    reflejoPupilar: null,
    datosSubjetivoEstadoDeConciencia: null,
  },
  necesidadDeOxigenacion: {
    pulmonary: {
      frecuenciaRespiratoria: null,
      dificultadRespiratoria: null,
      SPO2: null,
      secrecionesBronquiales: null,
      secrecionesBronquialesCaracteristicas: null,
      dificultadExpectoración: null,
      datosSubjetivosDificultadExpectoracion: null,
      ruidosRespiratorios: null,
      tiposDeRuidosRespiratoriosAnormales: null,
      datosSubjetivosRuidosRespiratorios: null,
      suplementoDeO2: null,
      nebulizador: null,
      puntasNasales: null,
      mascarillaSimple: null,
      mascarillaConReservorio: null,
      ventilacionMecanica: null,
      modalidadVM: null,
      volumenCorrienteVM: null,
      fio2VM: null,
      flujoVM: null,
      presionSoporteVM: null,
      PEEPVM: null,
      sensibilidadVM: null,
      horaPerfilDeGases: null,
      pHPerfilDeGases: null,
      PO2PerfilDeGases: null,
      HCO3PerfilDeGases: null,
      PCO2PerfilDeGases: null,
      lactatoPerfilDeGases: null,
      glucosaPerfilDeGases: null,
      electrolitoSodioPerfilDeGases: null,
      electrolitoPotasioPerfilDeGases: null,
      electrolitoCalcioPerfilDeGases: null,
      encimasCardiacas: null,
      otrosLaboratorios: null,
      controlRadiologico: null,
      datosSubjetivosControlRadiologico: null,
    },
    cardiovascular: {
      frecuenciaCardiaca: null,
      tensionArterialSistolica: null,
      tensionArterialDiastolica: null,
      apoyoDeAminas: null,
      apoyoDeAminasEspecificado: null,
      apoyoDeInotropicos: null,
      apoyoDeInotropicosEspecificado: null,
      tiposDePulso: null,
      dolorPrecordial: null,
      miembroSuperior: null,
      miembroInferior: null,
      ingurgitacionYugular: null,
      hepatomegalia: null,
      edema: null,
      sitioDelEdema: null,
      tipoDeEdema: null,
      marcapasos: null,
      tipoDeMarcapasos: null,
      frecuenciaMarcapasos: null,
      sensibilidadMarcapasos: null,
      datosSubjetivosMarcapasos: null,
      ritmoTrazoElectrocardiografico: null,
      ritmoEspecífico: null,
    },
  },
  necesidadDeAlimentacion: {
    tipoDeDieta: null,
    dietaHabitualCarnes: false,
    dietaHabitualVerduras: false,
    dietaHabitualFrutas: false,
    dietaHabitualHarinas: false,
    dietaHabitualLeguminosas: false,
    dietaHabitualLacteos: false,
    dietaHabitualRefresco: false,
    dietaHabitualCafe: false,
    dietaHabitualAgua: false,
    dietaNoApegadaAEnfermedad: false,
    dietaHabitualOtros: false,
    otraDietaHabitual: null,
    ingestaDeLiquidos: null,
    apetito: null,
    suplementoAlimenticio: null,
    especificarSuplemento: null,
    estadoCavidadOral: null,
    protesisDental: null,
    siprotesisDental: null,
    mucosasOrales: null,
    adoncia: null,
    problemasDeMasticacion: null,
    datosSubjetivosDeProblemasDeMasticacion: null,
    sondaDeAlimentacion: null,
    calibreSonda: null,
    alteracionesDePeso: null,
    siAlteracionesDePeso: null,
    solucionBase: null,
    sf: null,
    sg: null,
    otroSg: null,
    infusiones: null,
    accesosVenosos: null,
    calibreAccesoVenoso: null,
    fechaDeColocacion: null,
    fechaDeCuracionAlimentacion: null,
    balanceParcial: null,
    datosSubjetivosBalanceParcial: null,
  },
  necesidadDeEliminacion: {
    frecuenciaPatronUrinario: null,
    caracteristicasNormalesPatronUrinario: null,
    caracteristicasPatronUrinario: null,
    caracteristicasEspecificasPatronUrinario: null,
    coloracionPatronUrinario: null,
    coloracionAnormal: null,
    sondaVesical: null,
    calibreSondaVesical: null,
    cantidadH2O: null,
    fechaDeColocacionEliminacion: null,
    usoDeDiureticos: null,
    especificarUsoDiureticos: null,
    apoyoParcial: null,
    apoyoTotal: null,
    tratamientoSustitutivoRenal: null,
    tipoTratamientoSustitutivoRenal: null,
    datosSubjetivosSustitutivoRenal: null,
    frecuenciaPatronIntestinal: null,
    caracteristicasPatronIntestinal: null,
    caracteristicaAnormalEspecifica: null,
    caracteristicaIndividual: null,
    suplenciaIntestinal: null,
    ostomias: null,
    datosSubjetivosPatronIntestinal: null,
  },
  necesidadDeTermorregulacion: {
    clasificacionTemperatura: null,
    temperatura: null,
    diaforesis: null,
    datosSubjetivosTermorregulacion: null,
  },
  necesidadDeHigiene: {
    estadoDeLaPiel: null,
    especificarLesionEnPiel: null,
    coloracionDeLaPiel: null,
    dispositivoCateteres: null,
    dispositivoCVPC: null,
    dispositivoCVC: null,
    dispositivoSondas: null,
    dispositivoSondaVesical: null,
    dispositivoHeridas: null,
    dispositivoUPP: null,
    dispositivoFlictemas: null,
    puntuacionRiesgoCaidas: null,
    riesgoCaidas: null,
    puntuacionRiesgoUPP: null,
    riesgoUPP: null,
    tiposDeLesion: null,
    gradoOTipoEspecifico: null,
    estadio: null,
    caracteristicas: null,
    fechaDeCuracion: null,
    suplenciaParaElBano: null,
    datosSubjetivos: null,
    otrosDatosRelevantes: null,
    notaDeEnfermeria: {
      situacionDelPaciente: null,
      informacionClinica: null,
      evaluacion: null,
      recomendaciones: null,
    },
    firmaDelEnfermero: null,
  },
};
