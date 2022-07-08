const app = require('./api')

app.get("/", (req, res) => {
    res.json({ message: "ahihi" });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
