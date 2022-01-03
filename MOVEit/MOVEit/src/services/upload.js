const uploadFile = (authToken, folderID, fileData) => {
  let myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${authToken}`)
  myHeaders.append("Content-Type", "multipart/form-data");

  let formdata = new FormData();
  formdata.append("file", fileData);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return fetch(`https://mobile-1.moveitcloud.com/api/v1/folders/${folderID}/files`, requestOptions);
};

export { uploadFile };
