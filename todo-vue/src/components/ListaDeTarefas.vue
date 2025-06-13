<script setup>
const props = defineProps(['tarefas'])
</script>

<template>
    <ul class="list-group mt-4">
      <li class="list-group-item" v-for="(tarefa, index) in props.tarefas" :key="index">
        <input @change="evento => tarefa.finalizado = evento.target.checked" :checked="tarefa.finalizado" :id="tarefa.titulo" type="checkbox" class="checkbox">
        <label :class="{ done: tarefa.finalizado === true }" class="ms-3" :for="tarefa.titulo">
         {{ tarefa.titulo }}
        </label>
      </li>
    </ul>
</template>

<style scoped>
.done{
  text-decoration: line-through;
}
</style>