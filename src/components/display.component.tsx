import type { DisplayProps } from "@/components/types";

export function Display({ arr, done, width = 400, height = 200 }: DisplayProps) {
  const n = arr.length;
  const maxVal = Math.max(...arr);

  const padding = 8;
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding;

  const barWidth = (innerWidth + 1) / n - 1;

  const color = done ? "green" : "steelblue";

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      style={{ border: "1px black solid"}}
    >
      <g transform={`translate(${padding}, ${padding})`}>
        {arr.map((val, i) => {
          const barHeight = (val / maxVal) * innerHeight;
          return (
            <rect
              key={i}
              x={i * barWidth + i}
              y={innerHeight - barHeight}
              width={barWidth}
              height={barHeight}
              style={{ fill: color }}
            />
          );
        })}
      </g>
    </svg>
  );
}
