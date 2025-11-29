import { app } from "../src/app.js";

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    await app.listen({ port, host: "0.0.0.0" });
    console.log(`servidor rodandu ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();