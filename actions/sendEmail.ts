"use server";

import React from "react";
// import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// const resend = new Resend(process.env.RESEND_API_KEY);

// Assuming you're using Node.js and dotenv for environment variables
require('dotenv').config();
const Resend = require('resend'); // Replace with the actual import statement for Resend

// Fetch the API key from environment variables
const apiKey = process.env.RESEND_API_KEY;

// Pass the API key to the Resend constructor
const resendInstance = new Resend(apiKey);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "baljinder08072003@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
