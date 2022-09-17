// The `Streamlit` object exists because our html file includes
// `streamlit-component-lib.js`.
// If you get an error about "Streamlit" not being defined, that
// means you're missing that file.

/**
 * The component's render function. This will be called immediately after
 * the component is initially loaded, and then again every time the
 * component gets new data from Python.
 */
function onDataFromPython(event) {
  var myPlot = document.getElementById("plot");

  const data = event.detail;

  spec = JSON.parse(data.args.spec);
  console.log(spec);

  /*Plotly.newPlot(plot, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }],
        { margin: { t: 0 } }
    );*/
  Plotly.newPlot(myPlot, spec);

  // on event, return data to Python
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

  // Render iframe with the plot height
  Streamlit.setFrameHeight(document.documentElement.clientHeight);
}

// Render the component whenever python send a "render event"
Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onDataFromPython);
// Tell Streamlit that the component is ready to receive events
Streamlit.setComponentReady();
