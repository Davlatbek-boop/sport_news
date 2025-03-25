const router = require("express").Router();
const langsRoute = require("./langs.routes");
const tagsRoute = require("./tags.routes");
const categoryRoute = require("./category.routes");
const newsWithLangsRoute = require("./newsWithLangs.routes");
const usersRoute = require("./users.routes");
const newsRoute = require("./news.routes");
const mediaRoute = require("./media.routes");
const commentsRoute = require("./comments.routes");
const reportsRoute = require("./reports.routes");
const likesRoute = require("./likes.routes");
const viewsRoute = require("./views.routes");

router.use("/langs", langsRoute);
router.use("/tags", tagsRoute);
router.use("/category", categoryRoute);
router.use("/newswlangs", newsWithLangsRoute);
router.use("/users", usersRoute);
router.use("/news", newsRoute);
router.use("/media", mediaRoute);
router.use("/comments", commentsRoute);
router.use("/reports", reportsRoute);
router.use("/likes", likesRoute);
router.use("/views", viewsRoute);

module.exports = router;
