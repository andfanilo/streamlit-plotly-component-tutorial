from plotly.graph_objects import Figure
import streamlit.components.v1 as components

_RELEASE = False

if not _RELEASE:
    _component_func = components.declare_component(
        "plotly2",
        url="http://localhost:1234"
    )
else:
    _component_func = components.declare_component(
        "plotly2",
        path="./plotly2/build"
    )

def plotly_events(fig: Figure):
    spec = fig.to_json()
    component_value = _component_func(spec = spec, default = None)
    return component_value