import { ChangeProfile } from "../ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Menu = () => {

  const {username, setUsername } = useContext(AppContext);
    return <div> THIS IS THE Profile PAGE  ,
     user is : {username} 
     <ChangeProfile /></div>;
  };