export const getAllPizzasReducer = (state = { pizzas: [], loading: false, error: null }, action) => {
    switch (action.type) {
      case 'GET_PIZZAS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null // Reset error when making a new request
        };
      case 'GET_PIZZAS_SUCCESS':
        return {
          ...state,
          loading: false,
          pizzas: action.payload,
          error: null // Reset error on successful fetch
        };
      case 'GET_PIZZAS_FAILED':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  