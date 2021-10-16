// import React, { useEffect, useState, useCallback } from 'react'
import React from 'react'
import './style.scss'
// import { Loader } from '../../components/loader/Index'
import { Layout, Main } from '../../components/layout/Index'
import { DollarSign, ShoppingBag, ShoppingCart, Users } from 'react-feather'
// import Requests from '../../utils/Requests/Index'

const Index = () => {
    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [header] = useState({
    //     headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    // })

    // const fetchData = useCallback(async () => {
    //     setLoading(true)
    //     const response = await Requests.Dashboard.Index(header)
    //     if (response) setData(response)
    //     setLoading(false)
    // }, [header])

    // useEffect(() => {
    //     fetchData(1)
    // }, [fetchData])

    // if (loading) return <Loader />

    return (
        <div>
            <Layout
                page="Dashboard"
                message="Welcome to dashboard"
                container="container-fluid"
            />

            <Main>
                <div className="dashboard-container col-12 mb-4">
                    <div className="row">

                        {/* Earning container */}
                        <div className="col-12 col-lg-4 col-xl-3">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h5>Earnings</h5>
                                    <p>Total Earnings of the Month</p>
                                    <h4 className="mb-0">Tk. 43,567.53</h4>
                                </div>
                            </div>
                        </div>

                        {/* Overview container */}
                        <div className="col-12 col-lg-8 col-xl-9">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h5>Overview</h5>
                                    <p className="mb-4">All Earning Overview</p>

                                    <div className="row">

                                        {/* Total Sale */}
                                        <div className="col-6 col-md-3 col-lg-6 col-xl-3 mb-5 mb-xl-0">
                                            <div className="d-flex">
                                                <div className="icon-container flex-center flex-coulmn">
                                                    <ShoppingBag size={20} color="#063cdd" />
                                                </div>
                                                <div className="ps-2">
                                                    <p className="text-muted mb-1">Total Sale</p>
                                                    <h6 className="mb-0">Tk. 43,567.53</h6>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Net Profit */}
                                        <div className="col-6 col-md-3 col-lg-6 col-xl-3 mb-5 mb-xl-0">
                                            <div className="d-flex">
                                                <div className="icon-container flex-center flex-coulmn">
                                                    <DollarSign size={20} color="#063cdd" />
                                                </div>
                                                <div className="ps-2">
                                                    <p className="text-muted mb-1">Net Profit</p>
                                                    <h6 className="mb-0">Tk. 43,567.53</h6>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Total Order */}
                                        <div className="col-6 col-md-3 col-lg-6 col-xl-3 mb-5 mb-xl-0">
                                            <div className="d-flex">
                                                <div className="icon-container flex-center flex-coulmn">
                                                    <ShoppingCart size={20} color="#063cdd" />
                                                </div>
                                                <div className="ps-2">
                                                    <p className="text-muted mb-1">Total Order</p>
                                                    <h6 className="mb-0">43,532</h6>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Customers */}
                                        <div className="col-6 col-md-3 col-lg-6 col-xl-3 mb-5 mb-xl-0">
                                            <div className="d-flex">
                                                <div className="icon-container flex-center flex-coulmn">
                                                    <Users size={20} color="#063cdd" />
                                                </div>
                                                <div className="ps-2">
                                                    <p className="text-muted mb-1">Customers</p>
                                                    <h6 className="mb-0">43,567</h6>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </div>
    );
}

export default Index;