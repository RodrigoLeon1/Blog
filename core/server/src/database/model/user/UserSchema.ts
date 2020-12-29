import { Schema } from 'mongoose'

const UserSchema: Schema = new Schema({
  // id
  name: {
    type: Schema.Types.String,
    required: true,
    maxlength: 100,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
    select: false,
  },
  profileImgUrl: {
    type: Schema.Types.String,
    required: false,
  },
  // roles
  // posts
  // comments
  verified: {
    type: Schema.Types.Boolean,
    required: false,
  },
  status: {
    type: Schema.Types.Boolean,
    default: true,
    required: false,
  },
  createdAt: {
    type: Schema.Types.Date,
    required: false,
    select: false,
  },
  updatedAt: {
    type: Schema.Types.Date,
    required: false,
    select: false,
  },
})

export default UserSchema
