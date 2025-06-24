import React from 'react'

const FooterCta = () => {
  return (
    <footer className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 mb-8">
            Join our community of talented artists and take your career to the next level.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>✓ Free to join</span>
            <span>✓ No hidden fees</span>
            <span>✓ Professional support</span>
            <span>✓ Instant profile setup</span>
          </div>
        </div>
      </footer>
  )
}

export default FooterCta