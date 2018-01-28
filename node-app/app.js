let express = require('express')
let bodyParser = require('body-parser')
let uuidGenerator = require('uuid/v4')
let packageJsonFile = require('./package.json')

let app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/api/k8s', (req,res) => {
	let uuid = uuidGenerator()
	let appVersion = packageJsonFile.version
	res.send({
		id: uuid, 
		message: "This is NOT a drill",
		version: appVersion
	})
})

const PORT = process.env.port || 8888

app.listen(PORT, () => {
	console.info(`App listening on port : ${PORT}`)
})