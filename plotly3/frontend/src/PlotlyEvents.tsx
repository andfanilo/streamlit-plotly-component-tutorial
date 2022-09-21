import React, { useEffect } from "react"
import {
  withStreamlitConnection,
  Streamlit,
  ComponentProps,
} from "streamlit-component-lib"

import * as Plotly from "plotly.js"
import Plot from "react-plotly.js"

const PlotlyEvents = ({ args }: ComponentProps) => {
  useEffect(() => Streamlit.setFrameHeight())

  const handleClick = (eventData: Plotly.PlotMouseEvent) => {
    const clickedPoints = eventData.points.map((p: Plotly.PlotDatum) => {
      return { x: p.x, y: p.y }
    })
    Streamlit.setComponentValue(clickedPoints)
  }

  const { data, layout, frames, config } = JSON.parse(args.spec)

  return (
    <Plot
      data={data}
      layout={layout}
      frames={frames}
      config={config}
      onClick={handleClick}
    />
  )
}

export default withStreamlitConnection(PlotlyEvents)
