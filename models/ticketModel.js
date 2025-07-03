const { time } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const TicketSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  seatid: {
    type: Array,
    required: true,
  },
  totalseats: {
    type: Number,
    required: true,
  },
  totalprice: {
    type: Number,
    required: true,
  },
  theatre: {
    type: String,
    required: true
  },
  time: {
    type: String,
    require: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});


module.exports = mongoose.model('Ticket', TicketSchema);
