import React from 'react'
import { LuArrowRight } from 'react-icons/lu'
import moment from 'moment'
import TransactionInfoCard from '../Cards/TransactionInfoCard'

const RecentTransactions = ({ transactions, onSeeMore }) => {
    return (
        <div className='card'>
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>Recent Transaction</h5>

                <button className='card-btn' onClick={onSeeMore}>
                    See All <LuArrowRight className='text-base' />
                </button>
            </div>

            <div className='mt-6'>
                {!transactions || transactions.length === 0 ? (
                    <p className="text-gray-500">No recent transactions available.</p>
                ) :
                    (transactions?.slice(0, 5)?.map((item) => (
                        <TransactionInfoCard
                            key={item._id}
                            title={item.type == 'expense' ? item.source : item.source}
                            icon={item.icon}
                            date={moment(item.date).format("DD MMM YYYY")}
                            amount={item.amount}
                            type={item.type}
                            hideDeleteBtn
                        />
                    )))}
            </div>
        </div>
    )
}

export default RecentTransactions
