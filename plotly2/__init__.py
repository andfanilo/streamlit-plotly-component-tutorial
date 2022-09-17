import os
import streamlit.components.v1 as components

from plotly.graph_objects import Figure

_USE_WEB_DEV_SERVER = True

if _USE_WEB_DEV_SERVER:
    _component_func = components.declare_component(
        "plotly2", url="http://localhost:1234"
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("plotly2", path=build_dir)


def plotly_events(fig: Figure):
    spec = fig.to_json()
    component_value = _component_func(spec=spec, default=None)
    return component_value
