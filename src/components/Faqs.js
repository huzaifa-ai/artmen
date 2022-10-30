import React, { useEffect, useState } from 'react';
import Faq from 'react-faq-component';
import '../css/Faqs.css';
import Plan from '../plan/plan.pdf';

function Faqs() {
  const data = {
    title: 'Questions? Look here.',
    rows: [
      {
        title: 'Who is a Social Venturist? ',
        content: `A Social Venturist is someone who refers others to www.artmen.co. In other words, a Social Venturist is a referrer in our referral program.`,
      },
      {
        title: 'Who can refer someone to Art.com?',
        content: `Anyone 18 years or older who is a legal resident of their specific country can refer someone to Artmen.co. Share the love!`,
      },
      {
        title: 'How do I refer someone to Art.com and earn credit?',
        content: `You can refer someone through your username.   `,
      },
      {
        title: 'What is a qualified referral?',
        content: `A qualified referral is anyone who purchases through your username. They must meet the minimum order amount as well as other criteria. `,
      },
      {
        title:
          'I have earned referral credits. How do I view and access it now',
        content: `You can view your earned credit by logging into your account your assigned official email account like artmen.co.  `,
      },
      {
        title: 'How can I get my credit balance?',
        content: `Your balance will be transferred to your account on a monthly base, usually on the first Monday of each month. `,
      },
    ],
  };

  const styles = {
    bgColor: 'bg-gray-800',
    titleTextColor: 'black',
    rowTitleColor: 'black',
    rowContentColor: 'black',
    arrowColor: 'black',
  };

  const config = {
    animate: true,
    arrowIcon: 'V',
    tabFocus: true,
  };

  return (
    <div className=" py-20 px-8 bg-white tracking-widest  text-xl  text-left box-wrapper ">
      <h1 className="text-black pb-14 text-center text-5xl">
        MARKET YOUR BUISNESS
      </h1>
      <div className="flex flex-col space-y-4 text-center pb-20 lg:px-64">
        <p>
          At Artmen Services we are always happy to welcome applications and
          enquiries. If you are interested in employment opportunities, you can
          enroll as our Social Venturist.
        </p>
        <p>
          Artmen Services makes it easy to work on your own terms. We provide
          you with resources to get started quickly and run your business from
          anywhere. Use your mobile device to order the collection, track sales,
          access free education courses and much more.
        </p>
      </div>
      <div className="flex-col space-y-20 pb-20 ">
        <div className="max-w-3xl m-auto box p-10 text-lg md:p-20">
          <h1>Audience</h1>
          <p>Find shoppers with content marketing. </p>
          <h1>Attract the right customers</h1>
          <p>
            Identify your brand's ideal shoppers and learn how to reach them
            with content marketing through social media.
          </p>
          <h1>Blog</h1>
          <p>Build your audience and boost traffic with Artmen, Co. </p>
          <h1>Customer Groups</h1>
          <p>
            Target unique customer groups based on your social network with
            customer segmentation.
          </p>
        </div>
        <div className="max-w-3xl m-auto box p-10 text-lg md:p-20">
          <h1>Market Campaigns</h1>
          <p>Reach your audience and promote the art.</p>
          <h1>Campaign Creation</h1>
          <p>Create online marketing campaigns so the right people see you. </p>
          <h1>Email marketing </h1>
          <p>
            Create email campaigns from your official Artmen Services email
            account.
          </p>
          <h1>Google Performance Max </h1>
          <p>
            Set a daily budget and let Google’s technology run strategic
            campaigns for you.
          </p>
          <h1>Facebook or Instagram Ads </h1>
          <p>
            Choose an audience and feel confident you’re targeting ideal
            shoppers.
          </p>
        </div>
        <div className="max-w-3xl m-auto box p-10 text-lg md:p-20">
          <h1>Insights</h1>
          <p>Improve each campaign with reports</p>
          <h1>Improve your efforts </h1>
          <p>Reduce guesswork and make campaigns better over time</p>
        </div>
        <div className="max-w-3xl m-auto box p-10 text-lg md:p-20">
          <h1>Relationships</h1>
          <p>
            Own your customer relationships and drive growth from a single
            platform
          </p>
          <h1>Build sustainable customer relationships. </h1>
          <p>Own your customer relationships to drive growth.</p>
          <h1>Know more about your customers</h1>
          <p>
            Securely collect and organize your data in one place to connect with
            buyers everywhere.
          </p>
          <h1>Build unique customer groups</h1>
          <p>
            Create segments that group important, interesting, or potentially
            valuable customers together.
          </p>
          <h1>Turn your data into revenue </h1>
          <p>
            Start by discovering how you can leverage things you already have –
            connections, education and achievements – into marketing success.
            You may already have dozens of relationships that you can capitalize
            on for growth.
          </p>
          <h1>Automate and personalize messages</h1>
          <p>
            Build automated marketing flows that connect with customers the
            right way at the right time in just a few clicks.
          </p>
        </div>
      </div>

      <Faq data={data} styles={styles} config={config} />
      <p className="  text-black text-end text-sm pt-10">
        {' '}
        <span className="text-blue-800 cursor-pointer ">
          <a href={Plan} download className="b">
            Click here
          </a>
        </span>{' '}
        to download our welfare plan for Social Venturist{' '}
      </p>
    </div>
  );
}

export default Faqs;
