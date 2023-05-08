const app = require();

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});