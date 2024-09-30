const express = require("express");

const app = express();
const port = 3001;

app.post("/", (req, res) => {
	res.json({status: "ok"});
});

app.post("/issue1", async (req, res) => {
	/*try {
		const response = await fetch("http://localhost:3000/", {
			method: "GET"
		});
		
		if(response.ok){		
			res.json({status: "ok", response});
		}
	}catch(error){
		console.log(error)
	}*/
	res.json({status: "ok"});
});

app.post("/issue2", (req, res) => {
	res.set("Access-Control-Allow-Method", "POST")
	res.set("Access-Control-Allow-Origin", "*")
	res.set("Access-Control-Allow-Method", "POST")
	res.set("Access-Control-Allow-Origin", "*")
	res.json({status: "ok"});
});

app.listen(port, () => {
	console.log(`Server running  on port ${port}`);
});
