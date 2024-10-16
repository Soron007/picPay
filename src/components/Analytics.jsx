import DashboardHeader from "./DashboardHeader";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import ExpenseCard from "./ExpenseCard";
import { useEffect, useState } from "react";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Analytics = () => {
  const { pathname } = useLocation();

  const [tillNow, setTillNow] = useState([]);
  const [thisYear, setThisYear] = useState([]);
  const [thisMonth, setThisMonth] = useState([]);
  const [thisWeek, setThisWeek] = useState([]);

  const getPostsByDateRange = async () => {
    const res = await axios.get(
      import.meta.env.VITE_API_URL + "/post/getPostsByDateRange",
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        withCredentials: true,
      }
    );

    const { data } = await res.data;
    console.log(data);
    setTillNow(data.tillNow);
    setThisYear(data.thisYear);
    setThisMonth(data.thisMonth);
    setThisWeek(data.thisWeek);
  };

  useEffect(() => {
    getPostsByDateRange().then(() => {
      console.log('thisWeek:', thisWeek);
      console.log('thisMonth:', thisMonth);
      console.log('thisYear:', thisYear);
    });
  }, []);
  

  const calculateTotalForSeller = (data) => {
    const value = data.reduce((acc, current) => {
      const price = current.price || 0;
      const purchases = current.purchasedBy ? current.purchasedBy.length : 0;
      return acc + price * purchases;
    }, 0);

    return value;
  };

  const calculateTotalForBuyer = (data) => {
    return data.reduce((acc, curr) => acc + curr.price, 0);
  };
  

  return (
    <div>
      <DashboardHeader />

      <h1 className="text-2xl font-semibold mb-5 ml-8">Analytics</h1>
      <h2 className="text-xl font-semibold my-5 ml-8">
        {pathname === "/seller/profile" ? "Uploaded" : "Purchased"} This year
      </h2>

      <div className="w-[83vw] sm:w-[80vw] ml-8 p-2 bg-white rounded-2xl shadow-md flex flex-col justify-between items-center gap-5">
        <ResponsiveContainer width="100%" height={150}>
          <LineChart
            margin={{
              top: 20,
              bottom: -50,
              left: -61,
            }}
            data={thisYear}
          >
            <XAxis dataKey={"title"} hide />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>

        <p>
          Total {pathname == "/seller/profile" ? "Earned" : "Spent"} :{" "}
          {pathname == "/seller/profile"
            ? calculateTotalForSeller(thisYear)
            : calculateTotalForBuyer(thisYear)}
        </p>
      </div>

      {/* 3 expense cards here */}

      {!thisMonth?.length ? (
        <h1 className="text-2xl font-semibold my-5 ml-8">No data available</h1>
      ) : (
        <div className="flex flex-col sm:flex-row justify-between gap-2 mb-10">
          <ExpenseCard
            data={thisWeek}
            title={`${
              pathname === "/seller/profile" ? "Earned" : "Spent"
            } this week`}
            dataKey="price"
            value={
              pathname === "/seller/profile"
                ? calculateTotalForSeller(thisWeek)
                : calculateTotalForBuyer(thisWeek)
            }
          />
          <ExpenseCard
            data={thisMonth}
            title={`${
              pathname === "/seller/profile" ? "Earned" : "Spent"
            } this month`}
            dataKey="price"
            value={
              pathname === "/seller/profile"
                ? calculateTotalForSeller(thisMonth)
                : calculateTotalForBuyer(thisMonth)
            }
          />
          <ExpenseCard
            data={tillNow}
            title={`${
              pathname === "/seller/profile"
                ? "Earned"
                : "Spent"
            } till now`}
            dataKey="price"
            value={
              pathname === "/seller/profile"
                ? calculateTotalForSeller(tillNow)
                : calculateTotalForBuyer(tillNow)
            }
          />
        </div>
      )}
    </div>
  );
};

export default Analytics;
