
import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'react-feather'
import { GrayButton } from '../../components/button/Index'
import { Layout, Main } from '../../components/layout/Index'
import DataTable from '../../components/table/Index'
import Requests from '../../utils/Requests/Index'

const Index = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    const fetchData = useCallback(async () => {
        setLoading(true)
        const response = await Requests.Tags.Index(header)
        setData(response.data)
        setLoading(false)
    }, [header])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const columns = [
        {
            name: 'Tags',
            selector: row => row.title,
            sortable: true,
        }
    ]

    return (
        <div>
            <Layout
                page="dashboard / tags"
                message="All Tags."
                container="container-fluid"
                button={
                    <div>
                        <Link to="/dashboard/tags/store">
                            <GrayButton type="button">
                                <Plus size={15} style={{ marginRight: 5 }} />
                                <span style={{ fontSize: 13 }}>ADD NEW</span>
                            </GrayButton>
                        </Link>
                    </div>
                }
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
}

export default Index;