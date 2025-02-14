import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-700">
              We may collect and process the following data about you:
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
              <li>Information provided by you when using our website, such as your name, phone number, and any other information provided when filling in forms on our site.</li>
              <li>Information about your visits to our site, including traffic data, location data, weblogs, and other communication data.</li>
              <li>Information about your interaction with our website and any third-party sites linked through our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Use of Information</h2>
            <p className="text-gray-700">We use the information we collect for the following purposes:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
              <li>To provide you with the services and information you request from us.</li>
              <li>To improve our website and ensure that content is presented in the most effective manner.</li>
              <li>To provide you with information about other services we offer that are similar to those that you have already used or inquired about.</li>
              <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
              <li>To allow you to participate in interactive features of our service when you choose to do so.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Disclosure of Information</h2>
            <p className="text-gray-700">
              We may disclose your personal information to third parties only if required by law or to protect our rights and the rights of others. We do not sell or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-700">
              You have the right to ask us not to process your personal data for marketing purposes. You can exercise your right to prevent such processing by contacting us at (623) 253-7937 or emailing us at airflowexpertllc@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Changes to Our Privacy Policy</h2>
            <p className="text-gray-700">
              Any changes we may make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-700">
              Questions, comments, and requests regarding this privacy policy are welcomed and should be addressed to (623) 253-7937 or airflowexpertllc@gmail.com
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