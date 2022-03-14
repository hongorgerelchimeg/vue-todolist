const app = new Vue(settings =
   {
      el: '#root',
      data: {
         todos: [
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
         {
            text: "scrivere codici",
            done: false,  
         },
         {
            text: "scrivere codici",
            done: false,  
         },
         
         ],
         saluto: '',
         
      },
      methods: {
         saluta: function () {
            this.saluto = 'Ciao' + " " + this.name;
         },


      }
   }
);

 