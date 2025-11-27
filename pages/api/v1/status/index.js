import database from "../../../../infra/database.js";
import databese from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;");
  console.log(result.rows);
  response.status(200).json({ vamosVer: "será que é de ferro mesmo?" });
}

export default status;
