function status(request, response) {
  response.status(200).json({ vamosVer: "será que é de ferro mesmo?" });
}

export default status;
