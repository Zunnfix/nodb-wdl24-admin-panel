const clients = require('../clientsdata');
const employees = require('../employeesdata');

const getClients = (req, res) => {
  res.json(clients)
}
const getEmployees = (req, res) => {
  res.json(employees)
}

const deleteClient = (req, res) => {
  const {id} = req.params
  let index = clients.findIndex(client => {
    console.log(client.id, id);
    return client.id == id
  })
  console.log(index);
  clients.splice(index, 1)
  res.status(200).send(clients)
}

const deleteEmployee = () => {
  const {employees, id} = this.state
  if (employees.length > 1) {
    if (id > 0) {
      employees.splice(id, 1);
      this.setState({id: id - 1});
    }
    else {
      employees.splice(id, 1);
      this.forceUpdate();
    }
  }
}

const addClient = (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName || !lastName) {
    return res.status(417).json("First and last name are required.");
  }
  clients.push({ firstName, lastName, email, business, title });
  res.json(clients);
};                         ///// This will be needed to add to the current list of clients! /////

// app.put()

module.exports = {
  getClients,
  getEmployees,
  addClient,
  deleteClient,
  deleteEmployee
}