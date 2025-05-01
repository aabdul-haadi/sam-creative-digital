import React from 'react';
import { Cookie, Info, Settings, Shield } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Cookie className="mr-2 text-primary" />
                What Are Cookies
              </h2>
              <p className="text-text-muted">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us make your experience better while you browse our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Info className="mr-2 text-primary" />
                How We Use Cookies
              </h2>
              <p className="text-text-muted mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                <li>To remember your preferences</li>
                <li>To understand how you use our website</li>
                <li>To improve our services</li>
                <li>To provide personalized content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Settings className="mr-2 text-primary" />
                Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-text-muted">Required for the website to function properly.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-text-muted">Help us understand how visitors interact with our website.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Functional Cookies</h3>
                  <p className="text-text-muted">Remember your preferences and settings.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2 text-primary" />
                Managing Cookies
              </h2>
              <p className="text-text-muted mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                <li>Browser settings to block or delete cookies</li>
                <li>Our cookie consent tool</li>
                <li>Third-party opt-out tools</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;