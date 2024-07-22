const mongoose = require('mongoose');

let devicesSchema = new mongoose.Schema({
    brand: {
        type: String,
        require: true,
    },
    model: {
        type: String,
        require: true,
    },
    hardDisk: {
        type: String,
        require: true,
    },
    screenSize: {
        type: String,
        require: true,
    },
    ram: {
        type: String,
        require: true,
    },
    operatingSystem: {
        type: String,
        require: true,
    },
    cpu: {
        type: String,
        require: true,
    },
    gpu: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    color: {
        type: String,
        require: true,
    },
    weight: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
        validate: /^https?:\/\//i,
        
    },
    preferedList: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

devicesSchema.method('getPrefered', function () {
    return this.preferedList.map(x => x._id);
});

devicesSchema.method('getUsername', function () {
    return this.preferedList.map(x => x.username);
})

let Course = mongoose.model('Devices', devicesSchema);

module.exports = Course;