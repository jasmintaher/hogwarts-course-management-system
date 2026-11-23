import * as housesRepository from "../repositories/houses.repository.js";
import HTTPError from "../errorhandling/HTTPError.js";

// Get all houses
// GET /houses
export async function getAllHouses(req, res) {
    const allHouses = await housesRepository.getAllHouses();

    res.status(200).json(allHouses);
}

// Get a single house by ID
// GET /houses/:id
export async function getHouseById(req, res) {
    const id = req.params.id;
    const house = await housesRepository.getHouseById(id);
        if (!house) {
            throw new HTTPError(404, "House does not exist");
        }

        res.status(200).json(house);
}
