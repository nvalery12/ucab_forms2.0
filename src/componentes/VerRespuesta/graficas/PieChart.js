import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

class PieRechartComponent extends React.Component {
  COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  pieChart = this.props.pieData;
  CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc"
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };
  render() {
    
    return (
      
      <Box
        component="form"
        className="box question"
        noValidate
        autoComplete="off"
        sx={{ paddingBottom: "10px" }}
      >

        <Stack sx={{ display: 'flex' }}>
          <p className='DescripcionPregunta'>Grafico de barras ejemplo</p>


          {/*console.log(pieChart)*/}
          <PieChart
            className='charts'
            width={730}
            height={300}
          >
            <Pie
              data={this.pieChart}
              color="#000000"
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
            >
              {this.pieChart.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={this.COLORS[index % this.COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<this.CustomTooltip />} />
            <Legend />
          </PieChart>
        </Stack>
      </Box>
    );
  }
};

export default PieRechartComponent;