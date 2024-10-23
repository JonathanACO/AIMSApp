import { CreateIndividualizedCarePlanDTO } from "@/entities/IndividualizedCarePlan";
import { IndividualizedCarePlansRepository } from "@/repositories/IndividualizedCarePlansRepository";
import { defineStore } from "pinia";
import { ref } from "vue";
import { deserializeStateTree } from "./deserializers/deserializeStateTree";
import { MedicalAssesment } from "@/entities/MedicalAssesment";

export const useAppointmentStore = defineStore(
  "appointment",
  () => {
    const medicalAssesment = ref<MedicalAssesment | null>(null);
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

    function save() {
      if (!individualizedCarePlan.value) throw new Error("No plan to save");
      IndividualizedCarePlansRepository.create(individualizedCarePlan.value);
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
