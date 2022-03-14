const app = new Vue(settings =
   {
      el: '#root',
      data: {
         // inputTodo: "",
         newTodo: "",

         todos: [
         {
            text: "fare i compiti",
            done: false,  
         },
         {
            text: "scrivere codici",
            done: true,  
         },
         {
            text: "fare i compiti",
            done: false,  
         },
         {
            text: "scrivere codici",
            done: false,  
         },
         {
            text: "fare i compiti",
            done: false,  
         },
         
         ]
         
         
      },
      methods: {
         aggiungiTodo() {
           if (this.newTodo.trim() != "" ) {
            this.todos.unshift({text: this.newTodo.trim(), done: false});
            this.newTodo = '';
           }
         },
         deleteTodo(i) {
            this.todos.splice(i, 1);
         },
         doneTodo (i) {
            if (this.todos[i].done == false) {
               this.todos[i].done = true;
            } else {
               this.todos[i].done = false;
            }
            
         }


      }
   }
);

 