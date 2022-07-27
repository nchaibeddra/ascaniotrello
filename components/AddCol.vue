<template>
    <div class="w-80 mt-3 bg-transparent h-24 rounded-t-sm cursor-pointer rounded-xl">
        <div class="px-1 w-80 bg-secondary rounded-t-md h-8 p-1"> Ajouter une colonne</div>
        <input class="w-80 h-12 px-2 " v-model="inpColName" type="text" name="inpColName" id="inpColName"
            placeholder="Nom de votre colonne">
        <button @click="addCol"
            class="w-80 shadow-md bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Nouvelle
            colonne</button>
    </div>
</template>
<script>
export default {
    name: 'AddCol',
    data() {/*  */
        return {
            inpColName: null
        }
    },
    methods: {
        addCol() {
            this.$parent.addCol(inpColName)
        }
    }

}
</script>