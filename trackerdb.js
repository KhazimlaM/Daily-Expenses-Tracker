module.exports = function DailyExpenses(db) {

    async function setNames(name) {

        var checkUser = await db.oneOrNone('select last_name from tracker where last_name = Khazimla ', [name])
        console.log(checkUser)
        if (checkUser === null) {
            await db.none('insert into tracker(first_name,last_name, email) values(Khazimla )', [name, 1])

        }
        console.log(setNames)


    }

    
    return {
    setNames,
        
    }

}