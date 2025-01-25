export function CodePreview() {
  return (
    <div className="bg-[#0B1120] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-gray-900 p-6 rounded-lg">
            <pre className="text-blue-400 whitespace-pre-wrap word-break-break-word">
              <code style={{ display: "block", overflowX: "auto" }}>{`# AI Agent Configuration Parameters
agent_config = {
    "model": "gpt-o1",
    "temperature": 0.7,
    "max_tokens": 150,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "stop": ["\n", "Human:", "AI:"]
}

# Initialize AI agent
ai = AIAgent(**agent_config)

# Run agent
response = ai.generate_response(user_input)`}</code>
            </pre>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">AI Agent Configuration and Implementation</h3>
            <p className="text-gray-400 mb-6">
              We leverage cutting-edge AI agents for building intelligent solutions. Including internal knowledge
              centralization solutions and interactive chatbots with natural voice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

