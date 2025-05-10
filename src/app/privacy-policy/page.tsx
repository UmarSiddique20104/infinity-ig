'use client'
import React, { useContext } from "react";
import { MenuContext } from "../components/context/MenuContext";

const PrivacyPolicypage = () => {
  const { menuState, setMenuState } = useContext(MenuContext);
  const handleMenuClick = () => {
    // Menu state update karein
    setMenuState(false);
  };
  return (
    <div className="25s:container mx-auto" onClick={handleMenuClick}>
      <div className="hero-section bg-cover bg-[url('/assets/newbg.png')]">
        <div className="lg:flex justify-center text-center xl:px-32 lg:px-20 px-10 py-20 ">
         
          <div className="lg:ps-10 ps-2 pt-7 lg:pt-4">
            <h1 className="text-5xl xl:text-6xl xxl:text-8xl font-bold">
            Privacy Policy
            </h1>
          </div>
        </div>
      </div>
      <div className="xl:px-32 lg:px-20 px-10 my-9">
      <h3 className="xl:px-10 lg:px-10 px-10 rounded bg-[#1F1F1F08] flex justify-center text-3xl uppercase font-medium text-left">We have drawn up this Privacy Policy to help you better understand what information about your visit to the website we collect, how we use it, and what your choices as regards it are. Therefore, we would kindly ask you to take a moment and pay attention to the following.
      </h3> 
       
      </div>

      <div className="xl:px-32 lg:px-20 px-10">
        <dt className="ms-3 list-decimal list-inside sm:font-semibold sm:text-3xl text-3xl font-bold">
            <li>
              <span className=" sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5">Definitions</span>
              <dd className="list-disc">
                <li className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">Infinity Graphic Studio, seated in kralja Milana Obrenovica 18 street, 26000 Pancevo, Serbia (hereinafter referred to as: “Infinity Graphic”, “we”, “us”, “our”) refers to the legal entity governing the websites www.broworks.net</li>
                <li className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">Personal data – means data referring to private persons who can be identified at some point.</li>
                <li className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">User – means our website visitor.Client – means the person who uses our services.</li>
                <li className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">Usage data – means data the user enables us to use for the purposes of user experience improvement by clearly accepting them.</li>
                <li className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">Cookies – mean small data sets which are kept in the user’s web browser while browsing the website.</li>
              </dd>
            </li>


            <li>
              <span className=" sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5">About us</span>
              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">This website is the property of Infinity Graphic, seated in the kralja Milana Obrenovica 18 street in Pancevo, Serbia.Infinity Graphic is a privately held company registered in the Republic of Serbia:</p>
              <dd className="list-disc text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
                <li>Company ID number: 65316374</li>
                <li>TIN: 111297868</li>
                <li>Email: infinitygraphic@gmail.com</li>
                
              </dd>
            </li>

            <li>
              <span className=" sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5">Relevant legislation</span>
              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">This web page was designed with respect to the relevant Serbian and international legislation as regards data protection and privacy of its users:</p>
              <dd className="list-disc text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
                <li>Law on Personal Data Privacy of 2018 of the Republic of Serbia</li>
                <li>General Data Protection Regulation 2016 (GDPR) of the European Parliament and of the Council</li>
                
                
              </dd>
            </li>

            <li>
              <span className=" sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5">Who collects and processes information</span>
              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">This web page was designed with respect to the relevant Serbian and international legislation as regards data protection and privacy of its users:</p>
              <dd className="list-disc text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
                <li>On the basis of GDPR, every website user can make a choice: to accept or decline the collection of their personal data by the website.</li>
                <li>Infinity Graphic collects and processes only the necessary data about users who have voluntarily accepted and given consent to such data processing, with a clearly stated purpose, in accordance with the procedures governed by legislation.</li>
                
                
              </dd>
            </li>


            <li>
              <span className=" sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5">Data collection:</span>
              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">5.1. Contact or order forms</p>
              <dd className="list-disc text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
                <li>When you contact us via the contact form, order form or email, your personal data will be collected only upon your written consent, by ticking the box which states that you have read and accepted or declined our Privacy Policy and our Cookie Policy, which is why we kindly ask you to read these two pages thoroughly.</li>
                <li>This data will be stored and processed only for the purpose of answering all your queries or getting in contact with you for business purposes and the related technical administration. Such data includes your name, email address (hereinafter referred to as: email), phone number, description of your needs and other information you choose to give us.</li>
                <li>Your data will be completely deleted upon your request, and we will not store or use them after we no longer need them.</li>
                <li>Upon your written request, we will send you the information about the data we have collected and stored about you until that moment, incorporated in an electronic form.</li>
              </dd>

              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">5.2. Website hosting servers</p>
              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">Our website is hosted by Webflow, a company whose servers are located in San Francisco, USA.</p>
              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">This company and its data center/server are protected by the following:</p>
              <dd className="list-disc text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
                <li>ISO 27001 / CIS Critical Security Controls</li>
                <li>SOC2 Type I</li>
                <li>Webflow’s office is secured by key fob  access doors. Entrances and exits are observed and captured on a closed-circuit (CCTV) camera. The office is monitored and protected by an alarm system.</li>
                <li>Employees have unique logins for all business critical systems and two-factor authentication is enforced wherever possible.</li>
                <li>All employee laptops are managed, have encrypted hard drives and are monitored with endpoint detection and response software.</li>
                <li>The internal network is restricted, segmented and password protected.</li>
                <li>Read everything about Webflow security‍</li>
              </dd>

              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">When you visit our web page, our web server stores usage data from your computer or general information about your visit but is not able to recognize or store any individual personal data. We cannot identify you personally unless you willingly give us your personal data. Personal data is gathered only if you voluntarily publish such data for agreement purposes</p>
              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">The traffic (file transferring) between this web page and your search engine is encrypted and delivered entirely via HTTPS. HyperText Transfer Protocol Secure (HTTPS) refers to an internet protocol which combines HTTP and SSL/TLS protocols. This protocol enables an encrypted communication and safe identification of the Internet Service Provider (ISP).</p>

              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">5.3. Cookie policy and data collection via cookies</p>
              <dd className="list-disc text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
                <li>Whenever you browse a web location, mobile app or use any other Internet service, certain information is created and verified upon your approval, that is, having accepted the Terms of Use. This is also valid in case of visiting Infinity Graphic website.</li>
                <li>Here is a piece of information we gather:</li>
              </dd>

              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">Similarly to the majority of websites, we use Google Analytics (GA) for user interaction tracking. We use this data to count the number of visits, that is the number of users who visit our website, and to understand their needs better so as to improve user experience (UX).</p>
              <dd className="list-disc text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
                <li>For more information about these rules, please visit our Cookie Policy webpage.</li>
              </dd>
            </li>

            <li>
              <span className=" sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5">What we know about you</span>
              
              <dd className="list-disc text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
                <li>We gather only data for which you have given us your consent.</li>
                <li>For example, we do not know your email address unless you send it to us via email or contact forms. This data is used only within our company and we do not sell it nor distribute it to third parties.</li>
                <li>If you have already given us your email but do not wish to receive any emails or newsletters in the future, you can contact us via infinitygraphic@gmail.com email and ask for your personal data removal.</li>
                
              </dd>
            </li>


            <li>
              <span className=" sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5">How long we keep your data</span>
              
              <dd className="list-disc text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
                <li>We keep your information no longer than it is necessary for us to provide you with the service and accomplish the purposes set out in this Policy.</li>
                <li>If the conditions for keeping your data are no longer applicable, we will completely remove and delete them from our databases.</li>
                
              </dd>
            </li>

            <li>
              <span className=" sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5">Third party data processing</span>
              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">We collaborate with third party data processors who process data on our behalf. These third parties are carefully selected and act in accordance with the laws referred to in Section 3.</p>
              <dd className="list-disc text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">
                <li>Google (Privacy policy)</li>
                <li>MailChimp (Privacy policy)</li>
                <li>Facebook (Privacy policy)</li>
                <li>Webflow (Privacy policy)</li>
                
              </dd>
            </li>

            <li>
              <span className=" sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5">Data breaches</span>
              <p className="text-gray-400 leading-5 pe-8 ms-3 my-5 text-base break-words font-normal">We will inform our users about any unlawful data breaches of this website’s database or databases of any of our third-party data processors and report such events to all relevant persons within our company and to the authorities within 72 hours of the breach if it is obvious to us that personal data stored in an identifiable manner has been stolen.</p>
            </li>

            <li>
              <span className=" sm:font-semibold sm:text-3xl text-3xl pt-20 sm:pb-10 pb-5">Amendments to this privacy policy</span>
             
              <dd className="list-disc text-gray-400 leading-5 pe-8 ms-3 mt-5 text-base break-words font-normal">
                <li>Infinity Graphic can amend this Privacy Policy as needed. This Policy was drawn up and updated on May 05, 2021.</li>
                <li>Infinity Graphic keeps the right to change this Privacy Policy when necessary, in order to align and act in accordance with amendments to relevant legislation and regulations.</li>
                <li>Should such amendments or changes occur, we will not explicitly inform our clients or website users thereof. Instead, we recommend you to visit this page occasionally to stay informed about the changes to this Policy.</li>
                <li>If you think that Infinity Graphic does not abide by this Privacy Policy, please contact us via our Contact page.</li>
                
              </dd>
              <p className="text-gray-400 leading-5 pe-8 ms-3 mb-5 text-base break-words font-normal">Last updated on Feb 20, 2024</p>
            </li>
        </dt>
        </div>
    </div>
  );
};

export default PrivacyPolicypage;
