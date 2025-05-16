const express = require('express');git
const app = express();
const port = 3000;
const lista=[
    {id: 1, name: 'John Doe'},
    {id: 1, name: 'Jane Doe'}
];
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send(lista)
}
);
app.listen(port, () => {
    console.log('Example app listening on port ${port}')
}
);