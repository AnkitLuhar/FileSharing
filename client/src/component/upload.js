import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { uploadFile } from "../service/api";

const Upload = () => {
  const [file, setFile] = useState("");
  const [result, SetResult] = useState("");
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
        SetResult(response.path);
      }
    };
    getImage();
  }, [file]);
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  console.log(file);
  return (
    <div>
      <div className="py-24 flex flex-col items-center">
        <Button
          size="large"
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          onChange={(e) => setFile(e.target.files[0])}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
        <div>
          <div className="py-6 bg- text-slate-200 hover:text-red-800">
            <a href={result}>{result}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
