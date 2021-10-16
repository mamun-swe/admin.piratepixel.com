
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
    const [loading, setLoading] = useState(false)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Handle form submission
    const onSubmit = async data => {
        setLoading(true)
        const formData = new FormData()
        formData.append('name', data.name)

        setLoading(true)
        await Requests.Category.Store(formData, header)
        setLoading(false)
    }

    return (
        <div>
            <Layout
                page="dashboard / category store"
                message="Create new category."
                container="container-fluid"
                button={
                    <div>
                        <Link to="/dashboard/category">
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

                        {/* Name */}
                        <div className="form-group mb-4">
                            {errors.name && errors.name.message ?
                                <p className="text-danger">{errors.name && errors.name.message}</p> :
                                <p>Category name</p>
                            }

                            <input
                                type="text"
                                className="form-control shadow-none"
                                placeholder="Enter category name"
                                {...register("name", { required: "Category name is required" })}
                            />
                        </div>

                        <div className="text-end">
                            <PrimaryButton
                                type="submit"
                                disabled={loading}
                                className="px-4"
                            >
                                {loading ? "Loading ..." : "Submit"}
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </Main>
        </div>
    );
}

export default Create;