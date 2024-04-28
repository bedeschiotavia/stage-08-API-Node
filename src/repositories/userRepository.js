const sqliteConnection = require ("../database/sqlite")

class UserRepository {
  async findByEmail(email){
    const datatbase = await sqliteConnection()
    
    const user = await datatbase.get("SELECT * FROM users WHERE email = (?)", [email])

    return user
  }

  async create({ name, email, password }){
    const datatbase = await sqliteConnection()
    
    const userId = await datatbase.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [ name, email, password ]
    )

    return { id: userId }
  }
}

module.exports = UserRepository