import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for Project Blaze.",
};

export default function DisclaimerPage() {
  return (
    <LegalShell
      title="Disclaimer"
      description="Please read this disclaimer carefully before using the Project Blaze website."
    >
      <p>
        If you require any more information or have any questions about our
        site&apos;s disclaimer, please feel free to contact us by email at{" "}
        <a href="mailto:hr@projectblaze.co.in">hr@projectblaze.co.in</a>.
      </p>

      <h2>Disclaimers for Project Blaze</h2>
      <p>
        All the information on this website is published in good faith and for
        general information purposes only. Project Blaze does not make any
        warranties about the completeness, reliability and accuracy of this
        information. Any action you take upon the information you find on this
        website is strictly at your own risk. Project Blaze will not be liable
        for any losses and/or damages in connection with the use of our website.
      </p>
      <p>
        Flashing custom software, unlocking your bootloader and modifying your
        device carries inherent risk, including data loss and, in rare cases,
        rendering a device inoperable. You assume full responsibility for any
        changes you make to your device.
      </p>
      <p>
        From our website, you can visit other websites by following hyperlinks to
        such external sites. While we strive to provide only quality links to
        useful and ethical websites, we have no control over the content and
        nature of these sites. These links do not imply a recommendation for all
        the content found on these sites.
      </p>
      <p>
        Please be aware that when you leave our website, other sites may have
        different privacy policies and terms which are beyond our control. Be
        sure to check the Privacy Policies of these sites as well as their Terms
        of Service before engaging in any business or uploading any information.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website, you hereby consent to our disclaimer and agree to
        its terms.
      </p>

      <h2>Update</h2>
      <p>
        Should we update, amend or make any changes to this document, those
        changes will be prominently posted here.
      </p>
    </LegalShell>
  );
}
