// src/Contact.js

import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

      <div className="space-y-4 text-lg">
        <p>
          <FaEnvelope className="inline-block mr-2 text-blue-500" />
          <a href="mailto:manusri2005@gmail.com" className="hover:underline text-blue-300">
            manusri2005@gmail.com
          </a>
        </p>
        <p>
          <FaPhone className="inline-block mr-2 text-green-400" />
          <span>6302469142</span>
        </p>
        <p>
          <FaLinkedin className="inline-block mr-2 text-blue-600" />
          <a
            href="https://www.linkedin.com/in/kurni-manushri-b222aa256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-300"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
