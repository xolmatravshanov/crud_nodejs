'use strict';

var dbConn = require('../config/db.config');

//User object create
var User = (employee) => {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
};

User.create = (newEmp, result) => {
    dbConn.query("INSERT INTO regions set ?", newEmp, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.findById = (id, result) => {
    dbConn.query("select * from regions where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.findAll = (result) => {
    dbConn.query("Select * from regions", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('regions : ', res);
            result(null, res);
        }
    });
};


User.update = (id, employee, result) => {
    dbConn.query("UPDATE regions SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
};

User.delete = (id, result) => {
    dbConn.query("DELETE FROM regions WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = User;