require('./models/restaurant');
import * as mongoose from "mongoose";
import {model} from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    RestaurantName: {
         type: Object,
         require: true
    },
    title: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    Location: {
        type: Object,
        require: true
    },
    Ratings: {
        type: String,
        require: true
    }
});

export default model('restaurant', RestaurantSchema);
