const crypto = require('crypto');



function sha1Encode(data) {
    const hash = crypto.createHash('sha1');
    hash.update(data);
    return hash.digest('hex');
}

module.exports.digestAuth = (request, response, next) => {
    const authorization = request.headers.authorization; 
    console.log('authorization ', authorization);
    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    const [login, password] = decoded.split(':');
    if (login === 'node' && password === sha1Encode('password')) return next();
    response.sendStatus(401);
}