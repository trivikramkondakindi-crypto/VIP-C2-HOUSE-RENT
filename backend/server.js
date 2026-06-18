const app = require("./app");

const agreementRoutes =
require("./routes/agreementRoutes");

const recommendationRoutes =
require("./routes/recommendationRoutes");

const agentRoutes =
require("./routes/agentRoutes");

app.use("/api/agreements", agreementRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/agents", agentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});