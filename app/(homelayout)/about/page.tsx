/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "@/components/global/sec-title";
import Title from "@/components/global/title";

const AboutPage = () => {
  return (
    <div id="faqs" className="px-4 xl:px-0 py-[60px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-2 justify-center items-center pb-12">
          <SectionTitle title="About us" />
          <Title
            title="Welcome to DOCalert"
            className="text-[32px] lg:text-[46px] leading-[1.3em]"
          />
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-[17px]">
              DOCalert is a revolutionary healthcare technology platform
              designed to help doctors manage their patients more efficiently.
              Our platform allows doctors to record patient data, including
              names, phone numbers, and next appointment dates, and provides
              valuable insights into patient behavior and treatment outcomes.
            </p>

            <div className="flex flex-col gap-2">
              <strong>Our Mission: </strong>
              <p className="text-muted-foreground text-[17px]">
                At DOCalert, our mission is to improve patient care and outcomes
                by providing doctors with the tools they need to succeed. We
                believe that by harnessing the power of technology, we can make
                healthcare more accessible, efficient, and effective.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <strong>Our Team: </strong>
              <p className="text-muted-foreground text-[17px]">
                Our team is comprised of experienced healthcare professionals,
                technology experts, and customer support specialists. We have
                over 1000+ call support team members, including more than 1000+
                female call support team members, and a growth analysis and
                support team of over 60 people. Our team is dedicated to
                providing exceptional service and support to our doctors and
                patients.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <strong>Our Services: </strong>
              <p className="text-muted-foreground text-[17px]">
                DOCalert offers a range of services designed to help doctors
                manage their patients more effectively. These include:
              </p>
              <p className="text-muted-foreground text-[17px]">
                - Patient data management: Our platform allows doctors to record
                patient data, including names, phone numbers, and next
                appointment dates.
              </p>
              <p className="text-muted-foreground text-[17px]">
                - Appointment reminders: Our executive call support team calls
                patients to remind them of upcoming appointments.
              </p>
              <p className="text-muted-foreground text-[17px]">
                - Growth analysis and support: Our growth analysis and support
                team helps doctors improve their growth and performance.
              </p>
              <p className="text-muted-foreground text-[17px]">
                - Patient review and feedback: We collect patient reviews and
                feedback and inform doctors about their work.
              </p>
              <p className="text-muted-foreground text-[17px]">
                - Rewards and recognition: Doctors receive gifts or medals if
                every patient is happy with their treatment.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <strong>Our Impact: </strong>
              <p className="text-muted-foreground text-[17px]">
                We are proud to say that we have already made a significant
                impact in the healthcare industry. We have over 6787 live
                doctors and more than 3 crore patients on our platform, and our
                services have improved patient outcomes and doctor-patient
                relationships.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <strong>Join Us: </strong>
              <p className="text-muted-foreground text-[17px]">
                If you are a doctor looking to improve your patient management
                and care, join us today. Our subscription-based service is
                designed to be affordable and accessible, and our team is always
                available to support you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
