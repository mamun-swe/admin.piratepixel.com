
import React, { useState, useEffect, useCallback } from 'react'
import { Layout, Main } from '../../components/layout/Index'
import DataTable from '../../components/table/Index'
// import Requests from '../../utils/Requests/Index'

const Index = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    // const [header] = useState({
    //     headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    // })

    const columns = [
        {
            name: 'Image',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'User',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => row.uploads,
            sortable: true,
        }
    ]

    return (
        <div>
            <Layout
                page="dashboard / upload list"
                message="All Uploads."
                container="container-fluid"
            />
            <Main>
                <div className="col-12">
                    <DataTable
                        columns={columns}
                        data={data}
                        loading={loading}
                    />
                </div>
            </Main>
        </div>
    );
};

export default Index;