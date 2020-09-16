const path = require('path')
const cc = require('change-case')
const basePath = path.join(process.cwd(),'src/pages')

module.exports = {
  params: ({args}) => {
    const name = cc.pascalCase(args.name)
    const params = {
        ...args,
        name,  
        pageDir: path.join(basePath, name),
        routesFile: path.join(basePath, 'routes.js'),
        routes: mkRoutes(args),
        exact: !!args.exact
    }

    console.log('args', params)
    return params
  }
}

const mkRoutes = ({name, route}) => {
  if (Array.isArray(route)) return JSON.stringify(route)
  if (route) return route
  return `/${cc.snakeCase(name)}`
}
