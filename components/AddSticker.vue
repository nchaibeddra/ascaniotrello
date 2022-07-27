<template>
    <div v-if="$store.state.stickerDialog" class="fixed w-full min-h-screen opacity-90 bg-gray-200">
        <div class="mt-36 border bg-secondary rounded-xl w-1/3 mx-auto p-5">
            <div class="w-full"> Ajouter une étiquette :</div>
            <input v-model="inputStep" class="w-full mt-2 rounded px-2" type="text" placeholder="Etape">
            <input v-model="inputCity" class="w-full mt-2 rounded px-2" type="text" placeholder="Rechercher une ville"
                @keyup="getCityList(inputCity)">
            <select v-model="selectedCity" class="w-full  mt-2 rounded px-2" autofocus>
                <option v-for="(city, index) in foundCity" :key="index" :value="city.nom">{{ city.nom }}
                </option>
            </select>

            <input v-model="inputDate" class="w-full px-2 mt-2 rounded" type="date">
            <button @click="addStep(inputStep, inputCity, inputDate, $store.state.colIndex)"
                class="w-full px-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 border-b-4 border-blue-700 mt-2 hover:border-blue-500 rounded">
                Ajouter </button>
            <button @click="close"
                class="w-full px-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 border-b-4 border-red-700 mt-2 hover:border-red-500 rounded">
                Annuler </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddSticker',
    data() {
        return {
            foundCity: [],
            selectedCity: null,
            index: 0,
            inputStep: null,
            inputCity: null,
            inputDate: null,
        }
    },
    methods: {
        close() {
            this.$store.commit('ocStickerDialog', false)
        },
        addStep(inputStep, inputCity, inputDate, selectedIndex) {
            this.$parent.addStep(inputStep, inputCity, inputDate, selectedIndex)
        },
        async getCityList(char) {
            if (char && char.length > 2) {
                const list = await this.$axios.get(`https://geo.api.gouv.fr/communes?nom=${char}`).then((response) => {
                    this.foundCity = response.data
                    this.selectedCity = this.foundCity[0].nom
                }).catch((error) => {
                    this.foundCity = [{ nom: 'Aucune ville trouvée' }]

                })

            }
        },
    }

}
</script>