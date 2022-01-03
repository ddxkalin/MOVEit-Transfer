import ReactDOM from "react-dom";
import UploadForm from "./UploadForm";
import LoginForm from "./LoginForm";
import useToken from "./hooks/useToken";

function App() {
  const { authToken, setToken } = useToken();
  return (
    <>
      {!authToken && <LoginForm setToken={setToken} />}
      {authToken && <UploadForm />}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
