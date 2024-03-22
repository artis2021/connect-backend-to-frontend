import express from "express";
import cors from 'cors'; 
const app = express();
app.use(cors())

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// })

const port = process.env.PORT || 8000;

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another Joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'A Third Joke',
            content: 'This is third joke'
        },
        {
            id: 4,
            title: 'A Fourth Joke',
            content: 'This is fourth joke'
        },
        {
            id: 1,
            title: 'A Fifth Joke',
            content: 'This is fifth joke'
        }
    ];
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`Server is ready at http://localhost:${port}`);
})