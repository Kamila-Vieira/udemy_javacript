class HomeController {
  async index(req, res) {
    /* res.status(200).json({
      tudoCerto: true,
    }); */
    return res.json("index");
  }
}

export default new HomeController();
