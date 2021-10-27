const SearchField = ({ currentUser, onChange, usersList }) => {
    return (
        <select
            onChange={(e) => onChange(e.target.value)}
            value={currentUser}
        >
            <option value="" disabled selected>Select user</option>
            {usersList?.map((item, index) => {
                return (
                    <option key={index} value={item}>
                        {item.toUpperCase()}
                    </option>
                );
            })}
        </select>
    )
}

export default SearchField
