const app = new Vue(settings =
   {
      el: '#root',
      data: {
         todoMsg: {
            text: "", error: false,
         },
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
            this.todoMsg.text = '';
            this.todoMsg.error = false;
           if (this.newTodo.trim() != "" ) {
            this.todos.unshift({text: this.newTodo.trim(), done: false});
            this.newTodo = '';
           } else {
              this.todoMsg.error = true;
              this.todoMsg.text = "Error! non può essere vuoto";
           }
         },
         deleteTodo(i) {
            this.todos.splice(i, 1);
            if (this.todos == '') {
               this.todoMsg.error = false;
               this.todoMsg.text = "Ben fatto! tutte le task sono state completate"
            };
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

 let todo = [];