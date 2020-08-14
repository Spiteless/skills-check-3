const bcrypt = require('bcrypt');

module.exports = {
    searchPosts: async (req, res) => {
        const { userposts, search } = req.query;
        const db = req.app.get("db");
        const allPosts = await db.get_posts();
        let filtered = []
    
        if (userposts === "true" && search) {
          filtered = allPosts.filter((e, i) => {
            if (e.title.includes(search)) return true;
          });
        } else if (userposts === "false" && search) {
          filtered = allPosts.filter((e, i) => {
            if (e.author_id !== req.session.id && e.title.includes(search))
              return true;
          });
        } else if (userposts === "true" && !search) {
          filtered = allPosts;
        } else {
          filtered = allPosts.filter((e, i) => {
            if (e.author_id !== req.session.userId) return true;
          });
        }
        res.status(200).send(filtered);
      },
      getPost: async (req, res) => {
        const { id } = req.params;
        const db = req.app.get("db");
        let post = await db.get_post(+id);
        post = post[0];
        res.status(200).send(post);
      },
      addPost: (req, res) => {
        console.log(req.body)
        const { title, image, content } = req.body;
        const db = req.app.get("db");
        db.create_post([title, image, content, req.session.userId]);
        res.sendStatus(200);
      }
}