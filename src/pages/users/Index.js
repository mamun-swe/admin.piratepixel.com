import React, { useState, useEffect, useCallback } from "react";
import { Layout, Main } from "../../components/layout/Index";
import DataTable from "../../components/table/Index";
import Requests from "../../utils/Requests/Index";

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [header] = useState({
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await Requests.User.Index(header);
    setData(response.data);
    setLoading(false);
  }, [header]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Uploads",
      selector: (row) => row.uploads.length,
      sortable: true,
    },
  ];

  return (
    <div>
      <Layout
        page="dashboard / users list"
        message="All Users."
        container="container-fluid"
      />
      <Main>
        <div className="col-12">
          <DataTable columns={columns} data={data} loading={loading} />
        </div>
      </Main>
    </div>
  );
};

export default Index;
