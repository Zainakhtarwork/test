import { CalculateReward } from "../../utils";

const UserTransactionsTable = ({ userTransactions, styleName }) => {
    return (
        <table className={styleName}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Rewards</th>
                </tr>
            </thead>
            <tbody>
                {userTransactions?.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item['date']}</td>
                            <td>{item['amount']}</td>
                            <td>{CalculateReward(item['amount'])}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default UserTransactionsTable
