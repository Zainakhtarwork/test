const AddTransactions = ({ newTransaction, onChange, onClick }) => {
    return (
        <>
            <h4>Add Transactions</h4>
            <h5>
                Only Transactions between 01/01/2020 and 03/31/2020 will be added
            </h5>
            <label>Date: </label>
            <input
                type='date'
                name='date'
                value={newTransaction}
                onChange={(e) => onChange(e)}
            ></input>
            <label>Amount :</label>
            <input
                type='number'
                name='amount'
                value={newTransaction}
                onChange={(e) => onChange(e)}
            ></input>
            <button onClick={onClick}>Add Transaction</button>
        </>
    )
}

export default AddTransactions
