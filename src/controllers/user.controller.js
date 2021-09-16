'use strict';

const User = require('../models/user.model');

exports.findAll = (req, res) => {
    User.findAll((err, employee) => {
        console.log('controller')
        if (err)
            res.send(err);

        console.log('res', employee);
        res.send(employee);

    });
};


exports.create = (req, res) => {

    const new_employee = new User(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required field'});
    } else {
        User.create(new_employee, (err, employee) => {
            if (err)
                res.send(err);
            res.json({error: false, message: "User added successfully!", data: employee});
        });
    }
};


exports.findById = (req, res) => {
    User.findById(req.params.id, function (err, employee) {

        if (err)
            res.send(err);

        res.json(employee);
    });
};


exports.update = (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({error: true, message: 'Please provide all required field'});
    } else {
        User.update(req.params.id, new User(req.body), function (err, employee) {

            if (err)
                res.send(err);

            res.json({error: false, message: 'User successfully updated'});
        });
    }
};


exports.delete = (req, res) => {
    User.delete(req.params.id, function (err, employee) {
        if (err)
            res.send(err);
        res.json({error: false, message: 'User successfully deleted'});
    });
};