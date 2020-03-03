products = [];

const index = (req, res) => 
{
    res.json(products);
};

const create = (req, res) => 
{
    let { name, price } = req.body;
    products.push({ name, price });
    res.json(products);
};

const show = (req, res) => 
{
    let { id } = req.params;
    res.json(products[(id - 1)]);
};

module.exports =
{
    index,
    create,
    show
};
