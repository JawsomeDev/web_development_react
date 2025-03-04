import AuthContext from "./AuthContext";
import { useContext } from "react";

function MyComponent(){
  const authContext = useContext(AuthContext)

  return (
    <>
      Welcome {authContext}
    </>
  )
}

export default MyComponent;