// write your createStore function here

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().join(' ')
};

// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.