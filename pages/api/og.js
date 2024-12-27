export default function handler(req, res) {
    res.status(200).json({
        message: "OG API is working",
        query: req.query,
    });
}
