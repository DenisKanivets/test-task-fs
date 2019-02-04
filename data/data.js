const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        id: new Date(),
        name: '',
        surname: '',
        age: '',
        profession: '',
        salary: ''
    },
    { timestamps: true }
);


module.exports = mongoose.model("Data", DataSchema);