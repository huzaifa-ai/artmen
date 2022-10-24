import React, { useEffect, useState } from 'react';
import Faq from 'react-faq-component';
import '../css/Faqs.css';

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
    <div className=" py-20 px-8 bg-white tracking-widest h-screen text-xl md:text-5xl text-center ">
      <h1 className="text-black pb-14">MARKET YOUR BUISNESS</h1>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}

export default Faqs;
