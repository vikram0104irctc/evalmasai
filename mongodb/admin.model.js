const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    admin_email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const ADMIN = mongoose.model("admin", adminSchema);

module.exports = { ADMIN };
