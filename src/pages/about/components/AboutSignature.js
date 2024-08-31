import Image from "next/image";
import Sign from "../../../assets/Images/img.png";

function AboutSignature() {
  return (
    <div className="entry-content-wrapper clearfix">
      <div
        className="av_textblock_section"
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        <div className="avia_textblock" itemProp="text">
          <h2 className="text-[20px] md:text-[30px] text-black font-semibold mb-[30px] mt-[50px] md:text-center px-[20px] text-left">
          Customized Solutions for Every Space
          </h2>
        </div>
      </div>
      <div className="relative w-[300px] h-[1px] md:mt-3 mb-5 overflow-visible m-auto ">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-wave"></div>
        </div>
        {/* <div className="absolute top-1/2 left-[-5px] transform -translate-y-1/2 w-3 h-3 border-2 border-gray-400 rounded-full"></div>
        <div className="absolute top-1/2 right-[-5px] transform -translate-y-1/2 w-3 h-3 border-2 border-gray-400 rounded-full"></div> */}
      </div>

      <div className="hr hr-short hr-center">
        <span className="hr-inner">
          <span className="hr-inner-style"></span>
        </span>
      </div>

      <div
        className="av_textblock_section"
        itemScope
        itemType="https://schema.org/CreativeWork"
      >
        <div
          className="mt-[50px] text-slate-500 text-[19px] w-[75%] text-center m-auto"
          itemProp="text"
        >
          <div className="text-[16px] md:text-xl">
            <b>We</b> deliver premium construction and interior design services,
            ensuring every detail is perfect because your satisfaction is our
            top priority.
            <br />
            <br />
          </div>
          <div className="text-[16px] md:text-xl">
            Bring more creativity, more precision, and more bespoke
            craftsmanship to your next residential or commercial project.
            Contact us directly at{" "}<br/>
            <b className="text-customRed">+91 7008969769</b> or through our main
            office at <b className="text-customRed">+91 7326071067</b>.
            <br />
            <br />
          </div>
          <div className="text-[16px] md:text-xl">
            From residential makeovers to commercial renovations across the
            country, we make spaces you'll love to live and work in.
          </div>
          <div>
            <Image
              className="wp-image-3464 aligncenter w-[300px] m-auto"
              src={Sign}
              alt="Company Managing Director's Signature"
              width={200}
            />
          </div>
          <div className="mt-[0px]">
            <em>
              <strong className="text-customRed">
                Alok Rath – Managing Director
              </strong>
            </em>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSignature;
