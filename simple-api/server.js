const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for frontend access

// Define the /api/greet endpoint
app.get('/api/greet', (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.json({ error: "Name is required." });
    }

    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
