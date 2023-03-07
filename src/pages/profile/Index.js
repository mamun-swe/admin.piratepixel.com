import React, { useState, useEffect, useCallback } from "react";
import "./style.css";
import { Layout, Main } from "../../components/layout/Index";
import { Loader } from "../../components/loader/Index";
import { Images } from "../../utils/Images";
import Requests from "../../utils/Requests/Index";

const Index = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [header] = useState({
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });

  // fetch data
  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await Requests.Profile.MyProfile(header);
    if (response.status && response.data) {
      setData(response.data);
    }
    setLoading(false);
  }, [header]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loader />;

  return (
    <div className="profile-container">
      <Layout
        page="dashboard / profile"
        message="Welcome to your profile."
        container="container-fluid"
      />

      <Main>
        {/* Basic info */}
        <div className="col-12 col-lg-6 m-auto mb-4 mb-lg-0">
          <div className="d-lg-flex">
            <div className="mb-4 mb-lg-0">
              <div className="img-container rounded-circle border">
                <img src={Images.Avatar} className="img-fluid" alt="..." />
              </div>
            </div>
            <div className="ps-lg-4 text-center text-lg-start">
              <h6 className="font-15 text-capitalize mb-1">
                {data.name || null}
              </h6>
              <p className="font-14 text-lowercase mb-1">
                {data.email || null}
              </p>
              <p className="font-14 mb-0">{data.phone || null}</p>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Index;
