import RetroItem from '../models/RetroItem.js';

exports.post = function(retroItem) {
    retroItem.save();
}

exports.fetchAll = function() {
  RetroItem.find(function(err, items) {
    return items;
  });
}

exports.get = function(id) {
    RetroItem.findOne({id: id}, function(error, item) {
        return item;
    });
};