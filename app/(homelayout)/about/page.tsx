/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "@/components/global/sec-title";
import Title from "@/components/global/title";

const AboutPage = () => {
  return (
    <div id="faqs" className="px-4 xl:px-0 py-[60px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-2 justify-center items-center text-start pb-12">
          <SectionTitle title="About Us" />
          <Title
            title="We Are DOCalart"
            className="text-[32px] lg:text-[46px] leading-[1.3em]"
          />
          <p className="text-muted-foreground text-[17px]">
            Welcome to DOCalart, the revolutionary patient management platform
            empowering doctors to deliver exceptional care. With a robust suite
            of tools, we streamline patient data management, foster growth, and
            celebrate excellence.
          </p>
          <p className="text-muted-foreground text-[17px]">
            Our story began with a mission to transform healthcare management.
            Today, we proudly support over 6,787 live doctors and more than 3
            crore patients, with a dedicated team of 1,000+ female call support
            specialists.
          </p>
          <p className="text-muted-foreground text-[17px]">
            At DOCalart, we believe in the power of data-driven insights,
            personalized support, and patient-centric care. Our growth analysis
            and support team help doctors improve their services, while our
            patient review system ensures transparency and accountability.
          </p>
          <p className="text-muted-foreground text-[17px]">
            We're committed to recognizing and rewarding exceptional care, with
            gifts and medals for outstanding doctors. Our female call support
            team ensures patients never miss an appointment, with timely
            reminders and personalized engagement.
          </p>
          <p className="text-muted-foreground text-[17px]">
            Join the DOCalart community today and discover a better way to
            manage patient care, drive growth, and celebrate excellence in
            healthcare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
