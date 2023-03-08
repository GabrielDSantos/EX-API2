/* eslint-disable class-methods-use-this */
class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new HomeController();
