<script setup lang="ts">
import VInputRadio from "@/components/VInputRadio.vue";
import VInputText from "@/components/VInputText.vue";
import { ref } from "vue";
import { IonButton, IonIcon } from "@ionic/vue";
import { arrowForward } from "ionicons/icons";
import PatientStateTable from "./PatientStateTable.vue";
import FaillingRiskInfoTable from "./FaillingRiskInfoTable.vue";
import BradenScale from "./BradenScale.vue";

const variable = ref<any>(null);
// const canvasRef = ref<HTMLCanvasElement | null>(null);
// const showCommentInput = ref(false);
// const comment = ref('');

// onMounted(() => {
//   const canvas = canvasRef.value;
//   if (canvas) {
//     const ctx = canvas.getContext("2d");
//     const img = new Image();
//     img.src = "../../../assets/images/human-shape.png";
//     img.onload = () => {
//       if (ctx) {
//         canvas.width = img.width;
//         canvas.height = img.height;
//         ctx.drawImage(img, 0, 0, img.width, img.height);
//       }
//       console.log(img)
//     };
//   }
// });

// const submitComment = () => {
//   console.log(comment.value);
//   showCommentInput.value = false;
//   comment.value = '';
// };
</script>

<template>
  <div class="flex justify-between items-center bg-sky-100 px-4 py-1 my-4">
    <h1 class="font-medium text-2xl inline-block">5. Necesidad de Higiene</h1>
    <img class="h-8 w-8" src="../../../assets/icons/hygienic.png" />
  </div>

  <div class="mx-4 my-6">
    <p class="text-stone-500 h-max mb-1.5">Estado de la piel</p>
    <div class="grid grid-cols-3 gap-y-3 mb-3">
      <VInputRadio
        v-model="variable"
        value="Hidratada"
        label="Hidratada"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Deshidratada"
        label="Deshidratada"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Integra"
        label="Integra"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Con lesion"
        label="Con lesion"
        class="w-max"
      />
      <VInputText
        v-model="variable"
        type="text"
        label="Especificar"
        label-position="side"
        class="col-span-2"
        :center-text="true"
      />
    </div>

    <p class="text-stone-500 h-max mb-1.5">Coloración de la piel</p>
    <div class="flex gap-y-3 gap-x-10 flex-wrap mb-3">
      <VInputRadio
        v-model="variable"
        value="Pálida"
        label="Pálida"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Robicunda"
        label="Robicunda"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Marmórea"
        label="Marmórea"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Ictérica"
        label="Ictérica"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Equimosis"
        label="Equimosis"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Hematomas"
        label="Hematomas"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Cianótica"
        label="Cianótica"
        class="w-max"
      />
    </div>

    <p class="text-stone-500 h-max mb-1.5 items-center flex">
      Dispositivos: Catéteres, sondas o heridas especificar con una
      <span class="mx-2 flex items-center">
        <IonIcon :icon="arrowForward" class="size-8" />
      </span>
      la región anatómica
    </p>
    <div class="grid grid-cols-3 gap-y-3 mb-3 w-3/4">
      <VInputRadio
        v-model="variable"
        value="Cateteres"
        label="Cateteres"
        class="w-max"
      />
      <VInputRadio v-model="variable" value="CVPC" label="CVPC" class="w-max" />
      <VInputRadio v-model="variable" value="CVC" label="CVC" class="w-max" />
      <VInputRadio
        v-model="variable"
        value="Sondas"
        label="Sondas"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Sonda vesical"
        label="Sonda vesical"
        class="w-max"
      />
      <div></div>
      <VInputRadio
        v-model="variable"
        value="Heridas"
        label="Heridas"
        class="w-max"
      />
      <VInputRadio v-model="variable" value="UPP" label="UPP" class="w-max" />
      <VInputRadio
        v-model="variable"
        value="Flictemas"
        label="Flictemas"
        class="w-max"
      />
    </div>
    <!-- <canvas ref="canvasRef" class="bg-transparent" @click="showCommentInput = true"></canvas> -->
    <!-- <div v-if="showCommentInput" class="comment-input">
      <textarea v-model="comment" placeholder="Write your comment..."></textarea>
      <button @click="submitComment">Submit</button>
    </div> -->
    <img src="../../../assets/images/human-shape.png" />

    <p class="text-stone-500 h-max">Escala de riesgo de caídas</p>
    <p class="h-max mb-1.5">
      La valoración del riesgo de caídas del paciente, por turno, utilizando la
      escala de valoración del estado del paciente, esta valora la funcionalidad
      en todas sus esferas.
    </p>
    <PatientStateTable class="w-full mb-3" />
    <FaillingRiskInfoTable class="w-full mb-1.5" />
    <p class="h-max mb-3">
      Intervenciones: Prevención de caídas, control de riesgo, orientación sobre
      riesgo, vigilancia estrecha, ayuda a la deambulación, medidas de
      seguridad: barandales en alto, etc.
    </p>

    <p class="text-stone-500 h-max">Escala de riesgo de UPP</p>
    <BradenScale class="w-full mb-1.5" />
    <p class="h-max mb-3">
      Clasificación de riesgo: Alto riesgo: Puntuación total &lt; 12. <br />
      Riesgo moderado: Puntuación total 13 - 14. <br />
      Riesgo bajo: Puntuación total 15 - 16 si es menor de 75 años. <br />
      Puntuación total 15 - 18 si es mayor o igual de 75 años.
    </p>

    <div class="grid grid-cols-2 gap-x-10 gap-y-3 mb-3 w-3/4">
      <div class="flex flex-col w-full">
        <VInputText
          v-model="variable"
          type="text"
          label="Puntuación"
          label-position="side"
          class="mb-1.5"
          input-width="16"
          :center-text="true"
          place-holder="Auto"
        />
        <VInputText
          v-model="variable"
          type="text"
          label="Riesgo"
          label-position="side"
          input-width="16"
          :center-text="true"
          place-holder="Auto"
        />
      </div>
      <div class="flex flex-col w-full">
        <VInputText
          v-model="variable"
          type="text"
          label="Puntuación"
          label-position="side"
          class="mb-1.5"
          input-width="16"
          :center-text="true"
          place-holder="Auto"
        />
        <VInputText
          v-model="variable"
          type="text"
          label="Riesgo"
          label-position="side"
          input-width="16"
          :center-text="true"
          place-holder="Auto"
        />
      </div>
    </div>

    <p class="text-stone-500 h-max">Tipos de lesión</p>
    <VInputRadio
      v-model="variable"
      value="Quirúrgica"
      label="1. Quirúrgica"
      class="w-max mb-1.5"
    />
    <div class="flex gap-5 mb-1.5">
      <VInputRadio
        v-model="variable"
        value="En proceso de cicatrización sin infección"
        label="En proceso de cicatrización sin infección"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Infectada"
        label="Infectada"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Dehiscente"
        label="Dehiscente"
        class="w-max"
      />
    </div>

    <VInputRadio
      v-model="variable"
      value="Ulcera por presión"
      label="2. Ulcera por presión"
      class="w-max mb-1.5"
    />
    <div class="flex gap-5 mb-1.5">
      <VInputRadio v-model="variable" value="G I" label="G I" class="w-max" />
      <VInputRadio v-model="variable" value="G II" label="G II" class="w-max" />
      <VInputRadio
        v-model="variable"
        value="G III"
        label="G III"
        class="w-max"
      />
      <VInputRadio v-model="variable" value="G IV" label="G IV" class="w-max" />
    </div>
    <div class="flex gap-5 mb-1.5">
      <VInputRadio
        v-model="variable"
        value="En proceso de cicatrización"
        label="En proceso de cicatrización"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Infectada"
        label="Infectada"
        class="w-max"
      />
    </div>

    <VInputRadio
      v-model="variable"
      value="Ulcera venosa"
      label="3. Ulcera venosa"
      class="w-max mb-1.5"
    />
    <div class="flex gap-5 mb-1.5">
      <VInputRadio v-model="variable" value="I" label="I" class="w-max" />
      <VInputRadio v-model="variable" value="II" label="II" class="w-max" />
      <VInputRadio v-model="variable" value="III" label="III" class="w-max" />
      <VInputRadio v-model="variable" value="IV" label="IV" class="w-max" />
    </div>
    <div class="flex gap-5 mb-1.5">
      <VInputRadio
        v-model="variable"
        value="En proceso de cicatrización"
        label="En proceso de cicatrización"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Infectada"
        label="Infectada"
        class="w-max"
      />
    </div>

    <VInputRadio
      v-model="variable"
      value="Ulcera diabética"
      label="4. Ulcera diabética"
      class="w-max mb-1.5"
    />
    <div class="flex gap-5 mb-1.5">
      <VInputRadio v-model="variable" value="I" label="I" class="w-max" />
      <VInputRadio v-model="variable" value="II" label="II" class="w-max" />
      <VInputRadio v-model="variable" value="III" label="III" class="w-max" />
      <VInputRadio v-model="variable" value="IV" label="IV" class="w-max" />
    </div>
    <div class="flex gap-5 mb-1.5">
      <VInputRadio
        v-model="variable"
        value="En proceso de cicatrización"
        label="En proceso de cicatrización"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Infectada"
        label="Infectada"
        class="w-max"
      />
    </div>

    <VInputRadio
      v-model="variable"
      value="Otra"
      label="5. Otra"
      class="w-max mb-1.5"
    />
    <div class="flex gap-5 mb-1.5">
      <VInputRadio
        v-model="variable"
        value="Proceso de cicatrización"
        label="Proceso de cicatrización"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Infectada"
        label="Infectada"
        class="w-max"
      />
    </div>
    <VInputRadio v-model="variable" value="N/A" label="6. N/A" class="w-max" />

    <img src="../../../assets/images/upp.png" alt="UPP" />

    <table class="border-spacing-y-3 border-separate">
      <tr class="border border-transparent">
        <td>
          <p class="text-stone-500 h-max inline-block min-w-max mr-2">
            Estadio
          </p>
        </td>
        <td>
          <VInputText
            v-model="variable"
            type="text"
            input-width="32"
            :center-text="true"
          />
        </td>
      </tr>
      <tr class="border border-transparent">
        <td>
          <p class="text-stone-500 h-max inline-block min-w-max">
            Características
          </p>
        </td>
        <td>
          <VInputText
            v-model="variable"
            type="text"
            input-width="32"
            :center-text="true"
          />
        </td>
      </tr>

      <tr class="border border-transparent">
        <td>
          <p class="text-stone-500 h-max inline-block min-w-max mr-3">
            Fecha de curación
          </p>
        </td>
        <td>
          <div class="flex items-center text-stone-500 w-fit">
            <div class="relative inline-flex items-center w-full">
              <div class="relative w-full">
                <VInputText
                  v-model="variable"
                  type="date"
                  input-width="32"
                  :center-text="true"
                />
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>

    <p class="text-stone-500 h-max">Suplencia para el baño</p>
    <div class="flex gap-5 mb-1.5">
      <VInputRadio
        v-model="variable"
        value="Independiente"
        label="Independiente"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Baño de regadera asistido"
        label="Baño de regadera asistido"
        class="w-max"
      />
      <VInputRadio
        v-model="variable"
        value="Baño de esponja en cama"
        label="Baño de esponja en cama"
        class="w-max"
      />
    </div>

    <div class="flex items-end mb-3">
      <VInputText
        class="w-full mr-8"
        v-model="variable"
        type="text"
        label="Datos subjetivos"
        label-position="top"
      />
      <VInputRadio
        v-model="variable"
        value=""
        label="N/A"
        identifier="Datos subjetivos"
        class="pt-2"
      />
    </div>

    <div class="flex items-end mb-3">
      <VInputText
        class="w-full mr-8"
        v-model="variable"
        type="text"
        label="Otros datos relevantes"
        label-position="top"
      />
      <VInputRadio
        v-model="variable"
        value=""
        label="N/A"
        identifier="Otros datos relevantes"
        class="pt-2"
      />
    </div>

    <p class="text-stone-500 h-max mb-1.5">Nota de enfermería/Observaciones</p>
    <VInputText
      class="w-full mr-8 mb-3"
      v-model="variable"
      type="text"
      label="(S) Situación del paciente:"
      label-position="top"
    />
    <VInputText
      class="w-full mr-8 mb-3"
      v-model="variable"
      type="text"
      label="(B) Información clínica:"
      label-position="top"
    />
    <VInputText
      class="w-full mr-8 mb-3"
      v-model="variable"
      type="text"
      label="(A) Evaluación:"
      label-position="top"
    />
    <VInputText
      class="w-full mr-8 mb-3"
      v-model="variable"
      type="text"
      label="(R) Recomendaciones:"
      label-position="top"
    />

    <div class="grid grid-cols-2 gap-3 gap-x-10 justify-center content-center">
      <VInputText
        class="w-full mr-8 mb-3"
        v-model="variable"
        type="text"
        label="Firma del enfermero(a)"
        label-position="top"
      />
      <div class="flex items-center">A. Cabello F. (ejemplo)</div>
    </div>
    <p class="text-stone-500 h-max mb-1.5">
      (Colocar la primer inicial del primer nombre seguida de un punto, primer
      apellido completo y la primer inicial del segundo apellido seguida de un
      punto.)
    </p>

    <div class="w-full flex justify-end mb-3">
      <IonButton color="primary" fill="solid" shape="round">
        Siguiente
      </IonButton>
    </div>
  </div>
</template>

<style scoped>
.comment-input {
  position: absolute;
  top: 10px;
  left: 10px;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
