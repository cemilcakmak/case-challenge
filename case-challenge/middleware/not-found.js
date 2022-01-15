const notFound = (req, res) => {
    res.status(404).send('Provided endpoint does not exist.');
};

module.exports = notFound;