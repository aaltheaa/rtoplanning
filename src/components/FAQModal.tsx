'use client'

import { useState } from 'react'

const FAQS = [
  {
    question: 'What is an RTO mandate?',
    answer:
      'An RTO (Return to Office) mandate is a company policy requiring employees to work from a physical office a minimum number of days per week or rolling window. Many organizations adopted RTO mandates after remote-work periods, specifying rules like "3 days in the office in 8 of every 12 rolling weeks."',
  },
  {
    question: 'How do I know if I am going to the office enough?',
    answer:
      'This return-to-office calculator tracks each week you mark office days and checks whether you meet the required threshold (e.g., 3 days in 8 of 12 rolling weeks). Weeks shown in amber are at risk; weeks in green are compliant.',
  },
  {
    question: 'What does the "3 days in 8 of 12 weeks" rule mean?',
    answer:
      'This RTO compliance rule requires that within any rolling 12-week window, at least 8 of those weeks must have 3 or more office days. It is a rolling average, so each week the oldest week drops off and a new week is added to the window.',
  },
  {
    question: 'Is this tool free to use?',
    answer:
      'Yes. RTO Planning is completely free with no account or sign-up required. Your schedule is saved in your browser and can be shared via a URL.',
  },
  {
    question: 'Can I share my RTO schedule with others?',
    answer:
      'Yes. The tool generates a shareable URL that encodes your full attendance schedule, so you can send it to a manager or colleague without any account or export step.',
  },
]

export default function FAQModal({ onClose }: { onClose: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-lg transform transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-2xl bg-white p-8 shadow-2xl max-h-[80vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
              aria-label="Close FAQ"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Accordion */}
          <dl className="space-y-2">
            {FAQS.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <dt className="text-sm font-medium text-gray-800">{faq.question}</dt>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {openIndex === index && (
                  <dd className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.answer}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
