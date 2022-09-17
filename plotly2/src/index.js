import { Streamlit } from "streamlit-component-lib";
import Plotly from "plotly.js-dist-min";

const myPlot = document.body.appendChild(document.createElement("div"));

const onRender = (event) => {
    const data = event.detail;

    const spec = JSON.parse(data.args.spec)
    console.log(spec)

    Plotly.newPlot(myPlot, spec);
            
    myPlot.on("plotly_click", (data) => {
        var pts = '';
        for(var i=0; i < data.points.length; i++){
            pts = 'x = '+data.points[i].x +'\ny = '+
                data.points[i].y.toPrecision(4) + '\n\n';
        }
        Streamlit.setComponentValue(pts);
    })

    Streamlit.setFrameHeight();
}

Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onRender);
Streamlit.setComponentReady();
