import plotly.express as px
import streamlit as st

from plotly1 import plotly_events

df = px.data.iris()
fig = px.scatter(df, x="sepal_width", y="sepal_length", title="Sample Figure")
#data = fig.to_json()

value = plotly_events(fig)
st.write("Received", value)