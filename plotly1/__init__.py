from plotly.graph_objects import Figure
import streamlit.components.v1 as components

_component_func = components.declare_component(
    "plotly1",
    path="./plotly1"
)

def plotly_events(fig: Figure):
    # spec = json.dumps(fig, cls=PlotlyJSONEncoder)
    spec = fig.to_json()
    component_value = _component_func(spec = spec, default = None)
    return component_value