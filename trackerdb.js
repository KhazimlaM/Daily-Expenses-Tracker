module.exports = function DailyExpenses(db) {

  async function storeNames(name, lastname, email) {

    await db.none('INSERT INTO userz(first_name, last_name, email) values ($1, $2, $3)', [name, lastname, email]);

  }

  async function getNames(name) {
  
    let theNames = await db.one('select first_name from userz where first_name = $1', [name]);
    console.log(theNames + 'fdfdffdfd')
    return theNames;
  }
 
  async function storeExpenses(name, date, amount, catagory){
 let   user_id = await db.any('Select id from userz where first_name = $1', [name])
  let catagory_id = await db.any('Select id from categoriez where descriptions = $1', [catagory])
console.log(user_id, catagory_id)
  await db.none('INSERT INTO expensez(categoriez_id, amount, expense_date) values ($1, $2, $3)' [date, amount, catagory]);

  }
  
  return {

    storeNames,
    getNames,
    storeExpenses
    
  }

}