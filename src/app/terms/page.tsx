import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for using the Project Blaze website.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms & Conditions"
      description="These terms and conditions outline the rules and regulations for the use of Project Blaze's website."
    >
      <p>Welcome to Project Blaze!</p>
      <p>
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use Project Blaze if you do not agree to
        take all of the terms and conditions stated on this page.
      </p>
      <p>
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;,
        &quot;You&quot; and &quot;Your&quot; refers to you, the person logging on
        to this website. &quot;The Company&quot;, &quot;Ourselves&quot;,
        &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot; refers to our Company.
      </p>

      <h3>Cookies</h3>
      <p>
        We employ the use of cookies. By accessing Project Blaze, you agreed to
        use cookies in agreement with Project Blaze&apos;s Privacy Policy. Most
        interactive websites use cookies to retrieve the user&apos;s details for
        each visit, to enable the functionality of certain areas and make the site
        easier to use.
      </p>

      <h3>License</h3>
      <p>
        Unless otherwise stated, Project Blaze and/or its licensors own the
        intellectual property rights for all material on this website, except for
        the open-source ROM sources which are licensed under their respective open
        source licenses. You may access this for your own personal use, subject to
        the restrictions set in these terms and conditions.
      </p>
      <p>You must not:</p>
      <ul>
        <li>Republish material from Project Blaze</li>
        <li>Sell, rent or sub-license material from Project Blaze</li>
        <li>Reproduce, duplicate or copy material from Project Blaze</li>
        <li>Redistribute content from Project Blaze</li>
      </ul>
      <p>
        Parts of this website may offer an opportunity for users to post and
        exchange opinions and information. Project Blaze does not filter, edit,
        publish or review comments prior to their presence on the website.
        Comments reflect the views and opinions of the person who posts them, not
        Project Blaze. We reserve the right to monitor all comments and to remove
        any which can be considered inappropriate, offensive or in breach of these
        Terms and Conditions.
      </p>

      <h3>Hyperlinking to our content</h3>
      <p>
        Government agencies, search engines, news organizations and online
        directory distributors may link to our website without prior written
        approval, so long as the link is not deceptive, does not falsely imply
        sponsorship or endorsement, and fits within the context of the linking
        party&apos;s site. No use of Project Blaze&apos;s logo or other artwork
        will be allowed for linking absent a trademark license agreement.
      </p>

      <h3>iFrames</h3>
      <p>
        Without prior approval and written permission, you may not create frames
        around our webpages that alter in any way the visual presentation or
        appearance of our website.
      </p>

      <h3>Content Liability</h3>
      <p>
        We shall not be held responsible for any content that appears on your
        website. You agree to protect and defend us against all claims arising on
        your website. No link(s) should appear on any website that may be
        interpreted as libelous, obscene or criminal, or which infringes or
        otherwise violates any third party rights.
      </p>

      <h3>Reservation of Rights</h3>
      <p>
        We reserve the right to request that you remove all links or any
        particular link to our website, and to amend these terms and conditions
        and its linking policy at any time. By continuously linking to our
        website, you agree to be bound by and follow these terms and conditions.
      </p>

      <h3>Disclaimer</h3>
      <p>
        To the maximum extent permitted by applicable law, we exclude all
        representations, warranties and conditions relating to our website and its
        use. As long as the website and the information and services on it are
        provided free of charge, we will not be liable for any loss or damage of
        any nature.
      </p>
    </LegalShell>
  );
}
