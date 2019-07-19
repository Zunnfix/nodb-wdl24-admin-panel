const express = require("express")
const dataController = require("./controllers/dataController")
const clientsController = require("./controllers/clientsController")
const app = express()


app.use(express.json())

app.get("/api/clients/", clientsController.getClients)
app.delete("/api/clients/:id", clientsController.deleteClient)
app.post("/api/clients/", clientsController.addClient)
app.put("/api/clients/:id", clientsController.editEmail)

app.get("/api/employees/", dataController.getEmployees)
app.delete("/api/employees/:id", dataController.deleteEmployee)
app.post("/api/employees/", dataController.addEmployee)

app.get("/api/messages/", dataController.getMessages)
app.delete("/api/messages/:id", dataController.deleteMessages)
app.post("/api/messages/", dataController.addMessage)
<<<<<<< HEAD
=======
app.put("/api/clients/:id", dataController.updateName)
>>>>>>> 2c4e0ceaa1f85d80c7860f66aaf7a5e995e482a3

const PORT = 4242;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
