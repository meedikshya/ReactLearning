import { useState } from "react"

export const ChangeProfile = (props) => {
const [newUser, setNewUSer] = useState("");


    return (
        <div>
        <input onChange={(event) => {
            setNewUSer(event.target.value);
        } } />
        <button onClick={() => {
            props.setUsername(newUser);
        }}>Change Username</button>
        </div>
    )
}