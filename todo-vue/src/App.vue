<script setup>
import { reactive } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
import Formulario from './components/Formulario.vue';
import ListaDeTarefas from './components/ListaDeTarefas.vue';

const estado = reactive({
  filtro: 'todas',
  tarefaTemp: '',
  tarefas: [
    { titulo: 'Estudar ES6', finalizado: false },
    { titulo: 'Estudar SASS', finalizado: false },
    { titulo: 'Ir para a academia', finalizado: true }
  ]
});

const getTarefasPendentes = () => estado.tarefas.filter(tarefa => !tarefa.finalizado);
const getTarefasFinalizadas = () => estado.tarefas.filter(tarefa => tarefa.finalizado);

const getTarefasFiltradas = () => {
  switch (estado.filtro) {
    case 'pendentes':
      return getTarefasPendentes();
    case 'finalizadas':
      return getTarefasFinalizadas();
    default:
      return estado.tarefas;
  }
};

const cadastrarTarefa = () => {
  if (estado.tarefaTemp.trim()) {
    const tarefaNova = { titulo: estado.tarefaTemp, finalizado: false };
    estado.tarefas = [...estado.tarefas, tarefaNova];
    estado.tarefaTemp = '';
  }
};

const editaTarefaTemp = (evento) => {
  estado.tarefaTemp = evento.target.value;
};
</script>

<template>
  <div class="container">
    <Cabecalho :tarefas-pendentes="getTarefasPendentes()" />
    <Formulario
  :trocar-filtro="evento => estado.filtro = evento.target.value "
  :tarefa-temp="estado.tarefaTemp"
  :edita-tarefa-temp="editaTarefaTemp"
  :cadastrar-tarefa="cadastrarTarefa"
  />

    <ListaDeTarefas 
      :tarefas="getTarefasFiltradas()" />
  </div>
</template>
