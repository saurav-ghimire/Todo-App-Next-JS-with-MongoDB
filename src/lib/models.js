// models/Todo.js

const mongoose = require('mongoose');

let Todo;

try {
  Todo = mongoose.model('Todo');
} catch {
  const todoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Completed'],
      default: 'Pending',
    },
  }, {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  });

  Todo = mongoose.model('Todo', todoSchema);
}

module.exports = Todo;
