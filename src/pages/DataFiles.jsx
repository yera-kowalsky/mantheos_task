import React from 'react'

import Table from '../components/table/Table'

import "../assets/css/index.css";

import transactionList from '../assets/JsonData/transaction-list.json'

const transactionTableHead = [
    '',
    'transaction details',
    'order date',
    'total credits',
    'profiles found',
    'download'
]



const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.transaction_details}</td>
        <td>{item.order_date}</td>
        <td>{item.total_credits}</td>
        <td>{item.profiles_found}</td>
        <td >
        {/* <Badge type={orderStatus[item.download]} content={item.download}/> */}
        <button type="button" class="button big">{item.download}</button>
        <button type="button" class="button">{item.download_2}</button>
        </td>
        
    </tr>
)

const DataFiles = () => {
    return (
        <div>
            <h2 className="page-header">
                data files
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={transactionTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={transactionList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataFiles;
