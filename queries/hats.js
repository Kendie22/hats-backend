const db = require('../db/dbConfig.js');

const getAllHats = async () => {
    try {
        const allHats = await db.any("SELECT * FROM hats");
        return allHats;
    } catch (error) {
        return { error: error }
    }
};
const getHatById = async (id) => {
    try {
        const oneHat = await db.one("SELECT * FROM hats WHERE id = $1", id);
        return oneHat;
    } catch (error) {
        return { error: error }
    }
};

const createHat = async (hat) => {
    try {
        if (!hat.style) {
            throw "You must specify a style for Hats";
        }
        const newHat = await db.one(
            "INSERT INTO hats (style, color, size, is_available, material, price, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [hat.style, hat.color, hat.size, hat.is_available, hat.material, hat.price, hat.image]
        );
        return newHat;
    } catch (error) {
        return { error: error }
    }
};

const updateHat = async (id, hat) => {
    try {
        const updatedHat = await db.one(
            "UPDATE hats SET style = $1, color = $2, size = $3, is_available = $4, material = $5, price = $6, image = $7 WHERE id = $8 RETURNING *",
            [hat.style, hat.color, hat.size, hat.is_available, hat.material, hat.price, hat.image, id]
        );
        return updatedHat;
    } catch (error) {
        return { error: error }
    }
}

const deleteHat = async (id) => {
    try {
        const deletedHat = await db.one("DELETE FROM hats WHERE id = $1 RETURNING *", id);
        return deletedHat;
    } catch (error) {
        return { error: error }
    }
}

module.exports = {
    getAllHats,
    getHatById,
    createHat,
    updateHat,
    deleteHat
};

