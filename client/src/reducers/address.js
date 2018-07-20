const address = (state = {}, action ) => {
  switch(action.type) {
    case 'SAVE_ADDRESS':
      return action.address
    default:
      return state;
   }
 }
 
 export default address;