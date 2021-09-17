const auth = {

    /**
     *
     */
    secretKey: 'secretKey',
    /**
     *
     */
    publicKey: 'publicKey',

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
    }

};

module.exports = auth;