<template>
    <div v-if="$store.state.confDialog" class="fixed w-full min-h-screen opacity-90 bg-gray-200">
        <div class="mt-36 border bg-secondary rounded-xl w-1/3 mx-auto p-5">
            <div class="w-full"> Supprimer une {{ $store.state.chooseDialog }} :</div>
            <button @click="deleteArray"
                class="w-full px-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 border-b-4 border-blue-700 mt-2 hover:border-blue-500 rounded">
                Supprimer cette {{ $store.state.chooseDialog }} </button>
            <button @click="close"
                class="w-full px-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 border-b-4 border-red-700 mt-2 hover:border-red-500 rounded">
                Annuler </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ConfDialog',
    methods: {
        deleteArray() {
            if (this.$store.state.chooseDialog === 'étiquette') {
                this.$parent.deleteStep()
            } else {
                this.$parent.deleteCol(this.$store.state.colIndex)
            }
        },
        close() {
            this.$parent.closeConfDialog()
        }
    }
}
</script>