const bodyParser 	= require("body-parser"),
	  mongoose 		= require("mongoose"),
	  express	 	= require("express"),
	  app			= express()

// Body parser middleware
app.use(bodyParser.json());

// DB config
const DB = require("./config/keys").mongoURI;
mongoose.connect(DB)
	.then(() => console.log("[x] DB connected"))
	.catch(err => console.log(err));

// Items
const items = require("./routes/api/items");

// Server config
const PORT = process.env.PORT || 5000;

// Use routes
app.use("/api/items", items);

app.get('/', (req, res) => {
    res.send('im the home page!');  
});

app.listen(PORT, () => console.log(`[x] Server started on port ${PORT}`));