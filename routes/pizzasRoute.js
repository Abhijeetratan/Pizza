const express = require("express");
const router = express.Router();
const Pizza = require('../models/pizzaModel')

router.get("/getAllPizzas", async (req, res) => {
    try {
        // Fetch all pizzas from the database
        const pizzas = await Pizza.find({});

        // Check if any pizzas were found
        if (!pizzas || pizzas.length === 0) {
            return res.status(404).json({ message: "No pizzas found" });
        }

        // Send the pizzas as a response
        res.send(pizzas);
    } catch (error) {
        // Handle any errors that occur during the database query
        console.error("Error fetching pizzas:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
module.exports = router;