const chalk = require("chalk")

const online = chalk.green
const error = chalk.red
const info = chalk.blue
const warning = chalk.yellow
const seperator = chalk.black
const databaseSeperator = chalk.yellow

console.log(databaseSeperator("------------------------Database--------------------------"))
console.log(online(`${database} Gateway: Connecting.`))
console.log(online(`${database} Gateway: Connecting..`))
console.log(online(`${database} Gateway: Connecting...`))
console.log(online(`${database} Gateway: Connected`))
console.log(info(`${database} Gateway: Getting Ready, loading database value...`))
console.log(databaseSeperator("----------------------------------------------------------"))
console.log(" ")

globalThis.start = async function() {
  console.log(online("NovaDB Gateway: Ready!"))
  const fs = require("fs")
  const database = []
  
  require("./integration.js")
  
  const hellodb = {
    write: async function(dbName, value, password) {
      if (dbName && typeof value == "array") {
        return new Promise(function(suc, rej) {
          suc(database.push({
            authCode: password ?? undefined, database: dbName, value: value, id: Math.floor(Math.random() * 50000) + 1000, edit: async function(options) {
              if (this.authCode != undefined) {
                if (options.authCode != this.authCode) {
                  return false
                } else {
                  this.authCode = options.authCode ?? options.password
                  this.database = options.database ?? options.dbName
                  this.value = options.value
                  return this
                }
              } else {
                this.authCode = options.authCode ?? options.password
                this.database = options.database ?? options.dbName
                this.value = options.value
                return this
              }
            }, destroy: async function() {
              this.authCode = null
              this.database = null
              this.value = null
              this.edit = null
              this.destroy = null
            }
          }))
        })
      }
    },
      del: async function(id, password) {
      if (dbid && password) {
        database.forEach(async (db) => {
          if (db.id == dbid && db.password == password) {
            await db.destroy().then(destroyed => { return "Deleted" }) // Delete the database which matches the ID
          }
        })
      }
    },
    fetch: async function(id) {
      if(id) {
        database.forEach(async(db) => {
          if(db.id == id) {
             return db
          }
        })
      }
    }
  }
  
  process.stdin.on("KeepAlive", async data => {
    eval(data.toString())
    return true
  })
  
  process.stdin.resume("KeepAlive")
}

setTimeout(start, 2000)
