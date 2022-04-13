const config = require('../config');

const { pagination, sort, populate } = config;

function paginationParams({
  limit = pagination.limit,
  page = pagination.page,
  skip,
}) {
  return {
    limit: parseInt(limit, 10),
    page: skip ? 0 : parseInt(page, 10),
    skip: skip ? parseInt(skip, 10) : (page - 1) * limit,
  };
}

function sortParams(
  { sortBy = sort.sortBy.default, direction = sort.direction.default },
  fields,
) {
  const allowList = {
    sortBy: [...sort.sortBy.fields, ...Object.getOwnPropertyNames(fields)],
    direction: sort.direction.options,
  };
  return {
    sortBy: allowList.sortBy.includes(sortBy) ? sortBy : sort.sortBy.default,
    direction: allowList.direction.includes(direction)
      ? direction
      : sort.direction.default,
  };
}

function populateToObject(populateNames, virtuals = {}) {
  const virtualNames = Object.getOwnPropertyNames(virtuals);
  return populateNames.map((item) => {
    let options = {};
    if (virtualNames.includes(item)) {
      options = {
        limit: populate.limit,
        sort: {
          [populate.virtuals.sort]: populate.virtuals.direction,
        },
      };
    }
    return {
      path: item,
      options,
    };
  });
}

module.exports = {
  paginationParams,
  sortParams,
  populateToObject,
};
