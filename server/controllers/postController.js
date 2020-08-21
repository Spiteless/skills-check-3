const bcrypt = require('bcrypt');

module.exports = {
    searchPosts: async (req, res) => {
        const { userposts, search } = req.query;
        const db = req.app.get("db");
        const allPosts = await db.get_all_posts();
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
        console.log(`getPosts( id=${id}`)
        const db = req.app.get("db");
        let post = await db.get_post(+id);
        post = post[0];
        res.status(200).send(post);
        console.log('getPost', post)
      },
      getAllPosts: async (req, res) => {
        const db = req.app.get("db");
        let posts = await db.get_all_posts();
        res.status(200).send(posts);
        console.log('getAllPosts', posts)
      },
      addPost: (req, res) => {
        const { title, image, content, userId } = req.body;
        // const { userId } = req.session.userId

        console.log("New post:",title, image, content, userId)
        const db = req.app.get("db");
        db.create_post([title, image, content, userId]);
        res.sendStatus(200);
      }
}