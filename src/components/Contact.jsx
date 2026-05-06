import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(
      "YOUR_SERVICE_ID",      // 🔁 replace this
      "YOUR_TEMPLATE_ID",     // 🔁 replace this
      form.current,
      "YOUR_PUBLIC_KEY"       // 🔁 replace this
    )
    .then(() => {
      setStatus("success");
      form.current.reset();
    })
    .catch(() => {
      setStatus("error");
    });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && <p style={{color:"green"}}>✅ Message sent successfully!</p>}
      {status === "error" && <p style={{color:"red"}}>❌ Failed to send. Try again.</p>}
    </section>
  );
};

export default Contact;