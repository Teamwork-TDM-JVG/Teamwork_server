const mongoose = require('mongoose');

  const { Schema } = mongoose;

  const projectIdeaSchema = new Schema({
    title:  {
      type: String
    },
    description: {
      type: String
    },
    team:  {
      type: [String]
    },
  }, {
    collection: "projectIdea"
  });

  
module.exports = mongoose.model("projectIdea", projectIdeaSchema);