import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Shield className="mr-2 text-primary" />
                Information We Collect
              </h2>
              <p className="text-text-muted mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communications with us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Lock className="mr-2 text-primary" />
                How We Use Your Information
              </h2>
              <p className="text-text-muted mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Eye className="mr-2 text-primary" />
                Information Sharing
              </h2>
              <p className="text-text-muted mb-4">
                We do not share your personal information except:
              </p>
              <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <FileText className="mr-2 text-primary" />
                Your Rights
              </h2>
              <p className="text-text-muted mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;