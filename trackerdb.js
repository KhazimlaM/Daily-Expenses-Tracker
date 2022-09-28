module.exports = function DailyExpenses(db) {

    async function takeNames(name, sname, email) {
        await db.none('INSERT INTO usernames(first_name, last_name, email) values($1, $2, $3)', [name, sname, email])
      }

    
    return {
    takeNames,
        
    }

}