const mongoose =require(`mongoose`)
mongoose.connect(`mongodb://localhost/expenses`, {useNewUrlParser:true})

const Schema = mongoose.Schema

const expenseSchema = new Schema({
    name: String,
    amount: Number,
    date: Date,
    groug: String
})
const Expense = mongoose.model("Expense", expenseSchema)

module.exports = Expense