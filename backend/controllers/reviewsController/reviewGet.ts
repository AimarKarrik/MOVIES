import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    const page: number = parseInt(req.query.page as string);
    const pageSize: number = parseInt(req.query.pageSize as string);

    const reviews: Array<object> = [
        {
            "id": 1,
            "title": "Star Wars: Episode IV - A New Hope",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "rating": 5,
            "createdAt": "16.06.2023",
            "updatedAt": "13.06.2023",
            "screenplayId": 1,
            "userID": 1,
        }
    ]
    res.send(reviews);
});

export default router;

