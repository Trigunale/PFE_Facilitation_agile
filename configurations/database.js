/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  23/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

module.exports = {
    port: process.env.PORT || 3000,
    db: (process.env.NODE_ENV === "test"?"mongodb://localhost/pfe_facilitation_agile_test":false) || process.env.MONGOLAB_URI || 'mongodb://localhost/pfe_facilitation_agile'
};