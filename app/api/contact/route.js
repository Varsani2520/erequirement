import { NextResponse } from "next/server";

export function POST(request) {
    const contact={
        "pageTitle": "Contact Us",
        "pageContent": {
          "image": {
            "src": "/path-to-contact-image.jpg",
            "alt": "Contact Image",
            "caption": "Our Office Location"
          },
          "contactForm": {
            "title": "Get in Touch",
            "fields": [
              {
                "label": "Name",
                "type": "text",
                "placeholder": "Your Name",
                "required": true
              },
              {
                "label": "Email",
                "type": "email",
                "placeholder": "Your Email",
                "required": true
              },
              {
                "label": "Message",
                "type": "textarea",
                "placeholder": "Your Message",
                "required": true
              }
            ],
            "submitButton": "Submit"
          },
          "contactInfo": {
            "address": "123 Main Street, City, Country",
            "phone": "+1 (123) 456-7890",
            "email": "contact@example.com"
          }
        }
      }
      
  return NextResponse.json(contact);
}
