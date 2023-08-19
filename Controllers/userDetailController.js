const getUserDetail = async (req, res, next) => {
  try {
    res.send("Get User Detail");
  } catch (error) {
    next(error);
  }
};

const postUserDetail = async (req, res, next) => {
  try {
    res.send("Post User Detail");
  } catch (error) {
    next(error);
  }
};

const patchUserDetail = async (req, res, next) => {
  try {
    res.send("Patch User Detail");
  } catch (error) {
    next(error);
  }
};

const deleteUserDetail = async (req, res, next) => {
  try {
    res.send("Delete User Detail");
  } catch (error) {
    next(error);
  }
};

export { getUserDetail, postUserDetail, patchUserDetail, deleteUserDetail };
