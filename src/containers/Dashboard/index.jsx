import { useState } from 'react'
import { CalculateReward, names } from '../../utils'
import { AddTransactions, RewardTable, SearchField, UserTransactionsTable } from '../../components'
import "./Dashboard.css"

const Dashboard = () => {
    const [loadedData, setLoadedData] = useState(names);
    const [userRewards, setUserRewards] = useState({});
    const [userTransactions, setUserTransactions] = useState([]);
    const [users] = useState(Object.keys(names));
    const [currentUser, setCurrentUser] = useState('');
    const [newTransaction, setNewTransaction] = useState({
        date: new Date(),
        amount: 0,
    });

    const userSelect = (value) => {
        setCurrentUser(value);
        let userData = loadedData[value];

        let monthT = {
            1: {
                amounts: [],
                rewards: 0,
            },
            2: {
                amounts: [],
                rewards: 0,
            },
            3: {
                amounts: [],
                rewards: 0,
            },
        };
        for (let i = 0; i < userData.length; i++) {
            let month = new Date(userData[i]['date']);
            if (
                month.getMonth() + 1 === 1 ||
                month.getMonth() + 1 === 2 ||
                month.getMonth() + 1 === 3
            ) {
                monthT[month.getMonth() + 1]['amounts'].push(userData[i]['amount']);
            }
        }
        for (let key in monthT) {
            let total_month_rewards = 0;
            for (let i = 0; i < monthT[key]['amounts'].length; i++) {
                let price = monthT[key]['amounts'][i];

                total_month_rewards = total_month_rewards + CalculateReward(price);
            }
            monthT[key]['rewards'] = total_month_rewards;
        }
        setUserRewards({ ...monthT });
        setUserTransactions([...userData]);
    };

    const updateInput = (e) => {
        if (e.target.name === 'date')
            setNewTransaction({ ...newTransaction, ...{ date: e.target.value } });
        if (e.target.name === 'amount')
            setNewTransaction({ ...newTransaction, ...{ amount: e.target.value } });

    };

    const btnAddTransaction = () => {
        let data = { ...loadedData };
        let month = new Date(newTransaction['date']);
        if (
            month.getMonth() + 1 === 1 ||
            month.getMonth() + 1 === 2 ||
            month.getMonth() + 1 === 3
        ) {
            data[currentUser].push(newTransaction);
            setLoadedData({ ...data });
            userSelect(currentUser);
        }
        setNewTransaction({ date: new Date(), amount: 0 });
    };
    return (
        <div className='container'>
            <h2 className='align-center'>
                Retailer offers a rewards program to its customers
            </h2>
            <div className="select-user">
                <SearchField currentUser={currentUser} onChange={(urg) => userSelect(urg)} usersList={users} />
            </div>
            {Object.keys(userRewards).length > 0 && (
                <>
                    <h4>User Transactions</h4>
                    {userTransactions.length > 0 ? (
                        <UserTransactionsTable userTransactions={userTransactions} styleName="customers" />
                    ) : (
                        <h3>Sorry no entry found</h3>
                    )}
                    <AddTransactions newTransaction={newTransaction} onChange={(aug => updateInput(aug))} onClick={btnAddTransaction} />
                    <RewardTable userRewards={userRewards} styleName='customers' />
                </>
            )}
        </div>
    )
}

export default Dashboard
