/* eslint-disable react/no-unescaped-entities */
import Title from "@/components/global/title";

const TermsPage = () => {
  return (
    <div id="faqs" className="px-4 xl:px-0 py-[60px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-2 justify-center items-center pb-12">
          <Title
            title="Terms and Conditions"
            className="text-[32px] lg:text-[46px] leading-[1.3em]"
          />
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-[17px]">
              Welcome to Docalert, the premier patient management platform for
              doctors in India. By using our services, you agree to the
              following terms and conditions, which ensure a seamless and secure
              experience for all users.
            </p>

            <p className="text-muted-foreground text-[17px]">
              <strong>User Agreement: </strong> By signing up and subscribing to
              Docalert, doctors agree to provide accurate information, maintain
              confidentiality, and use our services responsibly, in accordance
              with the Information Technology Act, 2000.
            </p>
            <p className="text-muted-foreground text-[17px]">
              <strong>Subscription and Payment: </strong> Doctors must purchase
              a subscription to access Docalert's services, which can be bought
              after sign-up. Please note that subscriptions are non-refundable
              and non-cancellable.
            </p>
            <p className="text-muted-foreground text-[17px]">
              <strong>Data Protection: </strong>We prioritize data security and
              comply with the Personal Data Protection Bill, 2019, to safeguard
              patient information and doctor data.
            </p>
            <p className="text-muted-foreground text-[17px]">
              <strong>Intellectual Property: </strong>Docalert retains all
              rights to its intellectual property, including trademarks,
              copyrights, and trade secrets, under the Indian Copyright Act,
              1957.
            </p>

            <p className="text-muted-foreground text-[17px]">
              <strong>Patient Reviews and Feedback: </strong>Patient reviews are
              subject to moderation and may be removed if they violate our
              guidelines or the Information Technology (Intermediary Guidelines
              and Digital Media Ethics Code) Rules, 2021.
            </p>
            <p className="text-muted-foreground text-[17px]">
              <strong>Gift and Medal Policy: </strong>Doctors receiving gifts or
              medals must adhere to our policy, ensuring transparency and
              accountability, in accordance with the Indian Medical Council
              (Professional Conduct, Etiquette and Ethics) Regulations, 2002.
            </p>

            <p className="text-muted-foreground text-[17px]">
              <strong>Executive Call Support Team: </strong>Our executive call
              support team will contact patients to recall appointments, and
              patients agree to receive these calls, in compliance with the
              Telecom Regulatory Authority of India (TRAI) guidelines.
            </p>
            <p className="text-muted-foreground text-[17px]">
              <strong>Governing Law: </strong>These terms and conditions are
              governed by Indian laws and subject to change without notice, in
              accordance with the Indian Contract Act, 1872.
            </p>
            <p className="text-muted-foreground text-[17px]">
              <strong>Contact Us: </strong>For questions or concerns, please
              contact our support team at support{" "}
              <a className="text-blue-600" href="mailto:docalert.in@gmail.com">
                docalert.in@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
