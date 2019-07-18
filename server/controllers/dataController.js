const clients = require('../clientsdata')
const employees = require('../employeesdata')
const messages = require('../messagesdata')

let id = 13

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

const deleteMessages = (req, res) => {
  const { id } = req.params
  let index = messages.findIndex(messages => {
    // console.log(client.id, id);
    return messages.id == id
  })
  // console.log(index);
  messages.splice(index, 1)
  res.status(200).send(messages)
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

const addEmployee = (req, res) => {
  const { firstName, lastName, email, location, jobTitle } = req.body
  if (!firstName || !lastName) {
    return res.status(417).json("First and last name are required.")
  }
  employees.unshift({ id, firstName, lastName, email, location, jobTitle })
  id++
  res.json(employees)
};    

const addMessage = (req, res) => {
  const { firstName, lastName, email, message } = req.body
  if (!firstName || !lastName || !email) {
    return res.status(417).json("Full name and email are required.")
  }
  messages.push({ id, firstName, lastName, email, message })
  id++
  res.json(messages)
}

const updateName = (req, res) => {
  const { firstName, lastName } = req.body
  clients.splice({ firstName, lastName })
  res.json(clients)
}

module.exports = {
  getClients,
  addClient,
  deleteClient,
  updateName,
  getEmployees,
  addEmployee,
  deleteEmployee,
  getMessages,
  addMessage,
  deleteMessages
}