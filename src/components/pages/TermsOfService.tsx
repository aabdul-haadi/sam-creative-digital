import React from 'react';
import { FileText, Shield, AlertCircle, Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <FileText className="mr-2 text-primary" />
                Agreement to Terms
              </h2>
              <p className="text-text-muted">
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2 text-primary" />
                Intellectual Property Rights
              </h2>
              <p className="text-text-muted mb-4">
                Our service and its original content, features, and functionality are owned by SAM CREATIVE and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <AlertCircle className="mr-2 text-primary" />
                User Responsibilities
              </h2>
              <p className="text-text-muted mb-4">
                As a user, you are responsible for:
              </p>
              <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                <li>Providing accurate information</li>
                <li>Maintaining the confidentiality of your account</li>
                <li>Using our services legally and appropriately</li>
                <li>Respecting intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Scale className="mr-2 text-primary" />
                Limitation of Liability
              </h2>
              <p className="text-text-muted">
                SAM CREATIVE shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;