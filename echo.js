window.echo = function (message, namespace) {
  echo.emit(message, namespace, 'log');
};

echo.namespaces = {};

echo.emit = function (message, namespace, type) {
  if (namespace && !echo.namespaces[namespace]) {
    return;
  }

  console[type](message);
};

echo.warn = function (message, namespace) {
  echo.emit(message, namespace, 'warn');
};

echo.error = function (message, namespace) {
  echo.emit(message, namespace, 'error');
};
