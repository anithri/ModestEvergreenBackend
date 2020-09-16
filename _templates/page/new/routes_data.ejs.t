---
inject: true
to: <%= routesFile %>
before: add additional routes above
---
  ['<%= routes %>', <%= name %><%= exact ? ", { exact: true}" : "" %>],
