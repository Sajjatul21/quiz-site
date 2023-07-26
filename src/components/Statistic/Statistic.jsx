import { useContext } from "react";
import { QuizContext } from "../../layout/Main";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const Statistic = () => {
    const data = useContext(QuizContext);
    return (
        <div className=" mt-20 flex justify-center item-center">

            <LineChart
                width={350}
                height={350}
                data={data}
                margin={{
                    top: 5,
                    right: 10,
                    left: 0,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>

        </div>
    );
};

export default Statistic; <h1>chart</h1>;