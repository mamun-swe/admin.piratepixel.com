import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ChevronLeft } from "react-feather";
import { GrayButton, PrimaryButton } from "../../components/button/Index";
import { Layout, Main } from "../../components/layout/Index";
import { Loader } from "../../components/loader/Index";

import Requests from "../../utils/Requests/Index";

const Edit = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isUpdate, setUpdate] = useState(false);
  const [header] = useState({
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });

  const fetchData = useCallback(async () => {
    const response = await Requests.Category.Show(id, header);

    setData(response.data);
    setLoading(false);
  }, [id, header]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Handle form submission
  const onSubmit = async (data) => {
    setUpdate(true);
    const formData = new FormData();
    formData.append("name", data.name);

    await Requests.Category.Update(id, formData, header);
    setUpdate(false);
  };

  if (loading) return <Loader />;

  return (
    <div>
      <Layout
        page="dashboard / category store"
        message={`Edit ${data.name} category.`}
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
              {errors.name && errors.name.message ? (
                <p className="text-danger">
                  {errors.name && errors.name.message}
                </p>
              ) : (
                <p>Category name</p>
              )}

              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Enter category name"
                defaultValue={data.name}
                {...register("name", { required: "Category name is required" })}
              />
            </div>

            <div className="text-end">
              <PrimaryButton type="submit" disabled={isUpdate} className="px-4">
                {isUpdate ? "Updating ..." : "Update"}
              </PrimaryButton>
            </div>
          </form>
        </div>
      </Main>
    </div>
  );
};

export default Edit;
