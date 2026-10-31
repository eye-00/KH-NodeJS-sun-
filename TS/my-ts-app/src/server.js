import express from 'express';
const app = express();
const PORT = 3005;
app.get('/hello', (req, res) => {
    const message = 'Hello, Phuoc!';
    res.json({ message });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
