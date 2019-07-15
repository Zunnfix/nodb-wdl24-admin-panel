const clients = require('../clientsdata');
const employees = require('../employeesdata');
const messages = require('../messagesdata')

const getClients = (req, res) => {
  res.json(clients)
}

const getEmployees = (req, res) => {
  res.json(employees)
}

const getMessages = (req, res) => {
  res.json(messages)
}

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

const deleteEmployee = (req, res) => {
  const { id } = req.params
  let index = employees.findIndex(employees => {
    // console.log(client.id, id);
    return employees.id == id
  })
  // console.log(index);
  employees.splice(index, 1)
  res.status(200).send(employees)
}

const addClient = (req, res) => {
  const { id, firstName, lastName, email, business, title } = req.body;
  if (!firstName || !lastName) {
    return res.status(417).json("First and last name are required.");
  }
  clients.push({ id, firstName, lastName, email, business, title });
  res.json(clients);
};                     /// This will be needed to add to the current list of clients ///

// app.put()

module.exports = {
  getClients,
  getEmployees,
  addClient,
  deleteClient,
  deleteEmployee,
  getMessages
}