const { revalidatePath } = require("next/cache");
("user server");

const { Post } = require("./models");
const { connectToDb } = require("./utils");

export const addPost = async (formData) => {
  const { title, description, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();

    const newPost = new Post({
      title,
      description,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db!");

    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log(`Post with ${id} was deleted!`);

    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
