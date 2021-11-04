
import React, { useState, useEffect, useCallback } from 'react'
import { Layout, Main } from '../../components/layout/Index'
import { SuccessButton, DangerButton } from '../../components/button/Index'
import DataTable from '../../components/table/Index'
import Requests from '../../utils/Requests/Index'

const Index = () => {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(10)
    const [totalItems, setTotalItems] = useState(0)
    const [loading, setLoading] = useState(false)
    const [isUpdating, setUpdating] = useState({ id: null, loading: false })
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Fetch data
    const fetchData = useCallback(async (page) => {
        setLoading(true)
        const response = await Requests.Uploads.Index(page, limit, header)

        if (response) {
            setData(response.data)
            setTotalItems(response.pagination ? response.pagination.items : 0)
        }

        setLoading(false)
    }, [limit, header])

    // handle pagination
    const handlePageChange = page => fetchData(page)

    // handle limit
    const handleLimitChange = async (newLimit, page) => {
        setLoading(true)
        const response = await Requests.Uploads.Index(page, newLimit, header)

        setData(response.data)
        setLimit(newLimit)
        setLoading(false)
    }

    useEffect(() => {
        fetchData(1)
    }, [header, fetchData])

    // handle update
    const handleUpdate = async (id) => {
        setUpdating({ id, loading: true })
        await Requests.Uploads.Update(id, header)
        fetchData(1)
        setUpdating({ id: null, loading: false })
    }

    const columns = [
        {
            name: 'Image',
            minWidth: "150px",
            cell: row => <img src={row.image} height={50} alt="..." />
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: 'Uploaded By',
            selector: row => row.uploadedBy,
            sortable: true,
        },
        {
            name: 'Action',
            minWidth: "120px",
            cell: row =>
                <div>
                    {row.isApproved ?
                        <SuccessButton
                            className="font-13"
                            disabled={isUpdating.loading}
                            onClick={() => handleUpdate(row._id)}
                        >
                            {isUpdating.id === row._id && isUpdating.loading ? "Loading..." : "Approved"}
                        </SuccessButton>
                        :
                        <DangerButton
                            className="font-13"
                            disabled={isUpdating.loading}
                            onClick={() => handleUpdate(row._id)}
                        >
                            {isUpdating.id === row._id && isUpdating.loading ? "Loading..." : "Pending"}
                        </DangerButton>
                    }
                </div>
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
                        totalRows={totalItems}
                        pagination={true}
                        paginationServer={true}
                        handlePerRowsChange={handleLimitChange}
                        handlePageChange={handlePageChange}
                    />
                </div>
            </Main>
        </div>
    );
};

export default Index;