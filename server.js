const app = require("./src/app");
const port = 1337;

app.listen(port, () => {
    console.log(`app está rodando na porta ${port}`);
});