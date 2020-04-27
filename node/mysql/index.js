const mysql = require('mysql')

// create connection object
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Dvm1234!',
  port: '3306',
  database: 'myblog'
})
 
// start connection
con.connect()

// run sql command
const sql = 'select * from users;'
con.query(sql, (err, result) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(result);
})

// end connection
con.end()
