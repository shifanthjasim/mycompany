import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/onlinejasim@gmail.com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const subject = `Website Contact from ${name.trim() || "Visitor"}`;
      const formData = new URLSearchParams({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        _subject: subject,
        _captcha: "false",
      });

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formData.toString(),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thanks! Your message has been sent successfully.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Unable to send message right now.");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "The message could not be delivered automatically. Please email onlinejasim@gmail.com directly.",
      });

      const subject = encodeURIComponent(`Website Contact from ${name.trim() || "Visitor"}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:onlinejasim@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-cyan-100/60 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-600">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Let’s build something reliable together.
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Reach out to discuss your next project, technical challenge, or growth plan.
          </p>

          <div className="mt-8 space-y-4">
            <a href="tel:+940778528550" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700">
              <Phone size={18} className="text-cyan-700" />
              +94 077 852 8550
            </a>
            <a href="mailto:onlinejasim@gmail.com" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700">
              <Mail size={18} className="text-cyan-700" />
              onlinejasim@gmail.com
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-cyan-500"
              placeholder="Name"
              required
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-cyan-500"
              placeholder="Email"
              type="email"
              required
            />
          </div>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="mt-4 min-h-36 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-cyan-500"
            placeholder="Tell me about your project"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 rounded-full bg-cyan-600 px-5 py-3 font-medium text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:bg-cyan-400"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status.message ? (
            <p className={`mt-3 text-sm ${status.type === "success" ? "text-emerald-600" : "text-rose-600"}`}>
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default Contact;