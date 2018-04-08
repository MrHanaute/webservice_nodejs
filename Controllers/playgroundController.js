var playground = require('../model/pg.js');

exports.list = function(){
    return new Promise((resolve, reject)=>{
        playground.get_playground()
        .then(  (data) =>{
            resolve(data.rows);
        })
        .catch((err)=>{
            reject(err);
        });
    });

}