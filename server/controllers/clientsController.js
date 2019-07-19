
const clients = require('../clientsdata')

const getClients = (req, res) => {
  res.json(clients)
}

const customers = {
  id: null,
  firstName: '',
  lastName: '',
  email: '',
  business: '',
  title: '',
}

let id = 13

const editEmail = (req, res) => {
  const { updateEmail } = req.body
  const { id } = req.params
  let index = clients.findIndex(client => {
    return client.id == id
  })
  clients.splice(index, {updateEmail})
  updateEmail = {
    email
  } 
  clients[index] = updateEmail;
  res.json(clients)
}


const addClient = (req, res) => {
  const { firstName, lastName, email, business, title } = req.body
  if (!firstName || !lastName) {
    return res.status(417).json("First and last name are required.")
  }
  clients.unshift({ id, firstName, lastName, email, business, title })
  id++
  res.json(clients)
};    

const deleteClient = (req, res) => {
  const { id } = req.params
  let index = clients.findIndex(client => {
    // console.log(client.id, id);
    return client.id == id
  })
  // console.log(index);
  clients.splice(index, 1)
  res.status(200).send(clients)
}

module.exports = {
  getClients,
  addClient,
  deleteClient,
  editEmail,
}