const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 2414;

// Middleware setup - Order is important here
app.use(express.json({ 
    limit: '50mb',  // Increased limit for base64 images
    verify: (req, res, buf, encoding) => {
        try {
            JSON.parse(buf);
        } catch (e) {
            res.status(400).json({ 
                success: false, 
                error: 'Invalid JSON payload' 
            });
            throw new Error('Invalid JSON');
        }
    }
}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// API middleware - Apply to /api routes only
app.use('/api', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Serve static files - Apply after API middleware
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection with retry logic
const connectDB = async (retries = 5) => {
    try {
        await mongoose.connect('mongodb+srv://Kagan2414:Kagan$2414@kaganserver.q4umx.mongodb.net/CodeWar', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        if (retries > 0) {
            console.log(`Retrying connection... (${retries} attempts remaining)`);
            setTimeout(() => connectDB(retries - 1), 5000);
        } else {
            process.exit(1);
        }
    }
};

// Schema definitions
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: [3, 'Name must be at least 3 characters long']
    },
    dobDay: {
        type: Number,
        required: [true, 'Day of birth is required'],
        min: [1, 'Invalid day'],
        max: [31, 'Invalid day']
    },
    dobMonth: {
        type: Number,
        required: [true, 'Month of birth is required'],
        min: [1, 'Invalid month'],
        max: [12, 'Invalid month']
    },
    dobYear: {
        type: Number,
        required: [true, 'Year of birth is required'],
        min: [1900, 'Invalid year'],
        max: [new Date().getFullYear(), 'Invalid year']
    },
    rollNumber: {
        type: String,
        required: [true, 'Roll number is required'],
        unique: true,
        trim: true,
        maxlength: [20, 'Roll number cannot exceed 20 characters']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^\d{10,15}$/, 'Please enter a valid phone number between 10 to 15 digits']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,'Please enter a valid email']
    },
    branch: {
        type: String,
        required: [true, 'Branch is required'],
        trim: true
    },
    college: {
        type: String,
        required: [true, 'School name is required'],
        trim: true
    },
    registrationType: {
        type: String,
        enum: ['individual', 'team'],
        required: true
    },
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: function() {
            return this.registrationType === 'team';
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const teamSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const paymentSchema = new mongoose.Schema({
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
        default: 'pending'
    }
});

// Create models
const Person = mongoose.model('Person', personSchema);
const Team = mongoose.model('Team', teamSchema);
const Payment = mongoose.model('Payment', paymentSchema);

// Routes
// Static file routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'code.html')); 
});

app.get('/code', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'code.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

// API Routes
// Registration routes
app.post('/api/register/individual', async (req, res) => {
    try {
        const {
            name, dobDay, dobMonth, dobYear,
            rollNumber, phone, email, branch, college
        } = req.body;

        // Validation checks
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Request body is empty'
            });
        }

        if (!name || !dobDay || !dobMonth || !dobYear || 
            !rollNumber || !phone || !email || !branch || !college) {
            return res.status(400).json({ 
                success: false,
                error: 'All fields are required' 
            });
        }

        const dob = new Date(dobYear, dobMonth - 1, dobDay);
        if (dob > new Date() || dob.getFullYear() < 1900) {
            return res.status(400).json({
                success: false,
                error: 'Invalid date of birth'
            });
        }

        const existingPerson = await Person.findOne({
            $or: [{ rollNumber }, { email }]
        });

        if (existingPerson) {
            return res.status(400).json({
                success: false,
                error: 'A person with this roll number or email already exists'
            });
        }

        const newPerson = new Person({
            name,
            dobDay,
            dobMonth,
            dobYear,
            rollNumber,
            phone,
            email,
            branch,
            college,
            registrationType: 'individual'
        });

        await newPerson.save();
        
        res.status(201).json({
            success: true,
            message: 'Individual registration successful',
            person: {
                name,
                rollNumber,
                email
            }
        });

    } catch (err) {
        handleError(err, res);
    }
});

// Team registration route
app.post('/api/register/team', async (req, res) => {
    try {
        const { members } = req.body;

        // Validation checks
        if (!members || members.length < 2 || members.length > 4) {
            return res.status(400).json({
                success: false,
                error: 'Team must have between 2 and 4 members'
            });
        }

        const emails = members.map(m => m.email);
        const rollNumbers = members.map(m => m.rollNumber);
        
        if (new Set(emails).size !== emails.length) {
            return res.status(400).json({
                success: false,
                error: 'Duplicate email addresses found in team'
            });
        }

        if (new Set(rollNumbers).size !== rollNumbers.length) {
            return res.status(400).json({
                success: false,
                error: 'Duplicate roll numbers found in team'
            });
        }

        const existingPersons = await Person.find({
            $or: [
                { email: { $in: emails } },
                { rollNumber: { $in: rollNumbers } }
            ]
        });

        if (existingPersons.length > 0) {
            return res.status(400).json({
                success: false,
                error: 'Some team members are already registered'
            });
        }

        const team = new Team();
        await team.save();

        const savedMembers = await Promise.all(
            members.map(async memberData => {
                const member = new Person({
                    ...memberData,
                    registrationType: 'team',
                    teamId: team._id
                });
                return await member.save();
            })
        );

        team.members = savedMembers.map(member => member._id);
        await team.save();

        res.status(201).json({
            success: true,
            message: 'Team registration successful',
            teamId: team._id,
            members: savedMembers.map(member => ({
                name: member.name,
                rollNumber: member.rollNumber,
                email: member.email
            }))
        });

    } catch (err) {
        handleError(err, res);
    }
});

