import React, { useEffect } from "react"
import {
  withStreamlitConnection,
  Streamlit,
  ComponentProps,
} from "streamlit-component-lib"
import Plot from "react-plotly.js"

function PlotlyEvents(props: ComponentProps) {
  useEffect(() => Streamlit.setFrameHeight())

  const handleClick = function (eventData: any) {
    Streamlit.setComponentValue(
      eventData.points.map((p: any) => {
        return { x: p.x, y: p.y }
      })
    )
  }

  const { data, layout, frames, config } = JSON.parse(props.args.spec)

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
