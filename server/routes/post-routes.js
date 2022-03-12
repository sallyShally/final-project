const router = require("express").Router();
const userModels = require('../models/userModels')
const user = userModels.user;

//create a post
router.put("/:id", async (req, res) => {

    await user.updateOne({ id: req.params.id }, { $push: { posts: req.body.post } });

    res.status(200).json("the post has been added");

});

//update a post
router.put("/put/:id", async (req, res) => {
    try {
        const post = await user.updateOne({ id: req.body.postInfo.userId, posts: { $elemMatch: { postId: req.params.id } } }, { $set: { "posts.$.desc": req.body.postInfo.desc } })
        console.log(req.body);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});


//delete a post
router.delete("/:id", async (req, res) => {
    try {
        console.log(req.body);
        await user.updateOne({ id: req.body.userId }, { $pull: { posts: { postId: { $eq: req.params.id } } } })

        res.status(200).json("the post has been deleted");

    } catch (err) {
        res.status(500).json(err);
    }
});


//get a post by category 
router.get("/:category", async (req, res) => {
    const result = [];
    let k = 0;

    const post = await user.find({ "posts.category": req.params.category }, { posts: 1 });

    console.log("=========================================================");
    console.log(req.params);

    for (let i = 0; i < post.length; i++) {
        for (let j = 0; j < post[i].posts.length; j++) {
            console.log("sally", req.params.category);
            if (post[i].posts[j].category === req.params.category) {
                result[k] = post[i].posts[j];
                k++;
            }

        }
    }
    console.log(result);
    res.status(200).json(post);
});





// comments requests 

//Add comment 
router.put("/AddComment/:userId/:postId", async (req, res) => {
    console.log(req.body);
    await user.updateOne({ id: req.params.userId, posts: { $elemMatch: { postId: req.params.postId } } }, { $push: { "posts.$.Comment": req.body.comment } })

    res.send("your comment is added ")
})

//delete comment 
router.delete("/DeleteComment/:userId/:postId/:commentId", async (req, res) => {
    await user.updateOne({ id: req.params.userId, posts: { $elemMatch: { postId: req.params.postId } } }, { $pull: { "posts.$.Comment": { $or: [{ commentId: { $eq: req.params.commentId } }, { secCommentId: { $eq: req.params.commentId } }] } } })

    res.send("your comment is deleted")
})
// get all comments
router.get("/getComment/:userId/:postId", async (req, res) => {
    const x = await user.find({ id: req.params.userId }, { posts: { Comment: 1, postId: 1 } })
    for (let i = 0; i < x.length; i++) {
        console.log(x);
        if (x[0].posts[i].postId === req.params.postId) {
            console.log(x[0].posts[i]);
            res.send(x[0].posts[i].Comment)
            return
        }
    }
    res.send("not found")
})


module.exports = router;