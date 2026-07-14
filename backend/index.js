const cors = require('cors');
app.use(cors());

const app = express();
app.use(cors());
app.use(express.json());

app.post("/get-solution", (req, res) => {
  const { query } = req.body;

  let answer = "Restart your laptop.";

  if (query.toLowerCase().includes("slow")) {
    answer = "Close background apps and clean storage.";
  } else if (query.toLowerCase().includes("wifi")) {
    answer = "Restart router and check drivers.";
  }

  res.json({ answer });
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});