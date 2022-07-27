<template>
  <div class="flex flex-wrap w-full overflow-hidden">
    <!-- ALL MODALS -->
    <ConfDialog />
    <AddSticker />
    <ModifStickerDialog />
    <ModifyColName />

<!-- Header -->
    <Header />

<!-- COLUMNS CONTAINER -->
    <div class="flex flex-row w-full min-h-screen bg-gray-200 text-center overflow-x-scroll overflow-y-hidden">

 <!-- COLUMNS -->     
      <div v-for="(step, index) in dynSteps" :key="index"
        class="min-h-full text-center w-80 mx-2 bg-transparent flex-col flex ">
        <div class="flex flex-roww-80 bg-secondary rounded-t-md mt-3 h-8 p-1">

<!-- COLUMN HEADER -->
          <div class="px-1 w-5/6 "> {{ step.name }} </div>

<!-- SVG PENCIL -->
          <svg @click="openColNameDialog(index)" xmlns="http://www.w3.org/2000/svg"
            class=" w-1/12 cursor-pointer stroked h-8 p-1 pt-1 mb-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd" />
          </svg>

<!-- SVG  TRASH -->
          <svg @click="openDialog(index, null, 'colonne')" xmlns="http://www.w3.org/2000/svg"
            class=" w-1/12 cursor-pointer stroked h-8 p-1 mb-2" fill="none" viewBox="0 0 24 24" stroke="black"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>

<!-- Card List -->
        <draggable group="data" class="list-group pb-2 rounded-b-md px-2 bg-white " ghost-class="ghost"
          :list="step.data" :animation=200>
          <div class="list-group-item   border shadow-md mt-2 p-2 rounded  " v-for="(item, arrayIndex) in step.data"
            :key="item.id">
            <div class="flex-row flex">
              <div class="w-10/12 text-left font-sans text-xl bg-gray-50 mb-2 h-8">{{ item.name }}</div>
              <svg @click="openModifStickerDialog(index, arrayIndex, item)" xmlns="http://www.w3.org/2000/svg"
                class=" w-1/12 cursor-pointer stroked h-8 p-1 mb-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd" />
              </svg>
<!-- SVG PENCIL -->
              <svg @click="openDialog(index, arrayIndex, 'étiquette')" xmlns="http://www.w3.org/2000/svg"
                class=" w-1/12 cursor-pointer stroked h-8 p-1 mb-2" fill="none" viewBox="0 0 24 24" stroke="black"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <div class="w-full text-left mb-2">{{ item.position }}</div>
            <div class="flex-row flex  w-full">
<!-- SVG TRASH -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-1/5" fill="none" viewBox="0 0 24 24" stroke="black"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div class="w-4/5 text-left font-sans text-sm">Date de fin : {{ item.date }}</div>
            </div>
          </div>

<!-- ADD CARD BUTTON -->
          <button @click="openDialogAddStep(index)"
            class="w-full mt-3 shadow-md bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Ajouter une carte
            </button>
        </draggable>
      </div>

<!-- ADD COLUMN COMPOSANT -->
      <AddCol />

    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import AddCol from '~/components/AddCol.vue'
import ConfDialog from '~/components/ConfDialog.vue'
import AddSticker from '~/components/AddSticker.vue'
import ModifStickerDialog from '../components/ModifStickerDialog.vue'
import ModifyColName from '~/components/ModifyColName.vue'
export default {
  name: 'IndexPage',
  components: { draggable, AddCol, ConfDialog, AddSticker, ModifStickerDialog, ModifyColName },
  data() {
    return {
      index: 0,
      textDialog: 'Test',
      confDialogValue: false,
      dialog: false,
      selectedCity: null,
      foundCity: [],
      steps: [],
      colIndex: null,
      arrayIndex: null
    }
  },
  mounted(){
    //APRES LE CHARGEMENT DES COMPOSANT DE LA PAGE - VERIFIE SI LE LOCALSTORAGE N'EST PAS VIDE ET IMPORTE LES DONNEES SAUVEGARDEE AU FORMAT JSON-TEXTE CONVERTIENT EN JSON
    if(localStorage.savedArray){
      this.steps = JSON.parse(localStorage.getItem("savedArray"));
    }
    setInterval(() => {
      localStorage.setItem('savedArray', JSON.stringify(this.steps))
    },12000)
  },
  computed: {
    dynSteps() {
      return this.steps
    }
  },
  methods: {
    openDialogAddStep(index) {
      this.$store.commit('ocStickerDialog', true)
      this.$store.commit('setColIndex', index)
    },
    openModifStickerDialog(colIndex, arrayIndex, item) {
      console.log(colIndex, arrayIndex, item)
      this.$store.commit('ocModifStickerDialog', true)
      this.$store.commit('setStickerData', [colIndex, arrayIndex, item])
    },

    openColNameDialog(index) {
      this.$store.commit('ocModifColNameDialog', true)
      this.$store.commit('setColIndex', index)
    },
    openDialog(colIndex, arrayIndex, dialog) {
      this.colIndex = colIndex
      this.arrayIndex = arrayIndex
      this.$store.commit('setChooseDialog', dialog)
      this.$store.commit('ocConfDialog', true)
    },
    addCol(name) {
      this.steps.push({ name: name.value, data: [] })
      this.refresh()
    },
    modifyColName(name, index) {
      this.steps[index].name = name
      this.refresh()
    },
    deleteCol(index) {
      this.steps.splice(index, 1)
      this.refresh()
    },
    addStep(stepName, city, date, index) {
      this.steps[index].data.push(
        {
          id: this.filterMaxId(this.steps),
          name: stepName,
          position: city,
          date: date
        })
      this.$store.commit('ocStickerDialog', false)
      this.refresh()
    },
    modifyStep(inputStep, selectedCity, inputDate, d) {
      console.log(this.steps[d[0]].data[d[1]])
      this.steps[d[0]].data[d[1]] = { date: inputDate, id: d[2].id, name: inputStep, position: selectedCity }
      console.log(this.steps[d[0]].data[d[1]])
      this.refresh()
    },
    deleteStep() {
      this.$store.commit('ocConfDialog', false)
      this.steps[this.colIndex].data.splice(this.arrayIndex, 1)
      this.refresh()
    },
    closeConfDialog() {
      this.$store.commit('ocConfDialog', false)
    },
    filterMaxId(array) {
      this.index = 0
      array.forEach((a) => {
        const dataArray = a.data
        dataArray.forEach((item) => {
          if (item.id > this.index) {
            this.index = item.id
          }
        })
      })
      return this.index + 1
    },
    refresh() {
      const temp = this.steps
      this.steps = []
      this.steps = temp
      this.$store.commit('ocModifStickerDialog', false)
      this.$store.commit('ocConfDialog', false)
      this.$store.commit('ocStickerDialog', false)
      this.$store.commit('ocModifColNameDialog', false)
      localStorage.setItem('savedArray', JSON.stringify(this.steps))
    },
  }
}
</script>
