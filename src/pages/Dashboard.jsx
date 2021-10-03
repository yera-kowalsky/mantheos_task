import React from 'react';

import StatusCard from '../components/status-card/StatusCard';
import statusCards from '../assets/JsonData/status-card-data.json';

import Chart from 'react-apexcharts';

const chartOptions = {
    series: [{
        name: 'Credit',
        data: [1000,0,3000,2400,1800,4304,2200,0,6000]
    }],
    options: {
        colors: ['#44ced7', '#44ced7'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
          
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['2021-08-25', '2021-08-26', '2021-08-27', 
            '2021-08-28', '2021-08-29', '2021-08-30', '2021-08-31', '2021-09-01', 
            '2021-09-02']
        },
        legend: {
           position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const Dashboard = () => {
    return (
        <div>   
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                
                        {
                            statusCards.map((item, index) =>(
                                <div className='col-xs-9 col-4 col-sm-12 col-md-6'>                                   
                                    <StatusCard
                                        icon = {item.icon}
                                        count = {item.count}
                                        title = {item.title} 
                                    />
                                </div>
                            ))
                        }
                
                    <h2 className="credit page-header">Credit Usage</h2>
                        
                <div className="col-12">                        
                    <div className="card full-height">
                        
                        {/* chart */}
                        <Chart
                            options={chartOptions.options}
                            series= {chartOptions.series}
                           // type = 'line'
                            height= '300%'
                        />
                        
                    </div>
                    
                </div> 
            </div>                
        </div>
    )
}


export default Dashboard; 
