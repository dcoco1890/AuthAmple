const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = function(sequelize, Datatypes) {
    var User = sequelize.define("User", {
        id: {
            primaryKey: true,
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Datatypes.STRING,
            is: ["^[a-z]+$", "i"],
            allowNull: false,
            required: true
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            isUnique: true,
            isEmail: true
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            required: true,
            len: [2, 10]
        }
    }, {
        timestamps: false
    });

    User.generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    User.prototype.validPassword = function(password) {
        bcrypt.compareSync(password, this.locaPassword)
    }

    return User;
};