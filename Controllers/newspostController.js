import newspost from "../model/newspostSchema.js";
import badRequest from "../error/badRequest.js";

const getallNewsPosts = async (req, res, next) => {
  try {
    const data = await newspost.find();
    if (!data) throw new badRequest("No data found");
    res.status(200).json({ success: true, msg: "Show all news posts" });
  } catch (error) {
    next(error);
  }
};

const getNewsPost = async (req, res, next) => {
  try {
    const data = await newspost.find({ user: req.params.id });
    if (!data) throw new badRequest("No data found");
    res.status(200).json({ success: true, msg: "Show all news posts" });
  } catch (error) {
    next(error);
  }
};

const createNewsPost = async (req, res, next) => {
  if (req.files) {
    var src = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
      folder: "Newspostimage",
    });
    fs.unlinkSync(req.files.image.tempFilePath);
  }
  try {
    req.body.user = req.user.payload;
    req.body.image = src.secure_url;
    const data = await newspost.create(req.body);
    res.status(StatusCodes.OK).json(data);
  } catch (error) {
    next(error);
  }
};

const updateNewsPost = async (req, res, next) => {
  try {
    const data = await newspost.findByIdAndUpdate(
      { _id: req.params.post },
      req.body,
      { new: true }
    );
    if (!data) throw new badRequest("User not found");
    res.status(StatusCodes.OK).json({ message: "User updated successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteNewsPost = async (req, res, next) => {
  try {
    const data = await userDetail.findByIdAndDelete(
      { _id: req.params.post },
      req.body,
      { new: true }
    );
    if (!data) throw new badRequest("User not found");
    res.status(StatusCodes.OK).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export {
  getallNewsPosts,
  getNewsPost,
  createNewsPost,
  updateNewsPost,
  deleteNewsPost,
};
