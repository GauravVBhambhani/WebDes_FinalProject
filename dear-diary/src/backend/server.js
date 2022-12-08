const mongoose = require("mongoose");
const Document = require("./Document");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb://localhost:27017/WebDesign', options)
.then(()=> {
    console.log("Connected to database");
})
.catch(err => {
    console.log(err);
})

const io = require('socket.io')(3001, {  /*port where we want to run it: 3001*/
    /*cross origin request support: allows us to make request from different url to a different one */
    cors: {
        origin: "http://localhost:3000",            /*where our actual client is*/
        methods: ['GET', 'POST']    /*request type */
    }
})

//creating default value
const defaultValue = "";

//everytime our client connects it is going to run this io connection
io.on("connection", socket => {
    socket.on("get-document", async documentId => {
        const document = await findOrCreateDocument(documentId);
            //putting socket into its own room and that room can talk based on the roomid i.e. documentid
            socket.join(documentId);
            socket.emit("load-document", document.data);
            
            socket.on('send-changes', delta => {
            //getting each and every character what we type in the text editor
            //prints each character that we enter
            //console.log(delta)
            //changes sent from client
            //function name- receive-changes and delta is the changes
            //broadcast the message to everyone else except ourself that the changes have been made
            socket.broadcast.to(documentId).emit("receive-changes", delta)
        })
        //console.log("connected");
        
        //save document
        socket.on("save-document", async data => {
            await Document.findByIdAndUpdate(documentId, {data})
        })
    })
})

//whenever I get a document here, I wanna wither find a document by documentid or create it from scratch
async function findOrCreateDocument(id){
    if(id==null) return;

    const document = await Document.findById(id);
    if(document) return document;
    return await Document.create({_id: id, data: defaultValue})
}