export function DeploymentOptions() {
  return (
    <div className="bg-[#0B1120] text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Flexible deployment options</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-500">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Cloud Native</h3>
            <p className="text-gray-400">Deploy your AI solutions in the cloud with our managed services</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-500">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12h8" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">On-Premise</h3>
            <p className="text-gray-400">Keep your data secure with on-premise deployment options</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-500">
                <path d="M12 3v18M5 8l14 8M5 16l14-8" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Hybrid</h3>
            <p className="text-gray-400">Get the best of both worlds with hybrid deployment</p>
          </div>
        </div>
      </div>
    </div>
  )
}

