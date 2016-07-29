import RetroItem from '../models/RetroItem.js';

export default class RetroItemApi {

  post(retroItem) {
      retroItem.save();
  }

  fetchAll() {
    RetroItem.find(function(err, items) {
      return items;
    });
  }

  get(id) {
      RetroItem.findOne({id: id}, function(error, item) {
          return item;
      });
  }
}