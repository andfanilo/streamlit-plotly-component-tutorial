# Build your first Streamlit Component - Plotly clickable plot

Code sample for the Youtube tutorial.

## Prerequisites

- Python 3 + Streamlit
- For `plotly2` and `plotly3`, you'll need [npm](https://www.npmjs.com/) to download and bundle Javascript libraries

## Step 1 - Vanilla HTML/JS

In `streamlit_app.py`, uncomment `from plotly1 import plotly_events` and comment the other imports.

This example directly loads the necessary HTML/JS file, you just need to run the Streamlit app:

```sh
streamlit run streamlit_app.py
```

## Step 2 - Vanilla HTML/JS, Parcel for dependencies, serving & bundling

In `streamlit_app.py`, uncomment `from plotly2 import plotly_events` and comment the other imports.

The source HTML/JS files reside in `plotly2/frontend/src` and need to be served by Parcel.

### Method 1 - serve HTML/CSS through Parcel

In a terminal:

```sh
cd plotly2/frontend
npm run dev
```

You should see Parcel running with the mention `Server running at http://localhost:1234`.

In another terminal, run your Streamlit app:

```sh
streamlit run streamlit_app.py
```

### Method 2 - bundle HTML/CSS first with Parcel

In a terminal:

```sh
cd plotly2/frontend
npm run build
```

You should see a new `frontend/build` folder containing a single `index.html` and `index.hash.js`

In `streamlit_app.py`, change `_USE_WEB_DEV_SERVER` to `False`. Now your Streamlit app will load the built files instead of hitting a dev web server.

In another terminal, run your Streamlit app:

```sh
streamlit run streamlit_app.py
```

## Step 3 - React JS template

In `streamlit_app.py`, uncomment `from plotly3 import plotly_events` and comment the other imports.

The source HTML/JS files reside in `plotly3/frontend/src` and need to be served by Webpack.

### Method 1 - serve HTML/CSS through Parcel

In a terminal:

```sh
cd plotly3/frontend
npm run start
```

You should see Webpack running with the mention `You can now view streamlit_component_template in the browser. Local: http://localhost:3001`.

In another terminal, run your Streamlit app:

```sh
streamlit run streamlit_app.py
```

### Method 2 - bundle HTML/CSS first with Parcel

In a terminal:

```sh
cd plotly3/frontend
npm run build
```

You should see a new `frontend/build` folder containing a single `index.html` and other asset files.

In `streamlit_app.py`, change `_USE_WEB_DEV_SERVER` to `False`. Now your Streamlit app will load the built files instead of hitting a dev web server.

In another terminal, run your Streamlit app:

```sh
streamlit run streamlit_app.py
```
