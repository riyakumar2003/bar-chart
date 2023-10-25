import React from "react";
import "../styles.css";

interface BarChartProps {
  data: number[];
  labels?: string[];
}

const BarChart: React.FC<BarChartProps> = ({ data, labels }) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);

  const maxBarHeight = 0.8 * window.innerHeight;
  const minBarHeight = 0.05 * window.innerHeight;

  const numOfTicks = 7;
  const interval = maxValue / numOfTicks;

  console.log(data.length);
  return (
    <div className="chart-wrapper">
      <div
        className="chart-container"
        style={{ "--num-bars": data.length } as React.CSSProperties}
      >
        <div className="y-axis">
          {[...Array(numOfTicks)].map((_, i) => {
            const value = Math.round(i * interval);
            if (value === 0) return null;
            return (
              <div
                key={i}
                className="tick"
                style={{ bottom: `${(value / maxValue) * 100}%` }}
              >
                {value}
              </div>
            );
          })}
        </div>
        <div
          className="bars-wrapper"
          style={{ "--num-bars": data.length } as React.CSSProperties}
        >
          <div className="bar-chart">
            {data.map((value, index) => {
              const scaledValue = (value - minValue) / (maxValue - minValue);
              const barHeight =
                scaledValue * (maxBarHeight - minBarHeight) + minBarHeight;

              return (
                <div
                  key={index}
                  className="bar"
                  style={{ height: `${barHeight}px` }}
                  data-value={value}
                  title={value.toString()}
                >
                  {labels && <div className="label">{labels[index]}</div>}
                </div>
              );
            })}
          </div>
          <div className="x-axis"></div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
