import express, {} from "express";
export function createApp() {
    const app = express();
    app.use(express.json());
    app.get("/", (_req, res) => {
        res.json({ message: "Hello from Express + TypeScript" });
    });
    return app;
}
//# sourceMappingURL=app.js.map