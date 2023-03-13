var notFound = function (req, res) {
    return res.status(404).send("Route Does Not Exists!");
};
export default notFound;
