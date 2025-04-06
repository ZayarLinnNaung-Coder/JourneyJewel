import IconRight from "@/common/icon/IconRight";
import IconStart from "@/common/icon/IconStart";
import React from "react";
import Search from "@/public/search.png";
import Image from "next/image";
import JlptCourse from "@/public/jlptCourse.png";
import performance from "@/public/performance.png";
import income from "@/public/income.png";
import table from "@/public/table.png";
import student from "@/public/students.png";
import gsap from "gsap";
import manage from "@/public/manage.png";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const BenefitSchool = () => {
  return (
    <div className=" mt-28 md:mt-0  container max-w-full min:h-screen">
      <div className=" space-y-3 md:space-y-2">
        <div className="  flex items-center justify-center">
          <p className=" bg-webGray text-[12px] md:text-[15px] font-semibold flex items-center gap-1 rounded-full py-[4px] md:py-[8px] border border-[#DDE5ED] px-2 md:px-3 ">
            <IconStart className="  h-4 w-4 md:h-5 md:w-5" />
            Benefits for school
          </p>
        </div>
        <div className=" mt-2 flex items-center justify-center ">
          <h3 className="lg:text-[40px]  text-[20px] xl:text-[48px] tracking-normal text-center font-[500] md:w-[700px] ">
            Why Join NexLynk?
          </h3>
        </div>
        <p className=" hidden md:block px-10 leading-[30px] md:text-[18px] text-sm text-webPara text-center font-[500] mt-2">
          Partnering with NexLynk means more than just joining an educational
          platform—it&apos;s about becoming a part of a transformative journey
          to redefine language learning in Myanmar. Here&apos;s why hundreds of
          schools, language centers, and educators trust NexLynk as their
          partner
        </p>
      </div>

      {/* para 1 */}
      <div className=" mt-8 px-5 xl:px-14 py-10 md:py-14 lg:items-center bg-webBgSchool md:gap-5 xl:gap-0 rounded-2xl md:grid grid-cols-2">
        <div className=" lg:block md:flex items-center justify-center xl:ml-10 col-span-1">
          <Image
            src={student}
            alt="student"
            className=" xl:w-[400px] xl:h-[400px] w-[300px] h-[300px] object-contain"
            width={400}
            height={400}
          />
        </div>
        <div className=" col-span-1">
          <h4 className=" text-base md:text-3xl  font-[500] ">
            Access to a Growing Student Base Across Myanmar
          </h4>
          <div className=" text-[12px] md:text-[15px] space-y-6 mt-8">
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className=" w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">Expand Your Reach:</span>
                Connect with thousands of students actively seeking high-quality
                language education.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className=" w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Earn While You Sleep:{" "}
                </span>
                Our platform enables 24/7 enrollment, ensuring continuous
                revenue even outside working hours.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Invest in the Future of Education:
                </span>
                Play a vital role in shaping the next generation of skilled
                learners and professionals.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Collaborate for Long-Term Growth:
                </span>
                Join a network of forward-thinking institutions dedicated to
                innovation in education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* para 2 */}
      <div className=" mt-8 px-5 py-10 xl:px-14 md:py-14 items-center gap-10 bg-webBgSchool rounded-2xl md:grid grid-cols-2">
        <div className=" mb-5 md:hidden col-span-1">
          <div className=" flex gap-2 items-center flex-col">
            <Image
              src={Search}
              alt="serarch"
              className=" w-[200px] md:w-[280px] h-auto object-contain "
              width={400}
              height={200}
            />
            <Image
              src={JlptCourse}
              alt="JLPT"
              width={300}
              height={300}
              className=" w-[200px] h-auto md:w-[300px] md:h-[350px] object-contain"
            />
          </div>
        </div>
        <div className=" col-span-1">
          <h4 className=" md:text-3xl font-[500] ">
            Efficient Course Management Tools
          </h4>
          <div className=" text-[12px] md:text-[15px] space-y-6 mt-8">
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className=" w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Seamless Course Upload & Management:
                </span>
                Easily add, modify, and organize courses with our intuitive
                platform.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className=" w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Automated Enrollment & Student Tracking:
                </span>
                Monitor student progress and engagement effortlessly
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Leverage Smart Tools for Seamless Management:
                </span>
                Save time with advanced automation and data-driven insights.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Training Section Support:
                </span>
                We provide onboarding training to help educators and
                administrators use our tools efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className=" hidden md:block col-span-1">
          <div className=" flex gap-2 items-center flex-col">
            <Image
              src={Search}
              alt="serarch"
              className=" w-[280px] h-auto object-contain "
              width={400}
              height={200}
            />
            <Image
              src={JlptCourse}
              alt="JLPT"
              width={300}
              height={300}
              className=" w-[300px] h-[350px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* para 3 */}
      <div className=" mt-8 px-5 py-10 xl:px-14 md:py-14 bg-webBgSchool rounded-2xl  md:grid grid-cols-2">
        <div className=" col-span-1">
          <Image
            src={performance}
            alt="performance"
            width={450}
            height={450}
            className=" w-auto h-auto"
          />
        </div>
        <div className=" col-span-1">
          <h4 className=" md:text-3xl font-[500] ">
            Transparent Performance and Revenue Reports
          </h4>
          <div className=" text-[12px] md:text-[15px] space-y-6 mt-8">
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">Real-Time Analytics:</span>
                Track student engagement, course performance, and financial
                growth anytime.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Clear Monthly Payment Reports:
                </span>
                Receive detailed, easy-to-understand financial breakdowns for
                complete transparency.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Flexible Revenue Tracking:
                </span>
                View earnings in real-time, export reports, and plan for
                long-term success.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Passive Income Stream:
                </span>
                Generate continuous earnings through on-demand learning without
                additional effort.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* para 4 */}
      <div className=" mt-8 px-5 py-10 xl:px-14 md:py-14 items-center gap-20 bg-webBgSchool rounded-2xl md:grid grid-cols-2">
        <div className=" md:hidden  px-8 mb-5 col-span-1">
          <div className=" flex justify-end">
            <div className=" flex gap-2 flex-col">
              <Image
                src={income}
                alt="Imcome"
                className=" "
                width={150}
                height={200}
              />
              <Image
                src={table}
                alt="Table"
                width={200}
                height={400}
                className=" w-[500px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
        <div className=" col-span-1">
          <h4 className=" md:text-3xl font-[500] ">24/7 Earning Potential</h4>
          <div className=" text-[12px] md:text-[15px] space-y-6 mt-3 md:mt-8">
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className=" w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Earn Anytime, Anywhere:
                </span>
                Your courses generate revenue even when you&apos;re not actively
                teaching.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className=" w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Automated Student Enrollment:
                </span>
                Let the platform handle enrollments while you focus on content.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className=" w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Long-Term Financial Growth:
                </span>
                Create a sustainable income stream that grows as more students
                join.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className=" w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Invest in the Future of Education:
                </span>
                Build a strong foundation for your school’s digital expansion
                and financial success.
              </p>
            </div>
          </div>
        </div>
        <div className=" hidden md:block col-span-1">
          <div className=" flex justify-end">
            <div className=" flex gap-2 flex-col">
              <Image
                src={income}
                alt="Imcome"
                className=" "
                width={250}
                height={200}
              />
              <Image
                src={table}
                alt="Table"
                width={400}
                height={400}
                className=" w-[500px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* para 5 */}
      <div className=" mt-8 px-5 py-10 xl:px-14 md:py-14 bg-webBgSchool rounded-2xl  md:grid grid-cols-2">
        <div className=" md:flex items-center justify-center lg:block col-span-1">
          <Image
            src={manage}
            alt="performance"
            width={450}
            height={450}
            className=" w-auto h-auto"
          />
        </div>
        <div className=" col-span-1">
          <h4 className=" md:text-3xl font-[500] ">
            Leverage Smart Tools for Seamless Management
          </h4>
          <div className=" text-[12px] md:text-[15px] space-y-6 mt-8">
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Partner with a Trusted Team:
                </span>
                Our expert support ensures smooth operations and quick issue
                resolution.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Technical Support 24/7:
                </span>
                Get assistance whenever needed to keep your courses running
                efficiently.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Gain Marketing and Promotional Support:
                </span>
                Expand your student base through strategic marketing campaigns
                and visibility boosts.
              </p>
            </div>
            <div className="text-webPara flex items-start gap-3">
              <span>
                <IconRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <p>
                <span className="  pr-2 font-[700]">
                  Scalability and Future-Proofing:
                </span>
                Grow your school effortlessly with adaptable solutions designed
                for long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitSchool;
