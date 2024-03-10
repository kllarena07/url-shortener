import mongoose from "mongoose"

const route_schema = new mongoose.Schema({
  shortened_route: String,
  identity_route: String
})

export default mongoose.model("Route", route_schema)