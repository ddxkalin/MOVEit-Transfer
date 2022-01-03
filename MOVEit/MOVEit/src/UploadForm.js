import React, { useState } from "react";
import { uploadFile } from "./services/upload.js";
import { getFoldersInfo } from "./services/foldersInfo";
import styles from "./index.css";
import useToken from "./hooks/useToken";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [folderID, setFolderID] = useState("");
  const { token } = useToken();
  
  const handleSelectFile = (ev) => {
    if (ev && ev.target && ev.target.files) {
      setFile(ev.target.files[0]);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
                    
    getFoldersInfo(token)       // Call request to get the current users Home folder ID
      .then((response) => response.json())
      .then((data) => {
        const folder = data.homeFolderID;
        setFolderID(folder);
        
        uploadFile(token, folderID, file)     // Call the upload function with given token, folderID and the file info for upload
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch(() => { });
      })
      .catch(() => { });
  };

  return (
    <h1>
      MOVEit-Mobile-1
      <h2>
        <div className="login">
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="file"
                className="fileChoseButton"
                style={styles.fileChose}
                onChange={(ev) => handleSelectFile(ev)}
              />
              <br></br>
            </label>

            <input
              type="submit"
              value="Upload"
              className="uploadButton"
              style={styles.upload}/>
          </form>
        </div>
      </h2>
    </h1>
  );
}
