export function Stats() {
  return (
    <div className="bg-[#0B1120] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Transforming businesses through strategic AI consulting</h2>
            <p className="text-gray-400">
              Our AI consulting services help organizations leverage cutting-edge technology to drive innovation and
              growth. We analyze your business needs, develop custom AI strategies, and implement solutions that deliver
              measurable ROI.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/woman-and-robot.jpg"
              alt="AI Consulting Analytics Dashboard"
              className="rounded-lg shadow-lg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

