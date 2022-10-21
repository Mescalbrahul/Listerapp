<template>
    <input v-model="inputValue" type="text" @keydown.enter="updateValue">
    <button @click="updateValue"> {{props.btnLabel}}</button>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    btnLabel:{
        type: String,
        default:"Ajouter"
    }
});

const inputValue = ref("");

const emit = defineEmits(['newValue']);

function updateValue() {
    //assurer que si il y a des données, sinon on arrête
    if (inputValue.value.length == 0) return;

    //emettre évènement vers le parent

    emit("newValue", inputValue.value)

    //vider champ de texte
    inputValue.value ="";
}

</script>
<style scoped lang='scss'>
    div{
        display:flex;
        gap: .5em;
        input{
            flex-basis: 70%;
        }

        button{
            flex-basis: 30%;
        }
    }
</style>