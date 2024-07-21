import { createStore } from 'redux';

const initialState = {
  user: null,
  learningMaterials: [],
  quizzes: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // Define actions here
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
