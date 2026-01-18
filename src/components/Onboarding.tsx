'use client'

import { useState, useEffect } from 'react'

const TIPS = [
  {
    title: 'Welcome to RTO Planner!',
    description: 'Plan your office days and time off while staying compliant with return-to-office requirements.',
    icon: '👋',
  },
  {
    title: 'Set Your Start Week',
    description: 'Click "Set Start Week" and select a day to mark when your office attendance tracking begins.',
    icon: '📅',
  },
  {
    title: 'Mark Your Office Days',
    description: 'Click on calendar days to mark them as office days. You can also click and drag to select multiple days at once.',
    icon: '🏢',
  },
  {
    title: 'Plan Time Off',
    description: 'Click a day again to change it to OOF (Out of Office). You can also use "+ Add Vacation" to plan longer trips.',
    icon: '🏖️',
  },
  {
    title: 'Stay Compliant',
    description: 'For each week, you need 3+ office days in 8 of your last 12 weeks. Click any week number to check its status and get a summary on any at-risk weeks.',
    icon: '✅',
  },
]

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('rto-onboarding-complete')
    if (!hasSeenOnboarding) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    const handleShowOnboarding = () => {
      localStorage.removeItem('rto-onboarding-complete')
      setCurrentStep(0)
      setIsVisible(true)
    }
    window.addEventListener('show-onboarding', handleShowOnboarding)
    return () => window.removeEventListener('show-onboarding', handleShowOnboarding)
  }, [])

  const handleNext = () => {
    if (currentStep < TIPS.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSkip()
    }
  }

  const handleSkip = () => {
    localStorage.setItem('rto-onboarding-complete', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  const tip = TIPS[currentStep]
  const isLastStep = currentStep === TIPS.length - 1

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleNext}
    >
      {/* Tooltip Card */}
      <div
        className="relative mx-4 max-w-md transform transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-2xl bg-white p-8 shadow-2xl">
          {/* Progress Dots */}
          <div className="mb-6 flex justify-center gap-2">
            {TIPS.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'w-6 bg-gradient-to-r from-indigo-500 to-purple-500'
                    : index < currentStep
                    ? 'bg-indigo-300'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          {/* Icon */}
          <div className="mb-4 text-center text-5xl">{tip.icon}</div>

          {/* Content */}
          <h2 className="mb-3 text-center text-2xl font-bold text-gray-800">
            {tip.title}
          </h2>
          <p className="mb-6 text-center text-gray-600 leading-relaxed">
            {tip.description}
          </p>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLastStep ? "Let's Go!" : 'Next'}
          </button>

          {/* Tap hint */}
          <p className="mt-4 text-center text-xs text-gray-400">
            Tap anywhere to continue
          </p>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleSkip()
        }}
        className="fixed bottom-6 right-6 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
      >
        Skip
      </button>
    </div>
  )
}
