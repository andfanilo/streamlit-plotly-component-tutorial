import { Streamlit } from "streamlit-component-lib";
import Plotly from "plotly.js-dist-min";

const myPlot = document.body.appendChild(document.createElement("div"));

const onDataFromPython = (event) => {
  const data = event.detail;

  const spec = JSON.parse(data.args.spec);
  console.log(spec);

  Plotly.newPlot(myPlot, spec);

  myPlot.on("plotly_click", (data) => {
    var x, y;
    for (var i = 0; i < data.points.length; i++) {
      x = data.points[i].x;
      y = data.points[i].y;
    }
    Streamlit.setComponentValue({
      x: x,
      y: y,
    });
  });

  Streamlit.setFrameHeight();
};

Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onDataFromPython);
Streamlit.setComponentReady();
