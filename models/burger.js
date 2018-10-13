const orm = require('../config/orm');

const burger = {
    all: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    insert: (burger_name, cb) => {
        orm.insertOne(burger_name, (res) => {
            cb(res);
        });
    },

    update: (burgerId, cb) => {
        orm.updateOne(burgerId, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;