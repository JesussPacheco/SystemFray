import { useReducer } from "react";
import { UserForm } from "./assets/components/UserForm"
import { UserList } from "./assets/components/UsersList"
import { usersReducer } from "./reducers/usersReducer";
const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
    {
        id: 2,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
    {
        id: 3,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    }
];

const handleRemoveUser = (id) =>{
    console.log(id);
}

export const Usersapp = () => {

    const [users, disptach] = useReducer(usersReducer, initialUsers);


    const handleAddUser = (user) => {
        disptach({
            type: 'addUser',
            payload: user,

        })
    }
    const handleRemoveUser = (id) => {
        disptach({
            type : 'removeUser',
            payload : id
        })
    }
    return (<>
        <div className="container my-4">
            <h2>User app</h2>
            <div className="row">
                <div className="col">
                    <UserForm handleAddUser={handleAddUser}
                    >
                    </UserForm>
                </div>
                <div className="col">
                    <UserList
                     users={users}
                     handleRemoveUser = {handleRemoveUser}
                    />
                </div>
            </div>
        </div>
    </>)
}