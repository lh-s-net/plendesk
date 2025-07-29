import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('de-DE')}
          </p>
        </div>

        <Separator />

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. About PlenDesk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  PlenDesk is a Swiss software company that provides online support community solutions and business software services. 
                  Our platform connects users with technical support, business guidance, and community-driven assistance.
                </p>
                <p>
                  By accessing and using our services at PlenDesk.com, you accept and agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Service Description</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  PlenDesk provides a comprehensive online support platform that includes:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Technical support and troubleshooting assistance</li>
                  <li>Business consultation and guidance services</li>
                  <li>Community forums and knowledge sharing</li>
                  <li>Software solutions and tools for businesses</li>
                  <li>Customer support ticketing system</li>
                  <li>Educational resources and documentation</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Accounts and Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  To access certain features of our platform, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Providing accurate and complete registration information</li>
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Complying with all applicable laws and regulations</li>
                </ul>
                <p>
                  You must be at least 16 years old to create an account. Accounts registered by automated means are prohibited.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Acceptable Use Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our platform. 
                  Prohibited activities include:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Uploading malicious software or harmful code</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Harassing, threatening, or abusing other users</li>
                  <li>Posting spam, offensive, or inappropriate content</li>
                  <li>Violating intellectual property rights</li>
                  <li>Impersonating others or providing false information</li>
                  <li>Using automated tools to access our services without permission</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  All content, software, and materials on PlenDesk.com are owned by PlenDesk or our licensors and are protected by 
                  Swiss and international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You are granted a limited, non-exclusive, non-transferable license to access and use our services for their intended purpose. 
                  This license does not include the right to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Reproduce, distribute, or publicly display our content</li>
                  <li>Create derivative works based on our platform</li>
                  <li>Reverse engineer or decompile our software</li>
                  <li>Remove or modify any proprietary notices</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Payment Terms and Subscriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Some of our services require payment. By subscribing to paid services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Pay all fees associated with your chosen plan</li>
                  <li>Provide accurate billing information</li>
                  <li>Authorize automatic recurring payments where applicable</li>
                  <li>Notify us of any changes to your payment information</li>
                </ul>
                <p>
                  Subscription fees are billed in advance and are non-refundable except as required by Swiss law. 
                  You may cancel your subscription at any time, with cancellation taking effect at the end of your current billing period.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your privacy is important to us. Our collection, use, and protection of your personal data is governed by our Privacy Policy, 
                which complies with Swiss Federal Data Protection Act (FADP) and EU General Data Protection Regulation (GDPR) where applicable. 
                Please review our Privacy Policy to understand how we handle your information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Our services are provided &quot;as is&quot; without warranties of any kind. To the maximum extent permitted by Swiss law,
                  PlenDesk disclaims all warranties, express or implied, including but not limited to warranties of merchantability, 
                  fitness for a particular purpose, and non-infringement.
                </p>
                <p>
                  PlenDesk shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including but not limited to loss of profits, data, or business interruption, arising from your use of our services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We may terminate or suspend your account and access to our services at any time, with or without notice, 
                  for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
                </p>
                <p>
                  You may terminate your account at any time by contacting us. Upon termination, your right to use our services 
                  will cease immediately, and we may delete your account and data in accordance with our data retention policies.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Governing Law and Jurisdiction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                These Terms of Service are governed by and construed in accordance with the laws of Switzerland. 
                Any disputes arising from these terms or your use of our services shall be subject to the exclusive 
                jurisdiction of the courts of Switzerland. If you are a consumer residing in the EU, you may also 
                have rights under local consumer protection laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Service at any time. We will notify users of material changes 
                by email or through our platform. Your continued use of our services after such modifications constitutes 
                acceptance of the updated terms. We recommend reviewing these terms periodically.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  If you have any questions about these Terms of Service or need support, please contact us:
                </p>
                <div className="ml-4">
                  <p><strong>PlenDesk</strong></p>
                  <p>Email: <a href="mailto:info@plendesk.com" className="text-primary hover:underline">info@plendesk.com</a></p>
                  <p>Location: Switzerland</p>
                </div>
                <p>
                  We strive to respond to all inquiries within 2 business days. For urgent technical issues, 
                  please use our priority support channels available to premium subscribers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}