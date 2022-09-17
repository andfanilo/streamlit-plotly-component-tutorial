import plotly.express as px
import streamlit as st

from plotly2 import plotly_events

df = px.data.iris()
fig = px.scatter(df, x="sepal_width", y="sepal_length", title="Sample Figure")

value = plotly_events(fig)
st.write("Received", value)
