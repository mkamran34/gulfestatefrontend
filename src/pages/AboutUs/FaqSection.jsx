import React from "react";
import { useTranslation } from "react-i18next";
import Questions from "../../components/Questions";
import part from "/assets/part.webp";

function FaqSection({ view }) {
  const { t } = useTranslation('common');
  
  const questions = [
    {
      id: "docs_required",
      question: t('faqsection.faq.docs_required.question'),
      answer: t('faqsection.faq.docs_required.answer'),
    },
    {
      id: "bank_choice",
      question: t('faqsection.faq.bank_choice.question'),
      answer: t('faqsection.faq.bank_choice.answer'),
    },
    {
      id: "insurance",
      question: t('faqsection.faq.insurance.question'),
      answer: t('faqsection.faq.insurance.answer'),
    },
    // {
    //   id: "non_resident",
    //   question: t('faqsection.faq.non_resident.question'),
    //   answer: t('faq.non_resident.answer'),
    // },
    {
      id: "pre_approval",
      question: t('faqsection.faq.pre_approval.question'),
      answer: t('faqsection.faq.pre_approval.answer'),
    },
    {
      id: "missed_payment",
      question: t('faqsection.faq.missed_payment.question'),
      answer: t('faqsection.faq.missed_payment.answer'),
    },
    {
      id: "payment_struggle",
      question: t('faqsection.faq.payment_struggle.question'),
      answer: t('faqsection.faq.payment_struggle.answer'),
    },
    {
      id: "early_closure",
      question: t('faqsection.faq.early_closure.question'),
      answer: t('faqsection.faq.early_closure.answer'),
    },
  ];

  return (
    <section className="py-10">
      {/* <div className={`relative ${view}`}>
        <img src={part} alt={t('hero.image_alt')} className="object-cover w-full" />
        <h1 className="absolute inset-0 flex font-bebas items-center text-center bottom-[20%] justify-center lg:text-8xl text-4xl text-white z-10">
          {t('faqsection.hero.title_line1')}<br />
          {t('faqsection.hero.title_line2')}<br />
          {t('faqsection.hero.title_line3')}
        </h1>
      </div>

      <div>
        <h1 className="font-bebas lg:text-8xl text-center text-5xl text-[#024959] mt-6">
          {t('faqsection.faq.section_title')}
        </h1>
        <div className="mt-12 space-y-8 lg:grid lg:grid-cols-1 px-2 lg:px-0">
          {questions.map((question) => (
            <Questions
              key={question.id}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </div> */}
    </section>
  );
}

export default FaqSection;