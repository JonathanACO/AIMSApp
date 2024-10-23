import { CreateIndividualizedCarePlanDTO } from "@/entities/IndividualizedCarePlan";
import { IndividualizedCarePlansRepository } from "@/repositories/IndividualizedCarePlansRepository";
import { defineStore } from "pinia";
import { ref } from "vue";
import { deserializeStateTree } from "./deserializers/deserializeStateTree";
import { MedicalAssesmentDto } from "@/entities/MedicalAssesment";
import { MedicalAssesmentsRepository } from "@/repositories/MedicalAssesmentRepository";

export const useAppointmentStore = defineStore(
  "appointment",
  () => {
    const medicalAssesment = ref<MedicalAssesmentDto | null>(null);
    const individualizedCarePlanDetails = ref<{
      nanda: Record<string, any>;
      nic: Record<string, any>;
      noc: Record<string, any>;
    }>({
      nanda: {},
      nic: {},
      noc: {},
    });
    const individualizedCarePlan = ref<CreateIndividualizedCarePlanDTO | null>(
      null
    );

    async function save() {
      if (!medicalAssesment.value) throw new Error("No assesment to save");
      await MedicalAssesmentsRepository.create(medicalAssesment.value);
      if (!individualizedCarePlan.value) throw new Error("No plan to save");
      await IndividualizedCarePlansRepository.create(
        individualizedCarePlan.value
      );
    }

    return {
      medicalAssesment,
      individualizedCarePlanDetails,
      individualizedCarePlan,
      save,
    };
  },
  {
    persist: {
      storage: sessionStorage,
      key: "appointmentDataStore",
      serializer: {
        serialize: JSON.stringify,
        deserialize: deserializeStateTree,
      },
    },
  }
);
