import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending, data, method, action } = useFormStatus();

  console.log(data, method, action);
  return (
    <button className="upload-btn">{pending ? "Subiendo..." : "Subir"}</button>
  );
};

export default SubmitButton;
