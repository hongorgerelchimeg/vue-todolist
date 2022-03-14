const app = new Vue(settings =
   {
      el: '#root',
      data: {
         inputTodo: "",
         newTodo: {
            text: "",
            done: false,
         },

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
           if (this.inputTodo.trim() != "" ) {
            this.newTodo.text = this.inputTodo.trim() ;
            this.todos.push(this.newTodo);
            this.inputTodo = '';
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

 