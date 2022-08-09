import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: 0,
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: 1,
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: 2,
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: 3,
        uv: 2780,
        pv: 3908,
        amt: 2000
    }
];

export default function App() {
    return (
        <Box
            component="form"
            className="box question"
            noValidate
            autoComplete="off"
            sx={{ paddingBottom: "10px" }}
        >
            <Stack 
                sx={{ display: 'flex'}}>
                <p className='DescripcionPregunta'>Probabilidad de que noelio pase Desarrollo</p>
                <BarChart
                    className='charts'
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="band" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
                </BarChart>
            </Stack>
        </Box>
    );
}