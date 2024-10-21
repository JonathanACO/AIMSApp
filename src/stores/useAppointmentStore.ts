import { CreateIndividualizedCarePlanDTO } from "@/entities/IndividualizedCarePlan";
import { IndividualizedCarePlansRepository } from "@/repositories/IndividualizedCarePlansRepository";
import { defineStore } from "pinia";
import { ref } from "vue";
import { deserializeStateTree } from "./deserializers/deserializeStateTree";

export const useAppointmentStore = defineStore(
  "appointment",
  () => {
    const individualizedCarePlan = ref<CreateIndividualizedCarePlanDTO | null>(
      null
    );

    function save() {
      if (!individualizedCarePlan.value) throw new Error("No plan to save");
      IndividualizedCarePlansRepository.create(individualizedCarePlan.value);
    }

    return { individualizedCarePlan, save };
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
