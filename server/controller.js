const getHouses = (req, res) => {
  req.app.get('db').get_houses()
    .then(houses => res.status(200).send(houses))
    .catch(err => res.status(500).send(err));
}

const addHouse = (req, res) => {
  let {name, address, city, state, zipcode, image, mortgage, rent} = req.body
  req.app.get('db').add_house([name, address, city, state, zipcode, image, mortgage, rent])
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
}

const deleteHouse = (req, res) => {
  req.app.get('db').delete_house(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
}

module.exports = {
  getHouses,
  addHouse,
  deleteHouse
}