'use client'
import React, { useContext } from "react";
import { MenuContext } from "../components/context/MenuContext";

const TermsAndConditionspage = () => {
  const { menuState, setMenuState } = useContext(MenuContext);
  const handleMenuClick = () => {
    // Menu state update karein
    setMenuState(false);
  };
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="25s:container mx-auto" onClick={handleMenuClick}>
      <div className="hero-section bg-[url('/assets/newbg.png')] bg-cover">
        <div className="lg:flex justify-center text-center xl:px-32 lg:px-20 xsm:px-10 px-4 py-20 ">
          <div className="lg:ps-10   ps-2 pt-7 lg:pt-4">
            <h1 className="text-5xl xl:text-6xl xxl:text-8xl font-bold">
              Terms & Conditions
            </h1>
          </div>
        </div>
      </div>
      <div className="xl:px-32 lg:px-20 xsm:px-10 px-4 my-9">
        <h3 className="xl:px-10 lg:px-10 px-10 rounded bg-[#1F1F1F08] flex justify-center text-3xl uppercase font-medium text-left">
          On this page, you can get detailed information on payment methods and
          the conditions under which you can use the services of Infinity
          Graphic.
        </h3>
      </div>

      <div className="xl:px-32 lg:px-20 xsm:px-10 px-4">
        <ol className="ms-3 list-decimal list-inside sm:font-semibold sm:text-3xl text-3xl font-bold">
          <li>
            <span className="sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5 uppercase">
              Introduction
            </span>
            <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
              The terms and conditions of cooperation between Infinity Graphic
              and the users of our company’s services, website visitors and
              others who want to access or use the services are defined
              hereinafter. Please kindly read these Terms of Use carefully:
              (“Terms”, “Terms of Use”) before using the website
              www.broworks.net (“Service”, “our website”) which Broworks (“we”,
              “us” or “ours”) manages.
            </p>
          </li>

          <li>
            <span className="sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5 uppercase">
              Use of services and access to the site
            </span>
            <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
              Accepting and using the website Infinity Graphic, or using any
              services that we offer, you are agreeing on complying with and
              accepting the terms of use which are described below. If you do
              not agree with these terms and conditions of use, please refrain
              from using our company&apos;s website or our services.
            </p>
          </li>

          <li>
            <span className="sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5 uppercase">
              ‍General conditions
            </span>
            <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
              These Terms of Use are an integral part of Infinity Graphic and as
              such they represent a contract between the company Infinity
              Graphic, registered in the Republic of Serbia with an
              identification number 65316374 and a tax number 111297868, and the
              users of our services, website visitors, and everyone who would
              want to start using our services.
            </p>

            <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
              This contract defines the rights and obligations relating to the
              use of our company’s website and our services.
            </p>
          </li>

          <li>
            <span className="sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5 uppercase">
              ‍Acceptance of the offer
            </span>
            <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
              ‍Before starting the project and doing any kind of a work on your
              behalf, we need your approval to proceed as a confirmation that
              you agree that the project can start. Payment of your deposit
              (advance payment) will be considered as your confirmation to
              continue, if the funds are needed at this stage. If not, such an
              approval must be given in written form - by an e-mail or a letter
              - no project will start until we get the approval.
            </p>
          </li>

          <li>
            <span className="sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5 uppercase">
              ‍Guarantee and ownership
            </span>
            <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
              Every website that we create by us for the client has a guarantee
              of 30 days. After this period, and because the full access to the
              website’s data is enabled for our clients, we cannot accept the
              responsibility if the website is hacked, is down, or
              dysfunctional, since we no longer have a complete control over the
              way the website is used. Software which provides the use of the
              website and which is associated with the website, such as Webflow,
              WordPress or WordPress plug-ins, becomes your property and it is
              your responsibility to ensure that such software is updated in a
              timely manner in order to ensure the continuous work of the
              website. We offer website maintenance packages that cover the
              software update, and we offer it as an additional service.
              Ownership of the project, code, and design belongs to the client,
              who is also responsible for all the information that is on the
              website. ‍Infinity Graphic reserves the right to the signature at
              the bottom of the website as a contractor and author.
            </p>
          </li>

          <li>
            <span className="sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5 uppercase">
              Payment and deposit
            </span>
            <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
              ‍Prior to any activity, it is necessary to make an advance
              payment, which acts as a security measure for Infinity Graphic
              human and technical resources. The advance payment is 50% of the
              overall project cost, unless the offer defines a lower or a higher
              percentage of advance payment depending on the size and the type
              of the project. We will use our legal right to claim interest in
              accordance with commercial law, if the client has not paid the
              debt or if they have broken the payment deadline (stated value
              date). All amounts (funds) paid to Infinity Graphic are
              non-refundable because they serve as a security measure and a
              reserve of both human and technical resources, and they are a
              guarantee to work upon the project. If the paid amount is larger
              than what is owed by the pro forma invoice, the rest will remain
              in your account as a loan, which can be used for any service we
              offer. The advance payment (deposit) will be taken as your
              intention to continue your cooperation with us until the
              completion of the project for which we are engaged, and it obliges
              you to make a full payment once the project is completed.
            </p>
          </li>

          <li>
            <span className="sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5 uppercase">
              ‍‍Confidential information
            </span>
            <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
              Infinity Graphic does not want to receive confidential information
              through its website, and to classify information as confidential
              it is necessary to sign a confidentiality agreement where
              everything would be clearly defined. Infinity Graphic will provide
              full support to everyone regarding the protection of personal
              rights, the right to privacy, property, and intellectual property.
            </p>
          </li>

          <li>
            <span className="sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5 uppercase">
              ‍Use of our site and disclaimer of liability
            </span>
            <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
              There is no charge to access the site, unless there is your
              obligation to pay the price of a communication connection
              (Internet) which you use to visit the site. You access the website
              at your own responsibility. Our services are intended exclusively
              for adults. Your access to the website can be disabled, limited or
              terminated at any time, if we notice any kind of an abuse of the
              website coming from your side. We cannot guarantee that the page
              will be displayed without errors and that the data-center will
              always ensure the availability of it. Content on the website can
              be changed without a prior notice. Infinity Graphic will not be
              responsible, in any way, for any inaccuracy or error in relation
              to information and materials which were found and published.
              Unauthorized use of the website, security breaches, or misuse of
              data access can lead to damage claim and / or will be treated as a
              criminal offense punishable under the applicable criminal law.
            </p>
          </li>

          <li>
            <span className="sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5 uppercase">
              Copyright and intellectual property
            </span>
            <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
              Copying and misuse of information on our website, as well as
              materials from the site, is not allowed. You cannot reproduce or
              distribute downloaded information from website, including, but not
              limiting to text, graphics, video, code and / or software without
              our previous written authorization. If there is a button to share
              the content from our website, it is possible to share the content
              only in that manner.
            </p>
          </li>

          <li>
            <span className="sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5 uppercase">
              Change of terms and contact
            </span>
            <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
              Infinity Graphic can change the Terms of Use at any time, without
              a prior notice. For any questions or concerns, please contact us
              at infinitygraphic@gmail.com
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default TermsAndConditionspage;
