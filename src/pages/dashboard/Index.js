import React, { useEffect, useState, useCallback } from 'react'
import { Loader } from '../../components/loader/Index'
import { Layout, Main } from '../../components/layout/Index'
import { Container } from '../../components/container/Index'
import { Card } from '../../components/card/Index'
import Requests from '../../utils/Requests/Index'

const Index = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    const fetchData = useCallback(async () => {
        setLoading(true)
        const response = await Requests.Dashboard.Index(header)
        if (response) setData(response.data)
        setLoading(false)
    }, [header])

    useEffect(() => {
        fetchData(1)
    }, [fetchData])

    return (
        <div>
            <Layout
                page="Dashboard"
                message="Welcome to dashboard"
                container="container-fluid"
            />

            <Main>
                {loading && !Object.keys(data).length ? <Loader /> : null}

                <div className="dashboard-container col-12 mb-4">
                    <Container.Row>
                        <Container.Column className="col-12 col-sm-6 col-md-4 mb-3">
                            <Card.Simple>
                                <Card.Body className="text-center py-4">
                                    <p className="font-17 mb-0">{data.admin || 0}</p>
                                    <p className="font-17 fw-bolder mb-0">Admin</p>
                                </Card.Body>
                            </Card.Simple>
                        </Container.Column>

                        <Container.Column className="col-12 col-sm-6 col-md-4 mb-3">
                            <Card.Simple>
                                <Card.Body className="text-center py-4">
                                    <p className="font-17 mb-0">{data.users || 0}</p>
                                    <p className="font-17 fw-bolder mb-0">Users</p>
                                </Card.Body>
                            </Card.Simple>
                        </Container.Column>

                        <Container.Column className="col-12 col-sm-6 col-md-4 mb-3">
                            <Card.Simple>
                                <Card.Body className="text-center py-4">
                                    <p className="font-17 mb-0">{data.images || 0}</p>
                                    <p className="font-17 fw-bolder mb-0">Images</p>
                                </Card.Body>
                            </Card.Simple>
                        </Container.Column>

                        <Container.Column className="col-12 col-sm-6 col-md-4 mb-3">
                            <Card.Simple>
                                <Card.Body className="text-center py-4">
                                    <p className="font-17 mb-0">{data.pendingImages || 0}</p>
                                    <p className="font-17 fw-bolder mb-0">Pending</p>
                                </Card.Body>
                            </Card.Simple>
                        </Container.Column>

                        <Container.Column className="col-12 col-sm-6 col-md-4 mb-3">
                            <Card.Simple>
                                <Card.Body className="text-center py-4">
                                    <p className="font-17 mb-0">{data.approvedImages || 0}</p>
                                    <p className="font-17 fw-bolder mb-0">Approved</p>
                                </Card.Body>
                            </Card.Simple>
                        </Container.Column>

                        <Container.Column className="col-12 col-sm-6 col-md-4 mb-3">
                            <Card.Simple>
                                <Card.Body className="text-center py-4">
                                    <p className="font-17 mb-0">{data.category || 0}</p>
                                    <p className="font-17 fw-bolder mb-0">Category</p>
                                </Card.Body>
                            </Card.Simple>
                        </Container.Column>
                    </Container.Row>
                </div>
            </Main>
        </div>
    );
}

export default Index;