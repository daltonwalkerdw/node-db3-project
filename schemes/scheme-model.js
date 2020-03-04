const db = require("../config")

function find() {
    return db("schemes") 
}

function findById(id) {
    return db.select("*").from("schemes").where("id", id).first()
    
}

function findSteps(id) {
    return db("steps as s")
    .join("schemes as sc", "sc.id", "s.scheme_id")
    .where("scheme_id", id)
    .select("sc.id", "sc.scheme_name", "s.step_number", "s.instructions")
}

function add(scheme) {
  return db("schemes").insert(scheme, "id")
}

function update(changes, id) {
    return db("schemes").update(changes).where("id", id)
}

function remove(id) {
   return db("schemes").del().where("id", id)
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
    
}