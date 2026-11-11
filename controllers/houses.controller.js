import * as housesRepository from "../repositories/houses.repository.js";

// Get all houses
// GET /houses
export async function getAllHouses(req, res) {
    // try {
        const allHouses = await housesRepository.getAllHouses();

        res.status(200).json(allHouses);

//     } catch (error) {
//         console.error(error);

//         res.status(500).json({
//             message: "Error fetching houses"
//         });
//     }
}

// Get a single house by ID
// GET /houses/:id
export async function getHouseById(req, res) {
    // try {
        const id = req.params.id;
        const house = await housesRepository.getHouseById(id);

        if (house) {
            res.status(200).json(house);
        } else {
            throw new Error("House does not exist");
        //     res.status(404).json({
        //     message: "House does not exist",
        //     error: "Not Found",
        //     statusCode: 404
        // });
        }

    // } catch (error) {
    //     console.error(error);

    //     res.status(500).json({
    //         message: "Something went wrong",
    //         error: "Internal Server Error",
    //         statusCode: 500
    //     });
    // }
}
