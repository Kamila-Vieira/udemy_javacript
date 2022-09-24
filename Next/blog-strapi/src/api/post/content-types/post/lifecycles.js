"use strict";

const axios = require("axios");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  async afterCreate(result, data) {
    axios.post("https://api.netlify.com/build_hooks/632cbff461d6f0005a2d66b9");
  },

  async afterUpdate(result, params, data) {
    axios.post("https://api.netlify.com/build_hooks/632cbff461d6f0005a2d66b9");
  },
};
