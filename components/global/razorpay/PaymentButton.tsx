import axios from "axios";
import { useEffect } from "react";
import Razorpay from "razorpay";
import api from "@/utils/axiosInstance";
import { useAppContext } from "@/lib/context";
import * as crypto from "crypto";
import { toast } from "sonner";

const PaymentButton = ({
  planId,
  planName,
}: {
  planId: string;
  planName: string;
}) => {
  const { user, setUserRefetch } = useAppContext();

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript();
  }, []);

  const handlePayment = async () => {
    try {
      const res = await api.post("/users/create-subscription", { planId });
      if (res.data) {
        console.log(res.status === 200);

        const subId = res.data.data;
        const options = {
          key: "rzp_live_1ekqDWQCIFywTl", // Replace with your Razorpay key
          subscription_id: subId,
          name: "Doctor Management.",
          description: planName,
          image: "/your_logo.jpg",
          //TODO: add function to save and update the user data with the plan
          handler: async function (response: any) {
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_subscription_id);
            // alert(response.razorpay_signature);

            const {
              razorpay_payment_id,
              razorpay_subscription_id,
              razorpay_signature,
            } = response;

            const shasum = crypto.createHmac(
              "sha256",
              "Vvu1BMTkWvRyvj4lj7WsUVzz"
            );
            shasum.update(razorpay_payment_id + "|" + razorpay_subscription_id);
            const digest = shasum.digest("hex");

            console.log(digest);
            console.log(razorpay_signature);

            if (digest == razorpay_signature) {
              const data = {
                planName,
                planId,
                subscriptionId: razorpay_subscription_id,
                status: "Active",
              };

              const res = await api.post(
                `/users/save-subscription/${user?.email}`,
                data
              );

              if (res.status === 200) {
                setUserRefetch(true);
                toast.success(`Subscribed`, {
                  position: "top-center",
                });
              }
            }
          },
          prefill: {
            name: user.name,
            email: user.email,
            // contact: user.phone,
          },

          theme: {
            color: "#F37254",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      id="rzp-button1"
      className="py-4 px-8 bg-green-500 rouneded flex justify-center items-center rounded "
      onClick={handlePayment}
    >
      SUBSCRIBE
    </button>
  );
};

export default PaymentButton;
