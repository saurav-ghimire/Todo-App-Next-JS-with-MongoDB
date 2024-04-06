// models/Todo.js
const mongoose = require('mongoose');

// Define the Todo schema
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

// Create the Todo model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
