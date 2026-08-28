// The home-page system map. Each node is a real destination on the site,
// drawn as a service in an architecture diagram. Coordinates are in the
// SVG viewBox space (0 0 960 520).

export const mapNodes = [
  {
    id: 'client',
    name: 'client',
    to: 'about',
    endpoint: 'GET /about',
    x: 150,
    y: 90,
  },
  {
    id: 'api-gateway',
    name: 'api-gateway',
    to: 'projects',
    endpoint: 'GET /projects',
    x: 480,
    y: 90,
    primary: true,
  },
  {
    id: 'auth-service',
    name: 'auth-service',
    to: 'contact',
    endpoint: 'POST /contact',
    x: 800,
    y: 90,
  },
  {
    id: 'ticket-service',
    name: 'ticket-service',
    to: 'projects',
    endpoint: 'GET /projects/ticket-management-system',
    x: 300,
    y: 270,
  },
  {
    id: 'ai-service',
    name: 'ai-service',
    to: 'skills',
    endpoint: 'GET /skills',
    x: 660,
    y: 270,
  },
  {
    id: 'datastore',
    name: 'datastore',
    to: 'skills',
    endpoint: 'GET /skills/data',
    x: 480,
    y: 440,
  },
]

// [from, to] — drawn as connecting paths; animated packets travel along them.
export const mapEdges = [
  ['client', 'api-gateway'],
  ['api-gateway', 'auth-service'],
  ['api-gateway', 'ticket-service'],
  ['api-gateway', 'ai-service'],
  ['ticket-service', 'datastore'],
  ['ai-service', 'datastore'],
]
