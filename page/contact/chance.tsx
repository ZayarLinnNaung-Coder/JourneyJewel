"use client";
import IconContact from "@/common/icon/IconContact";
import IconMail from "@/common/icon/IconMail";
import IconRightArrow from "@/common/icon/IconRightArrow";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface formProps {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Chance = () => {
  const [{ fullName, message, email, subject, phone }, setData] =
    useState<formProps>({
      fullName: "",
      message: "",
      email: "",
      subject: "",
      phone: "",
    });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      fullName,
      phone,
      email,
      subject,
      message,
    };

    try {
      const res = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await res.json();
      if (res.ok) {
        setData({
          fullName: "",
          message: "",
          email: "",
          subject: "",
          phone: "",
        });
        toast.success("Send a message");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" min-w-full container">
      <div className="  space-y-3 md:space-y-2">
        <div className=" mt-2 flex items-center justify-center ">
          <h3 className=" text-[20px] md:text-[40px] lg:text-[48px] tracking-normal text-center font-[500] md:w-[700px] ">
            Don’t miss The Chance
          </h3>
        </div>
        <div className=" hidden md:flex items-center justify-center">
          <p className=" text-[12px] md:leading-7 md:text-[18px] md:w-[800px] text-sm text-webPara text-center font-[500] mt-2">
            We’re here to assist you! Whether you have inquiries about our
            platform, need support, or have feedback to share, our team is ready
            to help.
          </p>
        </div>
      </div>

      <div className=" flex flex-col-reverse gap-5 xl:gap-16 mt-5 md:mt-10 md:grid md:grid-cols-12">
        <div className=" col-span-5">
          <div className=" xl:py-12 xl:px-10  px-5 py-6 rounded-2xl bg-webBgSchool">
            <div className=" mb-3">
              <p className="  md:text-lg flex items-center gap-2 font-[500]">
                <IconMail className=" xl:w-auto md:w-7 md:h-7  w-6 h-6 xl:h-auto text-primary" />{" "}
                Contact Email Address
              </p>
              <p className=" text-[13px] lg:text-sm xl:text-[15px] mt-1 text-webPara">
                For any questions, technical support, or general inquiries, feel
                free to reach out to us via email. Our dedicated team will
                respond within 24-48 hours to assist you.
              </p>
              <p className=" pt-3 pb-2 xl:pb-5 md:text-base xl:text-lg font-[500]">
                nexlynk.info@gmail.com
              </p>
            </div>
            <div className="">
              <p className=" md:text-lg flex items-center gap-2 font-[500]">
                <IconContact className=" xl:w-auto md:w-7 md:h-7  w-6 h-6 xl:h-auto text-primary" />{" "}
                Contact Phone
              </p>
              <p className=" mt-2 xl:mt-5 text-[13px] md:text-sm xl:text-[15px] text-webPara">
                Need immediate assistance? Our customer support team is
                available to help you during business hours.
              </p>
              <p className=" mt-5 text-[13px] md:text-sm xl:text-[15px] text-webPara">
                <b>Hours of Operation</b>: Monday to Friday, 9:00 AM - 5:00 PM
              </p>
              <p className=" mb-5 text-[13px] md:text-sm xl:text-[15px] text-webPara">
                <b>Phone</b>: +959 969036897
              </p>
            </div>

            <div className="text-[13px] md:text-sm xl:text-[15px] text-webPara">
              We are committed to providing excellent service and ensuring a
              smooth experience for all our partners and learners. If you need
              further assistance, please don’t hesitate to contact us!
            </div>
          </div>
        </div>
        <div className=" col-span-7">
          <div className=" xl:w-[700px] p-4 md:p-8  rounded-2xl bg-webBgSchool ">
            <p className=" text-lg md:text-2xl font-[500]">
              Tell us a bit about yourself
            </p>
            <form onSubmit={(e) => handleSubmit(e)} className=" space-y-5 mt-3">
              <div className="">
                <label className=" text-[12px] md:text-sm" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={fullName}
                  onChange={(e) =>
                    setData((pre) => ({ ...pre, fullName: e.target.value }))
                  }
                  placeholder="Enter your name"
                  className=" w-full text-[12px] md:text-sm mt-1 bg-white border border-[#6F6F6F26] py-3 md:py-4 outline-none pl-3 text-webPara rounded-xl"
                />
              </div>

              <div className=" grid grid-cols-2 gap-4">
                <div className="">
                  <label className=" text-[12px] md:text-sm" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) =>
                      setData((pre) => ({ ...pre, email: e.target.value }))
                    }
                    placeholder="Type your mail address"
                    className=" text-[12px] md:text-sm w-full mt-1 bg-white border border-[#6F6F6F26] py-3 md:py-4 outline-none pl-3 text-webPara rounded-xl"
                  />
                </div>
                <div className="">
                  <label className=" text-[12px] md:text-sm" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) =>
                      setData((pre) => ({ ...pre, phone: e.target.value }))
                    }
                    placeholder="+959"
                    className=" text-[12px] md:text-sm w-full mt-1 bg-white border border-[#6F6F6F26] py-3 md:py-4 outline-none pl-3 text-webPara rounded-xl"
                  />
                </div>
              </div>

              <div className="">
                <label className=" text-[12px] md:text-sm" htmlFor="sub">
                  Subject
                </label>
                <input
                  type="text"
                  id="sub"
                  value={subject}
                  onChange={(e) =>
                    setData((pre) => ({ ...pre, subject: e.target.value }))
                  }
                  placeholder="Select your subject to send"
                  className=" text-[12px] md:text-sm w-full mt-1 bg-white border border-[#6F6F6F26] py-3 md:py-4 outline-none pl-3 text-webPara rounded-xl"
                />
              </div>

              <div className="">
                <label className="text-[12px] md:text-sm" htmlFor="sub">
                  Message
                </label>
                <textarea
                  id="sub"
                  value={message}
                  onChange={(e) =>
                    setData((pre) => ({ ...pre, message: e.target.value }))
                  }
                  placeholder="Type a message"
                  className=" text-[12px] md:text-sm w-full mt-2 bg-white border border-[#6F6F6F26] py-4 outline-none pl-3 text-webPara rounded-xl"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className=" hidden text-[12px] disabled:opacity-70 disabled:cursor-not-allowed  md:text-sm text-white  bg-[#0891B2] border border-[#7CBBC1] rounded-full md:flex items-center gap-2 py-2 px-5"
              >
                Send a Message <IconRightArrow />{" "}
              </button>
              <button
                disabled={isSubmitting}
                type="submit"
                className=" mb-5  text-[12px]  md:text-sm disabled:opacity-70 disabled:cursor-not-allowed text-white  bg-[#0891B2] border border-[#7CBBC1] rounded-full md:hidden flex items-center gap-2 py-2 px-5"
              >
                Send a Mail <IconRightArrow />{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chance;
