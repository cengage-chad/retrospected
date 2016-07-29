import Immutable from 'immutable';

const RetroItem = Immutable.Record({
  id: undefined,
  description: undefined,
  votes: undefined
});

const defaultState = new Immutable.Map([
  ['good', []],
  ['change', []]
]);

export default function retroItemReducer(state = defaultState, action) {
  
  switch(action.type) {
    case 'CREATE_RETRO_ITEM':
      
      return state.set(action.item.type, state.get(action.item.type).push(new RetroItem({
        id: action.item.id,
        description: action.item.description,
        votes: action.item.votes
      })));
    case 'EDIT_RETRO_ITEM':
      return state.set(action.id, action.text);
    case 'DELETE_RETRO_ITEM':
      return state.delete(action.id);
    case 'GET_RETRO_ITEMS':
      return state.concat(action.res.data);
    default:
      return state;
  }
}