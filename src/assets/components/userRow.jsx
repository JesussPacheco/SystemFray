// eslint-disable-next-line react/prop-types
export const UserRow = ({handleRemoveUser, id, username, email }) => {

const onRemoveUser = (id)=> {
    handleRemoveUser(id);  
}
    return (<>
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button type="button"
                    className="btn btn-secondary btn-sm"
                >Update</button>
            </td>
            <td>
                <td>
                    <button type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => onRemoveUser(id)}
                    >remove</button>
                </td>
            </td>
        </tr>

    </>)



}