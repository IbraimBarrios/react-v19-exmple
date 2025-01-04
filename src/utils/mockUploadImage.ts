const uploadImage = async (
  previousState: { success: boolean; result: Record<string, string> },
  fromData: FormData
) => {
  const image = fromData.get("file");
  console.log(image);

  const result = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        url: "https://via.placeholder.com/150",
        name: "image-05",
      });
    });
  });

  return { success: true, result };
};

export default uploadImage;
