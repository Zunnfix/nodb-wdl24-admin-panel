const express = require("express")
const dataController = require("./controllers/dataController")
const app = express()


app.use(express.json())

app.get("/api/clients/", dataController.getClients)
app.get("/api/employees/", dataController.getEmployees)
app.delete("/api/clients/:id", dataController.deleteClient)
app.delete("/api/employees/:id", dataController.deleteEmployee)
app.post("/api/clients/", dataController.addClient)

const PORT = 4242;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
