const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Initialize express app
const app = express();
const port = 2414;

// Middleware setup
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection (your existing connection code)
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Kagan2414:Kagan$2414@kaganserver.q4umx.mongodb.net/CodeWar', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

// MongoDB Schema (your existing schema)
const PaymentSchema = new mongoose.Schema({
    paymentId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    screenshot: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'verified', 'failed'],
        default: 'verified'
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);

// New endpoint to get all payments
app.get('/api/payments', async (req, res) => {
    try {
        // Get all payments, sorted by timestamp (newest first)
        const payments = await Payment.find({})
            .sort({ timestamp: -1 })
            .select('paymentId screenshot timestamp status');

        res.status(200).json({
            success: true,
            payments
        });
    } catch (error) {
        console.error('Error fetching payments:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching payments',
            error: error.message
        });
    }
});

// Your existing endpoints remain the same

// Serve admin page
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Start server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
        console.log(`Admin page available at http://localhost:${port}/admin`);
    });
}).catch(err => {
    console.error('Failed to start server:', err);
});