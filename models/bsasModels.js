var pool = require('./bd');

async function getPropuestasbsas(){
    var query = 'select * from bsas';
    var rows = await pool.query(query);
    return rows;
}

module.exports = {getPropuestasbsas}