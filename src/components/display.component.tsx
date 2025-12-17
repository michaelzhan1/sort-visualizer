import type { DisplayProps } from "@/components/types";

export function Display({ arr, width = 800, height = 300 }: DisplayProps) {
  const n = arr.length;
  const maxVal = Math.max(...arr);
  const barWidth = width / n;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
    >
      {arr.map((val, i) => {
        const barHeight = (val / maxVal) * height;
        return (
          <rect
            key={i}
            x={i * barWidth}
            y={height - barHeight}
            width={barWidth}
            height={barHeight}
            style={{
              fill: "white",
              stroke: "black",
              strokeWidth: 3,
            }}
          />
        )
      })}
    </svg>
  )
}