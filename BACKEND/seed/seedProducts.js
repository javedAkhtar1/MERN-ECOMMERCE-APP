const mongoose = require("mongoose");
const Product = require("../models/product.model.js")
const User = require("../models/user.model.js")
const allProducts = require("./allProducts.js")
const connectToDB = require("./connect.js");

connectToDB();

// Fetch random users
const fetchRandomUsers = async (count) => {
    try {
        const randomUsers = await User.aggregate([{ $sample: { size: count } }]);
        return randomUsers.map(user => user._id); // Extract ObjectId for each user
    } 
    catch (error) {
        console.error("Error fetching random users:", error);
        return [];
    }
};

// Seed Products
const seedProducts = async () => {
    try {
        for (let product of allProducts) {
            const userIds = await fetchRandomUsers(3); // Fetch 3 random users for reviews

            // Populate reviews field
            product.reviews = userIds.map((userId, index) => ({
                user: userId,
                rating: Math.floor(Math.random() * 5) + 2, // Random rating between 1-5
                comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore vitae doloremque nisi'
            }));

            // Create product in database
            await Product.create(product);
            console.log(`Added product: ${product.name}`);
        }
    } catch (error) {
        console.error("Error seeding products:", error);
    } finally {
        mongoose.connection.close();
    }
};

seedProducts();