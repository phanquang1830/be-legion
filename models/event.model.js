import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        host: {
            type: String,
            required: true
        },
        community_member_id: {
            type: String,
            required: true
        },
        in_person_location: {
            type: String,
            required: true
        },
        starts_at: {
            type: Date,
            required: true
        },
        ends_at: {
            type: Date,
            required: true
        },
        create_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        cover_image_url: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        max_attendees: {
            type: Number,
            max: 300,
            required: true
        },
        current_attendees: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['upcoming', 'ongoing', 'finished', 'cancelled'],
            required: true
        },
        category: {
            type: String,
            required: true
        },
        location_URL: {
            type: String,
            required: true
        }
    }
)

const Event = mongoose.model('Event', eventSchema)
export default Event