const getFoldersInfo = (authToken) => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", `Bearer ${authToken}`)

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  
  return fetch("https://mobile-1.moveitcloud.com/api/v1/users/self", requestOptions);
};

export { getFoldersInfo };