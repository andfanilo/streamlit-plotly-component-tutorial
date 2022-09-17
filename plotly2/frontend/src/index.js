import { Streamlit } from "streamlit-component-lib";
import Plotly from "plotly.js-dist-min";

const myPlot = document.body.appendChild(document.createElement("div"));

const onDataFromPython = (event) => {
  const data = event.detail;

  const spec = JSON.parse(data.args.spec);
  console.log(spec);

  Plotly.newPlot(myPlot, spec);

  // on event, return data to Python
  myPlot.on("plotly_click", (eventData) => {
    const clickedPoints = eventData.points.map((p) => {
      return { x: p.x, y: p.y };
    });
    Streamlit.setComponentValue(clickedPoints);
  });

  Streamlit.setFrameHeight();
};

Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onDataFromPython);
Streamlit.setComponentReady();
