module.exports = function DailyExpenses(db) {

  async function storeNames(name, lastname, email) {

    await db.none('INSERT INTO userz(first_name, last_name, email) values ($1, $2, $3)', [name, lastname, email]);

  }

  async function getNames(name, email) {
    
    let theNames = await db.oneOrNone('select first_name from userz where userz = $1', [name, email]);
    return theNames;
  }

  
  
  return {
    storeNames,
    getNames
    
  }

}