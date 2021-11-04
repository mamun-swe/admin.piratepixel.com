
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ChevronLeft } from 'react-feather'
import {
    GrayButton,
    PrimaryButton
} from '../../components/button/Index'
import { Layout, Main } from '../../components/layout/Index'
import Requests from '../../utils/Requests/Index'

const Create = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setLoading] = useState(false)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Submit Form
    const onSubmit = async (data) => {
        setLoading(true)
        await Requests.Tags.Store(data, header)
        setLoading(false)
    }

    return (
        <div>
            <Layout
                page="dashboard / tag create"
                message="Make New Tag."
                container="container-fluid"
                button={
                    <div>
                        <Link to="/dashboard/tags">
                            <GrayButton type="button">
                                <ChevronLeft size={15} style={{ marginRight: 5 }} />
                                <span style={{ fontSize: 13 }}>BACK</span>
                            </GrayButton>
                        </Link>
                    </div>
                }
            />

            <Main>
                <div className="col-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">

                            {/* Title */}
                            <div className="col-12">
                                <div className="form-group mb-4">
                                    {errors.title && errors.title.message ?
                                        <p className="text-danger">{errors.title && errors.title.message}</p>
                                        : <p>Tag</p>}

                                    <input
                                        type="text"
                                        className="form-control shadow-none"
                                        placeholder="Enter title"
                                        {...register("title", {
                                            required: "Title is required"
                                        })}
                                    />
                                </div>
                            </div>

                            <div className="col-12 text-end">
                                <PrimaryButton
                                    type="submit"
                                    className="px-4"
                                    disabled={isLoading}
                                >{isLoading ? "Creating ..." : "Create"}</PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </Main>
        </div>
    );
}

export default Create;