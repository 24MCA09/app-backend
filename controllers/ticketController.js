const { title } = require('process');
const Ticketmodel = require('../models/ticketModel')

const CreateTicket = async (req, res) => {
    console.log('inside ticket creating function');

    const { email, seatid, totalseats, totalprice, theatre, time, title, image } = req.body
    console.log(req.body);

    try {
        const newTickets = new Ticketmodel({
            email: email,
            seatid: seatid,
            totalseats: totalseats,
            totalprice: totalprice,
            theatre: theatre,
            time: time,
            title: title,
            image: image
        })

        await newTickets.save()
        res.status(200).json(newTickets)
        console.log('Ticket Booking sucess');
    }
    catch (err) {
        res.status(401).json(`Ticket Bokking API Failed, ERROR : ${err}`)
    }
}


const getTicketsByEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const tickets = await Ticketmodel.find({ email });

        if (tickets.length === 0) {
            return res.status(404).json({ message: 'No tickets found for this email.' });
        }

        res.status(200).json(tickets);
    } catch (err) {
        res.status(500).json({ message: `Error fetching tickets: ${err}` });
    }
};
module.exports = { CreateTicket, getTicketsByEmail };