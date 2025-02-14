import React from 'react';

export function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing or using AirCare Pro's services, you agree to be bound by these terms and conditions. If you do not agree to all of the terms and conditions, you may not access the site or use its services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Use of the Website</h2>
            <p className="text-gray-700">
              You agree to use AirCare Pro for lawful purposes and in a way that does not infringe on the rights of, restrict, or inhibit anyone else's use and enjoyment of the site. You shall not use the website in any manner which could damage, disable, overburden, or impair the site or interfere with any other party's use and enjoyment of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Intellectual Property Rights</h2>
            <p className="text-gray-700">
              The content and materials displayed on AirCare Pro, including but not limited to text, graphics, logos, images, audio clips, and software, are the property of AirCare Pro or its licensors and are protected by intellectual property laws. You agree not to reproduce, modify, distribute, display, perform, or create derivative works from any material on the site without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-700">
              AirCare Pro shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, data, or other intangible losses resulting from the use or inability to use the service, unauthorized access to or alteration of your data, or any other matter relating to the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Links to Other Websites</h2>
            <p className="text-gray-700">
              AirCare Pro may contain links to third-party websites or services that are not owned or controlled by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that AirCare Pro shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Governing Law</h2>
            <p className="text-gray-700">
              These terms and conditions are governed by and construed in accordance with the laws of Arizona, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Changes to Terms and Conditions</h2>
            <p className="text-gray-700">
              AirCare Pro reserves the right to modify or replace these terms and conditions at any time. The updated terms and conditions will be posted on the website. Your continued use of the site after any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Contact</h2>
            <p className="text-gray-700">
              If you have any questions about these terms and conditions, please contact us at (623) 253-7937 or email us at airflowexpertllc@gmail.com
            </p>
          </section>

          <div className="text-center text-gray-600 mt-12">
            <p>AirCare Pro © {new Date().getFullYear()} | Elite Professionals in Air Quality</p>
          </div>
        </div>
      </div>
    </div>
  );
}