const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/', express.static('client'));

let collection = null;
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';

(async() => {
    const connection = await MongoClient.connect(uri, {useNewUrlParser: true})
    const db = connection.db('shopping_list');
    collection = db.collection('users');
})();

app.get('/list/:list_name', async (req, res) => {
    let list = await collection.findOne({ list_name: req.params.list_name });
    if (list) {
        res.send(list);
    } else {
        res.send({});
    }
});

app.post('/list', async (req, res) => {
    const listName = req.body.list_name;
    try {
        await collection.insertOne({
            list_name: listName,
            items: [],
            default_color: "amber", 
            sort_by_color: false
        });
        res.status(200).json('New list was added successfully');
    } catch (e) {
        res.send(e);
    }
});

app.put('/add-item/:list_name', async (req, res) => {
    const listName = req.params.list_name;
    const newItem = req.body;
    try {
        await collection.updateOne(
            { list_name: listName },
            { $push: { items: newItem }});
            res.status(200).json('New item was added successfully');
    } catch (e) {
        res.send(e);
    }
});

app.put('/update-items/:list_name', async (req, res) => {
    const listName = req.params.list_name;
    const updatedList = req.body.items;
    try {
        await collection.updateOne(
            { list_name: listName },
            { $set: { items: updatedList }}
        );
        res.status(200).json('The list was updated successfully');
    } catch (e) {
        res.send(e);
    }
});

app.put('/update-settings/:list_name', async (req, res) => {
    const listName = req.params.list_name;
    const sortByColor = req.body.sort_by_color;
    const defaultColor = req.body.default_color;

    try {
        await collection.updateOne(
            { list_name: listName },
            { $set: { sort_by_color: sortByColor, default_color: defaultColor }}
        );
        res.status(200).json('Settings were updated successfully');
    } catch (e) {
        res.send(e);
    }
});

app.listen(process.env.PORT || 3000, console.log('Server is running....'));