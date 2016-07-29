import request from 'axios';
import uuid from 'uuid';

const BACKEND_URL = 'http://localhost:8080/retroItem';

export function createRetroItem(item) {
  return {
    type: 'CREATE_RETRO_ITEM',
    promise: request.post(BACKEND_URL, {
      id: uuid.v4(),
      type: item.type,
      description: item.description
    })
  }
}

export function editRetroItem(id, text) {
  return {
    type: 'EDIT_RETRO_ITEM',
    id,
    text,
    date: Date.now()
  };
}

export function deleteRetroItem(id) {
  return {
    type: 'DELETE_RETRO_ITEM',
    id
  };
}

export function getRetroItem() {
  return {
    type: 'GET_RETRO_ITEMS' // ,
    // promise: request.get(BACKEND_URL)
  }
}