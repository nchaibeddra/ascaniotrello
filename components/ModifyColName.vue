<template>
    <div v-if="$store.state.colNameDialog" class="fixed w-full min-h-screen opacity-90 bg-gray-200">
        <div class="mt-36 border bg-secondary rounded-xl w-1/3 mx-auto p-5">
            <div class="w-full"> Nom de la colonne :</div>
            <input v-model="inputColName" class="w-full mt-2 rounded px-2" type="text" placeholder="Etape">
            <button @click="modifyColName(inputColName)"
                class="w-full px-2 bg-green-500 hover:bg-green-400 text-white font-bold py-2 border-b-4 border-green-500 mt-2 hover:border-green-500 rounded">
                Modifier </button>
            <button @click="close"
                class="w-full px-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 border-b-4 border-red-700 mt-2 hover:border-red-500 rounded">
                Annuler </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ModifColName',
    data() {
        return {
            inputColName: null
        }
    },
    methods: {
        close() {
            this.$store.commit('ocModifColNameDialog', false)
        },
        modifyColName(inputColName) {
            this.$parent.modifyColName(inputColName, this.$store.state.colIndex)
        },
    }

}
</script>