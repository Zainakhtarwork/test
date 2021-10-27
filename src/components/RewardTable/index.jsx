const RewardTable = ({ userRewards, styleName }) => {
    return (
        <table className={styleName}>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Rewards</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>First Month</td>
                    <td>{userRewards[1]['rewards']}</td>
                </tr>
                <tr>
                    <td>Second Month</td>
                    <td>{userRewards[2]['rewards']}</td>
                </tr>
                <tr>
                    <td>Third Month</td>
                    <td>{userRewards[3]['rewards']}</td>
                </tr>
                <tr>
                    <td>Total Reward</td>
                    <td>
                        {userRewards[1]['rewards'] +
                            userRewards[2]['rewards'] +
                            userRewards[3]['rewards']}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default RewardTable
