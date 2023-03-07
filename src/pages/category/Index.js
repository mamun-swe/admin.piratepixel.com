import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { Edit2, Plus } from "react-feather";
import { GrayButton, SuccessButton } from "../../components/button/Index";
import { Layout, Main } from "../../components/layout/Index";
import DataTable from "../../components/table/Index";
import Requests from "../../utils/Requests/Index";

const Index = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [header] = useState({
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await Requests.Category.Index(header);

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
      grow: 1,
    },
    {
      name: "Action",
      grow: 0,
      cell: (row) => (
        <div>
          <SuccessButton
            style={{ borderRadius: "50%", padding: "6px 9px", marginRight: 5 }}
            onClick={() => history.push(`/dashboard/category/${row._id}`)}
          >
            <Edit2 size={16} />
          </SuccessButton>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Layout
        page="dashboard / category list"
        message="All Categories."
        container="container-fluid"
        button={
          <div>
            <Link to="/dashboard/category/store">
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
          <DataTable columns={columns} data={data} loading={loading} />
        </div>
      </Main>
    </div>
  );
};

export default Index;
