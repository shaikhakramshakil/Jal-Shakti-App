"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", hmpi: 186 },
  { month: "February", hmpi: 305 },
  { month: "March", hmpi: 237 },
  { month: "April", hmpi: 73 },
  { month: "May", hmpi: 209 },
  { month: "June", hmpi: 214 },
]

const chartConfig = {
  hmpi: {
    label: "HMPI",
    color: "hsl(var(--chart-1))",
  },
}

export function HmpiTrendChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillHmpi" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-hmpi)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-hmpi)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="hmpi"
          type="natural"
          fill="url(#fillHmpi)"
          fillOpacity={0.4}
          stroke="var(--color-hmpi)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  )
}
