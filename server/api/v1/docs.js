module.exports = {
  swagger: '2.0',
  info: {
    title: 'Favs API',
    version: '1.0.0',
  },
  paths: {
    'api/favs': {
      get: {
        description: 'get all favs',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
      post: {
        description: 'create a fav',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
    },
    '/api/favs/:id': {
      get: {
        description: 'get a single fav',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
      delete: {
        description: 'delete a fav',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
    },
    '/api/lists': {
      get: {
        description: 'get all lists',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
      post: {
        description: 'create a list',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
    },
    'api/lists/:id': {
      get: {
        description: 'get a lists',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
      put: {
        description: 'update a list',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
      delete: {
        description: 'delete a list',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
    },
    'api/user/signup': {
      post: {
        description: 'create an user',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
    },
    'api/user/login': {
      post: {
        description: 'login as an existing user',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
    },
    'api/user/:id': {
      get: {
        description: 'get an user',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
      put: {
        description: 'update an user',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
      delete: {
        description: 'delete an user',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/List',
              },
            },
          },
        },
      },
    },
  },
  definitions: {
    Fav: {
      type: 'object',
      required: ['title', 'description', 'link', 'userId', 'listId'],
      properties: {
        id: {
          type: 'string',
        },
        title: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
        link: {
          type: 'string',
        },
        userId: {
          type: 'string',
        },
        listId: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
        updatedAt: {
          type: 'string',
        },
      },
    },
    List: {
      type: 'object',
      required: ['name'],
      properties: {
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        userId: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
        updatedAt: {
          type: 'string',
        },
      },
    },
    User: {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        id: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
        createdAt: {
          type: 'string',
        },
        updatedAt: {
          type: 'string',
        },
      },
    },
  },
};
