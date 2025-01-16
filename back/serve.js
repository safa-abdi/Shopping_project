const express=require('express');
const mongoConnection=require('./dataBase');
const  cors= require('cors')
const bodyParser = require('body-parser')
const d=require('./models/design')
const app =express();
const contactRoutes = require('./routes/contact');

app.use(cors());
app.use(cors({
  origin: 'http://localhost:3001', 
  methods: 'GET,POST,PUT,DELETE',
}));
app.listen(3000 , 'localhost',()=>{
    console.log('Application connected sur le port 3000...');
});

mongoConnection();
app.use(express.json())
app.use('/' , require('./routes/CommentaireRoutes'))
app.use('/' , require('./routes/ProduitRouter'))
app.use('/' , require('./routes/commandeRouter'))
app.use('/api',contactRoutes)
app.use('/' , require('./routes/designRouter'))
app.use('/' , require('./routes/utilisateurRouter'))

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())


app.get("/uploads/:image", function (req, res) {
  res.sendFile(__dirname + "/uploads/" + req.params.image);
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001'); // Autorise l'origine de la requête
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Définissez les méthodes HTTP autorisées
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Définissez les en-têtes autorisés
  next();
});



module.exports = app; 

