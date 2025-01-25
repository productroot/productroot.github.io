import { Zap, Maximize, Clock } from "lucide-react"

export function Services() {
  return (
    <div className="bg-[#0B1120] text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our AI Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Zap className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Workflow Automation with AI</h3>
            <p className="text-gray-400">
              Streamline your business processes with intelligent AI-driven automation solutions
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Maximize className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Maximizing Product Value</h3>
            <p className="text-gray-400">
              Enhance your products with AI capabilities to deliver more value to your customers
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Clock className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Custom AI Model Training</h3>
            <p className="text-gray-400">
              Develop and train bespoke AI models tailored to your specific business needs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

