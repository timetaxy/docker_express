const PORT = 8080;
const HOST = "0.0.0.0";
const app = express();

app.get('/', (req, res) => {
    res.send('success');
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});