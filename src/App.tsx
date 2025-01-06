import { useCallback, useState, useActionState } from "react";
import { useDropzone } from "react-dropzone";

import mockUploadImage, { initialStateType } from "./utils/mockUploadImage";
import "./App.css";
import SubmitButton from "./components/SubmitButton";
import CommentsSection from "./components/CommentsSection";

const initialState: initialStateType = {
  success: false,
  result: null,
  error: null,
};

function App() {
  const [file, setFile] = useState<File>();
  const [{ error, success }, formAction] = useActionState(
    mockUploadImage,
    initialState
  );

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length) {
      const file = acceptedFiles[0];

      setFile(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/png": [".png"], "image/jpeg": [".jpeg"] },
  });

  const renderDropzoneContent = () => {
    if (file) {
      return <p>{file.name}</p>;
    }

    return (
      <p className="drop-title">
        {isDragActive ? "Suelta aqui" : "Arrastra aqui tus archivos"}
      </p>
    );
  };

  /*return (
    <form className="container" action={formAction}>
      <h2 className="title"> Administrador de archivos</h2>
      <div className="input-area" {...getRootProps()}>
        <input {...getInputProps()} name="file" />
        {renderDropzoneContent()}
        {!success && !!error && <p className="error">{error}</p>}
      </div>
      {!!file && <SubmitButton />}
    </form>
  );*/

  return <CommentsSection />;
}

export default App;
