window.echo = function (message, namespace) {
  if (namespace && !echo.namespaces[namespace]) {
    return;
  }

  console.log(message);
};

// TODO : DRY
echo.warn = function (message, namespace) {
  if (namespace && !echo.namespaces[namespace]) {
    return;
  }

  console.warn(message);
};

// TODO : DRY
echo.error = function (message, namespace) {
  if (namespace && !echo.namespaces[namespace]) {
    return;
  }

  console.error(message);
};
