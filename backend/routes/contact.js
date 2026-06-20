const express = require("express");
const { Resend } = require("resend");

const router = express.Router();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body || {};

  // Validate required fields. The live form sends name, email and message;
  // phone and subject are included in the email when present.
  const missing = ["name", "email", "message"].filter(
    (field) => !req.body || !String(req.body[field] || "").trim()
  );
  if (missing.length) {
    return res.status(400).json({
      success: false,
      message: `Missing required field(s): ${missing.join(", ")}.`,
    });
  }

  // Validate email format.
  if (!EMAIL_REGEX.test(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide a valid email address." });
  }

  // Fail clearly if the service hasn't been configured yet.
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set.");
    return res.status(500).json({
      success: false,
      message: "Email service is not configured. Please try again later.",
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const recipient = process.env.EMAIL_TO || "gyanshankerdeo@gmail.com";
  // Resend requires the "from" domain to be verified. Until you verify your
  // own domain, use their shared testing sender (onboarding@resend.dev).
  const fromAddress = process.env.EMAIL_FROM || "R.G. Suppliers Website <onboarding@resend.dev>";

  // Build the labelled HTML body, showing phone/subject only when provided.
  const rows = [
    `<tr><td style="padding:4px 8px"><strong>Name:</strong></td><td style="padding:4px 8px">${escapeHtml(name)}</td></tr>`,
    `<tr><td style="padding:4px 8px"><strong>Email:</strong></td><td style="padding:4px 8px">${escapeHtml(email)}</td></tr>`,
  ];
  if (phone && String(phone).trim()) {
    rows.push(
      `<tr><td style="padding:4px 8px"><strong>Phone:</strong></td><td style="padding:4px 8px">${escapeHtml(phone)}</td></tr>`
    );
  }
  if (subject && String(subject).trim()) {
    rows.push(
      `<tr><td style="padding:4px 8px"><strong>Subject:</strong></td><td style="padding:4px 8px">${escapeHtml(subject)}</td></tr>`
    );
  }

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0b1c30">
      <h2>New Inquiry from the R.G. Suppliers website</h2>
      <table style="border-collapse:collapse">${rows.join("")}</table>
      <p style="margin-top:16px"><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: recipient,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html,
    });

    // Resend returns errors in the response payload rather than throwing
    // (e.g. invalid API key, rate limit, unverified domain).
    if (error) {
      console.error("Resend API error:", error);
      return res.status(502).json({
        success: false,
        message: "We couldn't send your inquiry right now. Please try again later.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Thank you. Your inquiry has been received. A procurement specialist will contact you shortly.",
      id: data?.id,
    });
  } catch (err) {
    // Network/unexpected errors — keep the server alive and respond cleanly.
    console.error("Resend send error:", err.message);
    return res.status(500).json({
      success: false,
      message: "We couldn't send your inquiry right now. Please try again later.",
    });
  }
});

// Basic HTML escaping to keep the email body safe.
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

module.exports = router;
