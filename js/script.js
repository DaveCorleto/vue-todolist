
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
// NOTE:
// Come detto vi allego screeshot del layout fatto questa mattina, ma lo potete fare con il layout che volete.
// Partite comunque con un layout super essenziale, così da non perderci troppo tempo, e concentratevi il prima possibile sul farlo funzionare e quindi sui vari Milestones. Lo abbellite semmai alla fine.
// Qui sotto vi metto anche un esempio dell’array di oggetti che userete nella vostra App di ToDo.
// Ricordatevi la differenza in quello che si ottiene ad associare un valore basico Vs. assegnare un valore complesso (oggetto/array) ad una variabile/proprietà, potrebbe salvarvi tempo.



// const createApp = Vue; 


const app = Vue.createApp({

    data() {
      return {
        message: 'sta funzionando Vue',
        false: 'da fare',
        true: 'fatto!',
        todos: [
          {
            text: 'Fare i compiti',
            done: false
          },
          {
            text: 'Fare la spesa',
            done: true
          },
          {
            text: 'Fare il bucato',
            done: false
          }
        ]
      };
    },
    methods: {
      
    }
  });
  
  app.mount("#app");
  


// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// Userò un v-for in 
// Devo andare ad associare una classe con overline ai li con done===true 


