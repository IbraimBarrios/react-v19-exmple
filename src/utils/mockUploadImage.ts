const uploadImage = async (file: File) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        url: "https://via.placeholder.com/150",
        name: file.name,
      });
    });
  });
};

export default uploadImage;
