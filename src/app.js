import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
      {name: "post letter", done: false},
      {name: "feed dog", done: true},
      {name: "paint door", done: false}
    ],
      newItem: ""
    },
    methods: {
      saveNewItem: function() {
        this.todos.push(this.newItem);
        this.newItem = "";
      }
    }
    });
  });
