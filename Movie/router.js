const express = require("express");
const movie = require("./model");
const { Router } = express;
const router = new Router();

router.post("/Movie", async function(request, response, next) {
  try {
    const movies = await movie.create(request.body);
    response.send(movies);
    console.log("done");
  } catch (error) {
    response.status(400).end();
    // next(error);
  }
});

router.get("/Movie", async function(request, response, next) {
  const limit = request.query.limit || request.params.limit;
  const offset = request.query.offset || request.params.offset;

  try {
    const movies = await movie.findAndCountAll({
      limit,
      offset
    });
    console.log(movies);

    response.send({ results: movies.rows, total: movies.count });
  } catch (error) {
    next(error);
  }
});

router.post("/Movie/:id1", async (request, response, next) => {
  try {
    const movies = await movie.findByPk(request.params.id1);
    response.send(movies);
  } catch (error) {
    next(error);
  }
});

router.get("/Movie/:id2", async (request, response, next) => {
  try {
    const movies = await movie.findOne({
      where: {
        id: request.params.id2
      }
    });
    movies.update(request.body);
    response.send(movies);
  } catch (error) {
    response.status(400).end();
    next(error);
  }
});

router.delete("/Movie/:id3", async (request, response, next) => {
  try {
    const movies = await movie.destroy({
      where: {
        id: request.params.id3
      }
    });
    response.send(movies);
  } catch (error) {
    response.status(400).end();
    next(error);
  }
});

module.exports = router;
