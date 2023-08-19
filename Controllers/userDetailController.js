import badRequest from "../error/badRequest.js";
import userDetail from "../model/userDetailSchema.js";
const getUserDetail = async (req, res, next) => {
  try {
    const data = await userDetail.find({ _id: req.params.id });
    if (!data) throw new badRequest("User Detail Not Found");
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const postUserDetail = async (req, res, next) => {
  if (req.files) {
    var src = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
      folder: "userDetailimage",
    });
    fs.unlinkSync(req.files.image.tempFilePath);
  }
  try {
    req.body.user = req.user.payload;
    req.body.photo = src.secure_url;
    const data = await userDetail.create(req.body);
    res.status(StatusCodes.OK).json(data);
  } catch (error) {
    next(error);
  }
};

const patchUserDetail = async (req, res, next) => {
  try {
    const data = await userDetail.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!data) throw new badRequest("User not found");
    res.status(StatusCodes.OK).json({ message: "User updated successfully" });
  } catch (error) {
    next(error);
  }
};


// IF YOU WANT TO DELETE THE USER DETAIL THEN USE THIS CODE

const deleteUserDetail = async (req, res, next) => {
  try {
    const data = await userDetail.findByIdAndDelete(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!data) throw new badRequest("User not found");
    res.status(StatusCodes.OK).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export { getUserDetail, postUserDetail, patchUserDetail, deleteUserDetail };
