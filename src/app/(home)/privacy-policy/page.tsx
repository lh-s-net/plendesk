import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('de-DE')}
          </p>
        </div>

        <Separator />

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. About This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  PlenDesk is a Swiss software company committed to protecting your privacy and personal data. 
                  This Privacy Policy explains how we collect, use, process, and protect your information when you use our 
                  online support community platform and related services.
                </p>
                <p>
                  This policy complies with the Swiss Federal Data Protection Act (FADP), the EU General Data Protection 
                  Regulation (GDPR), and other applicable data protection laws. By using our services, you consent to the 
                  data practices described in this policy.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Data Controller Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  The data controller responsible for your personal information is:
                </p>
                <div className="ml-4 space-y-1">
                  <p><strong>PlenDesk</strong></p>
                  <p>Location: Switzerland</p>
                  <p>Email: <a href="mailto:info@plendesk.com" className="text-primary hover:underline">info@plendesk.com</a></p>
                </div>
                <p>
                  For all privacy-related inquiries, data subject requests, or concerns about how we handle your personal data, 
                  please contact us using the information provided above.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We collect various types of information to provide and improve our services:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p><strong>Account Information:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Full name and email address</li>
                      <li>Username and encrypted password</li>
                      <li>Profile picture and bio (optional)</li>
                      <li>Company information and job title (optional)</li>
                      <li>Communication and notification preferences</li>
                    </ul>
                  </div>

                  <div>
                    <p><strong>Usage Data:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Support tickets and community posts</li>
                      <li>Search queries and platform interactions</li>
                      <li>Feature usage and session duration</li>
                      <li>Device information and browser type</li>
                      <li>IP address and approximate location</li>
                    </ul>
                  </div>

                  <div>
                    <p><strong>Payment Information:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Billing address and payment method details</li>
                      <li>Transaction history and subscription status</li>
                      <li>Tax identification numbers (where required)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>We process your personal data for the following purposes:</p>
                
                <div className="space-y-3">
                  <div>
                    <p><strong>Service Provision (Legal Basis: Contract Performance):</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Creating and managing your account</li>
                      <li>Providing technical support and troubleshooting</li>
                      <li>Facilitating community interactions and knowledge sharing</li>
                      <li>Processing payments and managing subscriptions</li>
                      <li>Delivering requested services and features</li>
                    </ul>
                  </div>

                  <div>
                    <p><strong>Communication (Legal Basis: Legitimate Interest/Consent):</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Sending service updates and security notifications</li>
                      <li>Responding to support requests and inquiries</li>
                      <li>Providing product updates and feature announcements</li>
                      <li>Marketing communications (with your consent)</li>
                    </ul>
                  </div>

                  <div>
                    <p><strong>Platform Improvement (Legal Basis: Legitimate Interest):</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Analyzing usage patterns and user behavior</li>
                      <li>Improving our services and developing new features</li>
                      <li>Conducting research and analytics</li>
                      <li>Ensuring platform security and preventing fraud</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We do not sell, rent, or trade your personal information. We may share your data only in the following circumstances:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p><strong>Service Providers:</strong></p>
                    <p className="ml-4">
                      We work with trusted third-party service providers who assist us in operating our platform, 
                      including cloud hosting, payment processing, email delivery, and analytics. These providers 
                      are contractually bound to protect your data and use it only for specified purposes.
                    </p>
                  </div>

                  <div>
                    <p><strong>Legal Requirements:</strong></p>
                    <p className="ml-4">
                      We may disclose your information when required by Swiss law, court orders, or regulatory authorities, 
                      or to protect our rights, property, or safety, or that of our users or the public.
                    </p>
                  </div>

                  <div>
                    <p><strong>Business Transfers:</strong></p>
                    <p className="ml-4">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                      to the acquiring entity, subject to the same privacy protections.
                    </p>
                  </div>

                  <div>
                    <p><strong>With Your Consent:</strong></p>
                    <p className="ml-4">
                      We may share your information with third parties when you explicitly consent to such sharing.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Data Security and Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We implement comprehensive security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>End-to-end encryption for data transmission and storage</li>
                  <li>Multi-factor authentication and access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection and privacy</li>
                  <li>Incident response procedures and breach notification protocols</li>
                  <li>Compliance with industry-standard security frameworks</li>
                </ul>
                <p>
                  While we strive to protect your information using industry best practices, no method of transmission 
                  or storage is completely secure. We continuously monitor and improve our security measures to 
                  minimize risks to your data.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Data Retention and Deletion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We retain your personal information only as long as necessary for the purposes outlined in this policy:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Account Data:</strong> Retained while your account is active and for 2 years after account closure</li>
                  <li><strong>Support Records:</strong> Kept for 5 years to maintain service quality and resolve disputes</li>
                  <li><strong>Payment Information:</strong> Retained for 7 years as required by Swiss financial regulations</li>
                  <li><strong>Marketing Data:</strong> Deleted immediately upon withdrawal of consent</li>
                  <li><strong>Analytics Data:</strong> Anonymized after 2 years and retained for statistical purposes</li>
                </ul>
                <p>
                  When data is no longer needed, we securely delete or anonymize it using industry-standard methods. 
                  You can request early deletion of your data by contacting us, subject to legal retention requirements.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Under Swiss and EU data protection laws, you have the following rights regarding your personal data:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p><strong>Access and Portability:</strong></p>
                    <p className="ml-4">
                      Request a copy of your personal data in a structured, machine-readable format. 
                      You can export most of your data directly from your account settings.
                    </p>
                  </div>

                  <div>
                    <p><strong>Correction and Updates:</strong></p>
                    <p className="ml-4">
                      Update or correct inaccurate personal information through your account settings or by contacting us.
                    </p>
                  </div>

                  <div>
                    <p><strong>Deletion ("Right to be Forgotten"):</strong></p>
                    <p className="ml-4">
                      Request deletion of your personal data, subject to legal retention requirements and legitimate business needs.
                    </p>
                  </div>

                  <div>
                    <p><strong>Processing Restrictions:</strong></p>
                    <p className="ml-4">
                      Request that we limit how we process your data in certain circumstances.
                    </p>
                  </div>

                  <div>
                    <p><strong>Objection and Consent Withdrawal:</strong></p>
                    <p className="ml-4">
                      Object to processing based on legitimate interests or withdraw consent for marketing communications at any time.
                    </p>
                  </div>
                </div>

                <p>
                  To exercise these rights, contact us at <a href="mailto:info@plendesk.com" className="text-primary hover:underline">info@plendesk.com</a>. 
                  We will respond to your request within 30 days and may require identity verification.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We use cookies and similar technologies to enhance your experience and analyze platform usage:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p><strong>Essential Cookies:</strong></p>
                    <p className="ml-4">
                      Required for basic platform functionality, including authentication, security, and session management. 
                      These cannot be disabled without affecting core features.
                    </p>
                  </div>

                  <div>
                    <p><strong>Analytics Cookies:</strong></p>
                    <p className="ml-4">
                      Help us understand how users interact with our platform to improve services and user experience. 
                      Data is anonymized and aggregated.
                    </p>
                  </div>

                  <div>
                    <p><strong>Preference Cookies:</strong></p>
                    <p className="ml-4">
                      Remember your settings and preferences to provide a personalized experience across sessions.
                    </p>
                  </div>
                </div>

                <p>
                  You can manage cookie preferences through your browser settings or our cookie consent banner. 
                  Disabling certain cookies may limit platform functionality.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  As a Swiss company, we primarily process data within Switzerland and the European Economic Area (EEA). 
                  When we transfer data to countries outside these regions, we ensure adequate protection through:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>European Commission adequacy decisions</li>
                  <li>Standard Contractual Clauses (SCCs) approved by Swiss and EU authorities</li>
                  <li>Certification schemes and codes of conduct</li>
                  <li>Binding corporate rules for multinational service providers</li>
                </ul>
                <p>
                  We regularly review and update our data transfer mechanisms to ensure compliance with evolving 
                  international data protection standards.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our services are not intended for children under 16 years of age. We do not knowingly collect 
                personal information from children under 16. If we become aware that we have collected personal 
                information from a child under 16, we will take steps to delete such information promptly. 
                Parents or guardians who believe their child has provided us with personal information should 
                contact us immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We may update this Privacy Policy periodically to reflect changes in our practices, services, 
                  or applicable laws. When we make material changes, we will:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Notify you by email at least 30 days before changes take effect</li>
                  <li>Display a prominent notice on our platform</li>
                  <li>Update the "Last updated" date at the top of this policy</li>
                  <li>Provide a summary of key changes where appropriate</li>
                </ul>
                <p>
                  Your continued use of our services after the effective date of changes constitutes acceptance 
                  of the updated policy. If you disagree with changes, you may close your account.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>13. Contact Us and Data Protection Officer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  For any questions about this Privacy Policy, data protection concerns, or to exercise your rights, 
                  please contact us:
                </p>
                <div className="ml-4 space-y-1">
                  <p><strong>PlenDesk Privacy Team</strong></p>
                  <p>Email: <a href="mailto:info@plendesk.com" className="text-primary hover:underline">info@plendesk.com</a></p>
                  <p>Subject Line: "Privacy Inquiry" or "Data Subject Request"</p>
                  <p>Location: Switzerland</p>
                </div>
                <p>
                  We are committed to resolving privacy concerns promptly and will respond to your inquiry within 
                  2 business days for general questions and within 30 days for formal data subject requests.
                </p>
                <p>
                  If you are not satisfied with our response, you have the right to lodge a complaint with the 
                  Swiss Federal Data Protection and Information Commissioner (FDPIC) or your local data protection authority.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}