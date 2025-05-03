const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const User = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password : String,
})

const Todo = new Schema({
    userId: ObjectId,
    title: String,
    done: Boolean,
});

const UserModel = mongoose.model('users', User)
const TodoModel = mongoose.model('todos', Todo)

module.exports = {
    UserModel,
    TodoModel
}











// username: rajtejaswee02
// password: 8drNcw0SGdvS978L

// mongodb+srv://<db_username>:<db_password>@todocluster.nq4p2jo.mongodb.net/?retryWrites=true&w=majority&appName=todoCluster