import { ArrowLeft, ShieldCheck, ScrollText } from "lucide-react";

function LegalPage({ title, type, onNavigate }) {
  const isPrivacy = type === "privacy";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col px-6 py-10 lg:px-8 lg:py-16">
        <button
          type="button"
          onClick={() => {
            onNavigate("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-cyan-500 hover:text-cyan-700"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-cyan-100/60 md:p-10">
          <div className="flex items-center gap-3 text-cyan-700">
            {isPrivacy ? <ShieldCheck size={22} /> : <ScrollText size={22} />}
            <span className="text-sm uppercase tracking-[0.3em]">Legal</span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {isPrivacy
              ? "This Privacy Policy explains how SoftCloud Lanka collects, uses, and protects your personal information when you visit our website or contact us for services."
              : "These Terms & Conditions outline the rules for using our website and engaging with our services. By using our site or placing an order, you agree to these terms."}
          </p>

          <div className="mt-8 space-y-8 text-slate-700">
            {isPrivacy ? (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-slate-900">1. Information We Collect</h2>
                  <p className="mt-3 leading-8">
                    We may collect your name, email address, phone number, company name, and any project details you share through our contact forms or direct communication. We also collect basic website usage data such as browser type and IP address for security and analytics purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900">2. How We Use Your Information</h2>
                  <p className="mt-3 leading-8">
                    Your information is used to respond to inquiries, discuss project requirements, provide quotations, improve our website experience, and maintain the security of our services. We do not sell your information to third parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900">3. Data Protection</h2>
                  <p className="mt-3 leading-8">
                    We take reasonable steps to protect your data from unauthorized access, loss, misuse, or disclosure. However, no method of internet transmission is completely secure, and we cannot guarantee absolute protection.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900">4. Your Rights</h2>
                  <p className="mt-3 leading-8">
                    You may request access to the personal information we hold about you, ask for corrections, or request deletion where applicable. Please contact us if you would like to exercise any of these rights.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-xl font-semibold text-slate-900">1. Service Overview</h2>
                  <p className="mt-3 leading-8">
                    SoftCloud Lanka provides software development, cloud solutions, cybersecurity support, and consulting services. Project scope, timelines, deliverables, and pricing will be agreed upon before work begins.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900">2. Client Responsibilities</h2>
                  <p className="mt-3 leading-8">
                    Clients are responsible for providing accurate information, timely feedback, and any required access or content needed to complete the agreed work. Delays caused by missing information may affect delivery timelines.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900">3. Payments and Deliverables</h2>
                  <p className="mt-3 leading-8">
                    Any project quote or package pricing is subject to the agreed scope of work. Payments, revisions, and deliverable expectations will be discussed clearly before engagement begins.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900">4. Intellectual Property</h2>
                  <p className="mt-3 leading-8">
                    Work created specifically for a client remains the property of the client according to the agreed project terms. General tools, methods, and reusable frameworks used during delivery remain the intellectual property of SoftCloud Lanka unless otherwise agreed.
                  </p>
                </section>
              </>
            )}

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
              <p className="mt-3 leading-8">
                If you have questions about this document or how we handle your information, please contact us through the contact section of this website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalPage;
