const env = process.env.NODE_ENV || 'development';

module.exports = () => {
    return require(`./webpack/${env}`);
}
