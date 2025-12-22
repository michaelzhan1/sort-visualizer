import type { DisplayProps } from "@/components/types";
import type { Highlight } from "@/common/types";

function getHighlight(highlights: Highlight[], idx: number): string | undefined {
  return highlights.find((h) => h.idx === idx)?.color;
}

export function Display({
  step,
  done,
  width = 400,
  height = 200,
}: DisplayProps) {
  const { arr, highlights } = step;
  const n = arr.length;
  const maxVal = Math.max(...arr);

  const padding = 8;
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding;

  const barWidth = (innerWidth + 1) / n - 1;

  const bulkColor = done ? "green" : "steelblue";

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      style={{ border: "1px black solid" }}
    >
      <g transform={`translate(${padding}, ${padding})`}>
        {arr.map((val, i) => (
          <rect
            key={i}
            x={i * (barWidth + 1)}
            y={innerHeight - (val / maxVal) * innerHeight}
            width={barWidth}
            height={(val / maxVal) * innerHeight}
            style={{
              fill: getHighlight(highlights, i) ?? bulkColor,
            }}
          />
        ))}
      </g>
    </svg>
  );
}
