const connection = require('../config/connection');

const orm = {}

orm.selectAll = (cb) => {
    let query = `SELECT * FROM burgers;`;
    connection.query(query, (err, result) => {
        if (err) throw err;
        cb(result);
    });
};

orm.insertOne = (burger_name, cb) => {
    let query = `INSERT INTO burgers (burger_name) VALUES (${burger_name});`;
    connection.query(query, (err, result) => {
        if (err) throw err;
        cb(result);
    });
};

orm.updateOne = (burgerId, cb) => {
    let query = `UPDATE burgers SET ? WHERE ?;`;
    connection.query(query, [{ devoured: true }, { id: burgerId }], (err, result) => {
        if (err) throw err;
        cb(result);
    });
};


orm.connection = connection;

module.exports = orm;