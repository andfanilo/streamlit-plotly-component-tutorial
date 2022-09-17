// Borrowed from https://github.com/blackary/cookiecutter-streamlit-component/blob/main/%7B%7B%20cookiecutter.package_name%20%7D%7D/src/%7B%7B%20cookiecutter.import_name%20%7D%7D/frontend/streamlit-component-lib.js
function sendMessageToStreamlitClient(type, data) {
  console.log(type, data);
  const outData = Object.assign(
    {
      isStreamlitMessage: true,
      type: type,
    },
    data
  );
  window.parent.postMessage(outData, "*");
}

const Streamlit = {
  setComponentReady: function () {
    sendMessageToStreamlitClient("streamlit:componentReady", { apiVersion: 1 });
  },
  setFrameHeight: function (height) {
    sendMessageToStreamlitClient("streamlit:setFrameHeight", {
      height: height,
    });
  },
  setComponentValue: function (value) {
    sendMessageToStreamlitClient("streamlit:setComponentValue", {
      value: value,
    });
  },

  RENDER_EVENT: "streamlit:render",
  events: {
    addEventListener: function (type, callback) {
      window.addEventListener("message", function (event) {
        if (event.data.type === type) {
          event.detail = event.data;
          callback(event);
        }
      });
    },
  },
};
