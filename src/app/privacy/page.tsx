import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Project Blaze.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      description="Your privacy is one of our main priorities. This document explains what we collect and how we use it."
    >
      <p>
        At Project Blaze, one of our main priorities is the privacy of our
        visitors. This Privacy Policy document contains the types of information
        that is collected and recorded by Project Blaze and how we use it. If you
        have additional questions or require more information, do not hesitate to
        contact us.
      </p>
      <p>
        This Privacy Policy applies only to our online activities and is valid for
        visitors to our website with regard to the information that they share
        and/or that is collected on Project Blaze. This policy is not applicable
        to any information collected offline or via channels other than this
        website.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>

      <h2>Information we collect</h2>
      <p>
        The personal information that you are asked to provide, and the reasons
        why you are asked to provide it, will be made clear to you at the point we
        ask you to provide your personal information. If you contact us directly,
        we may receive additional information about you such as your name, email
        address, the contents of the message and/or attachments you may send us,
        and any other information you may choose to provide.
      </p>

      <h2>How we use your information</h2>
      <p>We use the information we collect in various ways, including to:</p>
      <ul>
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Communicate with you, including for support and updates</li>
        <li>Find and prevent fraud</li>
      </ul>

      <h2>Log Files</h2>
      <p>
        Project Blaze follows a standard procedure of using log files. These
        files log visitors when they visit websites. The information collected
        includes IP addresses, browser type, Internet Service Provider (ISP),
        date and time stamp, referring/exit pages, and possibly the number of
        clicks. These are not linked to any personally identifiable information.
      </p>

      <h2>Cookies and Web Beacons</h2>
      <p>
        Like any other website, Project Blaze uses cookies. These cookies are
        used to store information including visitors&apos; preferences, and the
        pages on the website that the visitor accessed or visited, to optimize the
        users&apos; experience.
      </p>

      <h2>Third Party Privacy Policies</h2>
      <p>
        Project Blaze&apos;s Privacy Policy does not apply to other advertisers or
        websites. We advise you to consult the respective Privacy Policies of
        these third-party servers for more detailed information, including their
        practices and instructions about how to opt out of certain options. You
        can disable cookies through your individual browser options.
      </p>

      <h2>GDPR &amp; CCPA Rights</h2>
      <p>
        We want to make sure you are fully aware of your data protection rights.
        Every user is entitled to access, rectification, erasure, restriction of
        processing, objecting to processing, and data portability. If you make a
        request, we have one month to respond. To exercise any of these rights,
        please contact us.
      </p>

      <h2>Children&apos;s Information</h2>
      <p>
        Another part of our priority is adding protection for children while using
        the internet. Project Blaze does not knowingly collect any Personally
        Identifiable Information from children under the age of 13. If you think
        that your child provided this kind of information on our website, please
        contact us immediately and we will do our best to promptly remove such
        information from our records.
      </p>
    </LegalShell>
  );
}
