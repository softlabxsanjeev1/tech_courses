import TryCatch from "../middleware/TryCatch.js";

export const createCourse = TryCatch(async (req, res) => {
    const { title, description, category, createdBy, duration, price } = req.body;

    const image = req.file;
});