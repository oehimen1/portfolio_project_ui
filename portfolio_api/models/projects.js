const db= require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Projects{

    static async fetchProjects(){
        const results = await db.query(
            `
            SELECT id,
                   name,
                   image,
                   description,
                   url
            FROM projects
            `
        );
        return results.rows

    }
}
module.exports = Projects