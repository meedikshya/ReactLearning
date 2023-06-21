import { useState } from "react"
import { useContext } from "react";
import { AppContext } from "./App";

export const ChangeProfile = () => {
const { setUsername } = useContext(AppContext);

    const [newUserName, setNewUserName] = useState("");
    return (
        <div>
            <input onChange = {(event) => {
                setNewUserName(event.target.value);
            }}  />
            <button onClick={() =>
             {
                setUsername(newUserName);
            } }> Change USername </button>
        </div>
    )
}