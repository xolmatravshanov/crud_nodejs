var jwt = require('jsonwebtoken');

const Jwt = {

    /**
     *
     */
    secretKey: 'secretKey',

    /**
     *
     */
    publicKey: 'publicKey',

    /**
     *
     * hourly expire example '1h'
     * days expire example '7d'
     * milli seconds expire example '100'
     */
    expiresIn: 60 * 60,

    /**
     * @param req
     * @param res
     * @param next
     */
    verifyToken: (req, res, next) => {
        const authHeader = req.headers['authorization'];
        if (typeof authHeader !== undefined) {
            req.token = authHeader.split(' ')[1];
            next();
        } else {
            res.sendStatus(403);
        }
    },

    verifyTokenSecond: (req, res, next) => {
        const token =
            req.body.token || req.query.token || req.headers["x-access-token"];

        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }

        try {
            req.user = jwt.verify(token, config.TOKEN_KEY);
        } catch (err) {
            return res.status(401).send("Invalid Token");
        }

        return next();
    },


    sign: (signObject) => {
        jwt.sign(signObject, this.secretKey, {expiresIn: this.expiresIn});
    }


};

module.exports = Jwt;