// Payment routes
app.post('/api/save-payment', async (req, res) => {
    try {
        const { screenshot, timestamp, paymentId } = req.body;

        if (!screenshot) {
            return res.status(400).json({
                success: false,
                message: 'Payment screenshot is required'
            });
        }

        const payment = new Payment({
            paymentId,
            screenshot,
            timestamp: timestamp || new Date(),
            status: 'verified'
        });

        await payment.save();
        console.log(`Payment verified and saved: ${paymentId}`);

        res.status(200).json({
            success: true,
            message: 'Payment verified and saved successfully',
            paymentId
        });

    } catch (error) {
        handleError(error, res);
    }
});

app.get('/api/payment/:paymentId', async (req, res) => {
    try {
        const payment = await Payment.findOne({ paymentId: req.params.paymentId });
        
        if (!payment) {
            return res.status(404).json({
                success: false,
                message: 'Payment not found'
            });
        }

        res.status(200).json({
            success: true,
            payment: {
                paymentId: payment.paymentId,
                timestamp: payment.timestamp,
                status: payment.status,
                screenshot: payment.screenshot
            }
        });
    } catch (error) {
        handleError(error, res);
    }
});

// Get all registrations
app.get('/api/registrations', async (req, res) => {
    try {
        const { type } = req.query;
        let query = {};
        if (type) {
            query.registrationType = type;
        }

        const registrations = await Person.find(query)
            .populate('teamId')
            .select('-__v')
            .sort('-createdAt');

        res.json({
            success: true,
            count: registrations.length,
            data: registrations
        });
    } catch (err) {
        handleError(err, res);
    }
});

// Error handling function
const handleError = (err, res) => {
    console.error('Error:', err);
    
    res.setHeader('Content-Type', 'application/json');

    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(error => error.message);
        return res.status(400).json({
            success: false,
            error: messages.join(', ')
        });
    }

    res.status(500).json({
        success: false,
        error: 'An error occurred',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
};

// 404 handler
app.use((req, res) => {
    if (req.path.startsWith('/api')) {
        return res.status(404).json({
            success: false,
            error: 'API endpoint not found'
        });
    }
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

const { create } = require('xmlbuilder2'); // Import XML builder

// Sitemap route
app.get('/sitemap.xml', async (req, res) => {
    try {
        // Define static URLs
        const staticUrls = [
            { loc: 'https://codewar.in/', lastmod: '2025-01-24' },
            { loc: 'https://codewar.in/about', lastmod: '2025-01-20' },
            { loc: 'https://codewar.in/form', lastmod: '2025-01-19' },
            { loc: 'https://codewar.in/code', lastmod: '2025-01-17' }
        ];

        // Get dynamic URLs for individual and team registrations
        const dynamicUrls = [
            { loc: 'https://codewar.in/api/registrations?type=individual', lastmod: '2025-01-24' },
            { loc: 'https://codewar.in/api/registrations?type=team', lastmod: '2025-01-24' }
        ];

        // Create the XML structure
        const urlset = create({ version: '1.0', encoding: 'UTF-8' })
            .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

        // Add static URLs
        staticUrls.forEach(url => {
            urlset.ele('url')
                .ele('loc').txt(url.loc).up()
                .ele('lastmod').txt(url.lastmod).up();
        });

        // Add dynamic URLs (from API)
        dynamicUrls.forEach(url => {
            urlset.ele('url')
                .ele('loc').txt(url.loc).up()
                .ele('lastmod').txt(url.lastmod).up();
        });

        // Generate XML string
        const xml = urlset.end({ prettyPrint: true });

        // Set response headers and send XML
        res.header('Content-Type', 'application/xml');
        res.send(xml);

    } catch (error) {
        console.error('Error generating sitemap:', error);
        res.status(500).json({ success: false, message: 'Failed to generate sitemap' });
    }
});


// Error handling middleware
app.use((err, req, res, next) => {
    handleError(err, res);
});

// Start server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Failed to start server:', err);
});