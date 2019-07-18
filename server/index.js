const express = require("express")
const dataController = require("./controllers/dataController")
const app = express()


app.use(express.json())

app.get("/api/clients/", dataController.getClients)
app.get("/api/employees/", dataController.getEmployees)
app.get("/api/messages/", dataController.getMessages)
app.delete("/api/clients/:id", dataController.deleteClient)
app.delete("/api/employees/:id", dataController.deleteEmployee)
app.delete("/api/messages/:id", dataController.deleteMessages)
app.post("/api/clients/", dataController.addClient)
app.post("/api/employees/", dataController.addEmployee)
app.post("/api/messages/", dataController.addMessage)
app.put("/api/clients/:id", dataController.updateName)

const PORT = 4242;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
