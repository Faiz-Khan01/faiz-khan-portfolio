import React, { useState } from 'react';
import { 
  Server, 
  Play, 
  Copy, 
  Check, 
  RefreshCw, 
  Send, 
  Code, 
  ShieldAlert, 
  Clock, 
  CheckCircle2, 
  Terminal,
  Zap
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ApiSandbox() {
  const { apiEndpoints } = resumeData;
  const [selectedEndpoint, setSelectedEndpoint] = useState(apiEndpoints[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseOutput, setResponseOutput] = useState(selectedEndpoint.responseBody);
  const [activeTab, setActiveTab] = useState('response'); // 'response' | 'request'
  const [copied, setCopied] = useState(false);
  const [simulatedTime, setSimulatedTime] = useState(selectedEndpoint.responseTime);

  const handleSelectEndpoint = (ep) => {
    setSelectedEndpoint(ep);
    setResponseOutput(ep.responseBody);
    setSimulatedTime(ep.responseTime);
  };

  const handleSendRequest = () => {
    setIsLoading(true);
    // Simulate realistic network & backend latency
    const randomLatency = Math.floor(Math.random() * 25) + 15;
    setTimeout(() => {
      setIsLoading(false);
      setResponseOutput(selectedEndpoint.responseBody);
      setSimulatedTime(`${randomLatency}ms`);
    }, 450);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(responseOutput, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sandbox" className="py-24 relative overflow-hidden bg-[#070102]/95 border-t border-red-950/40">
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono font-semibold mb-4">
            <Server className="w-3.5 h-3.5" />
            <span>Interactive REST API Sandbox</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Test Live Backend <span className="gradient-text-red">Endpoints</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Execute simulated requests against Faiz's Spring Boot microservices endpoints. Inspect JSON payloads, JWT token generation, Eureka discovery registries, and Razorpay signature validations.
          </p>
        </div>

        {/* Sandbox Console UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Endpoint Picker */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider px-2 flex items-center justify-between">
              <span>Select Endpoint</span>
              <span className="text-red-400 font-bold">{apiEndpoints.length} Ready</span>
            </div>

            {apiEndpoints.map((ep) => {
              const isSelected = selectedEndpoint.id === ep.id;
              const isGet = ep.method === 'GET';

              return (
                <button
                  key={ep.id}
                  onClick={() => handleSelectEndpoint(ep)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#180407] border-red-500 shadow-lg shadow-red-600/15'
                      : 'bg-[#0e0305]/80 border-red-950/80 hover:bg-[#150407] hover:border-red-900'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      isGet 
                        ? 'bg-amber-950/80 text-amber-300 border border-amber-500/40' 
                        : 'bg-red-950/80 text-red-300 border border-red-500/40'
                    }`}>
                      {ep.method}
                    </span>
                    <span className="font-display font-semibold text-slate-200 text-xs truncate">
                      {ep.name}
                    </span>
                  </div>
                  <p className="font-mono text-[11px] text-slate-400 truncate">
                    {ep.path}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-2 line-clamp-1">
                    {ep.service}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Console & Response Viewer */}
          <div className="lg:col-span-8 bg-[#0e0305] rounded-3xl border border-red-950/80 shadow-2xl overflow-hidden">
            
            {/* Request URL & Action Bar */}
            <div className="p-4 sm:p-5 bg-[#120204] border-b border-red-950 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              
              {/* Method & URL Pill */}
              <div className="flex-1 flex items-center bg-[#070102] rounded-xl border border-red-950 px-3.5 py-2 font-mono text-xs overflow-x-auto">
                <span className={`font-bold mr-3 ${
                  selectedEndpoint.method === 'GET' ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {selectedEndpoint.method}
                </span>
                <span className="text-slate-200 whitespace-nowrap">
                  {selectedEndpoint.path}
                </span>
              </div>

              {/* Send Button */}
              <button
                onClick={handleSendRequest}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-500 hover:from-red-500 hover:to-rose-500 transition-all shadow-lg shadow-red-600/30 disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Request</span>
                  </>
                )}
              </button>

            </div>

            {/* Sub-info & Metadata */}
            <div className="px-5 py-3 bg-[#0a0204] border-b border-red-950/60 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400 font-mono">
                <span className="text-slate-400">Service:</span>
                <span className="text-rose-200">{selectedEndpoint.service}</span>
              </div>

              <div className="flex items-center gap-3 font-mono">
                <div className="flex items-center gap-1 text-red-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Status: 200 OK</span>
                </div>
                <span className="text-red-950">|</span>
                <div className="flex items-center gap-1 text-amber-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Latency: {simulatedTime}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="px-5 py-3 bg-[#0e0305] text-xs text-slate-300 border-b border-red-950/60">
              {selectedEndpoint.description}
            </div>

            {/* Tabbed View: Response / Request Body */}
            <div className="flex items-center justify-between px-5 pt-3 bg-[#0a0204] border-b border-red-950">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('response')}
                  className={`pb-2.5 px-3 text-xs font-mono font-medium transition-all ${
                    activeTab === 'response'
                      ? 'text-red-400 border-b-2 border-red-500 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Response JSON
                </button>
                {selectedEndpoint.requestBody && (
                  <button
                    onClick={() => setActiveTab('request')}
                    className={`pb-2.5 px-3 text-xs font-mono font-medium transition-all ${
                      activeTab === 'request'
                        ? 'text-red-400 border-b-2 border-red-500 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Request Payload
                  </button>
                )}
              </div>

              <button
                onClick={handleCopyJson}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 pb-2 font-mono"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-red-400" />
                    <span className="text-red-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy JSON</span>
                  </>
                )}
              </button>
            </div>

            {/* JSON Output Viewer */}
            <div className="p-5 bg-[#070102] min-h-[260px] max-h-[360px] overflow-y-auto font-mono text-xs leading-relaxed text-slate-200">
              {activeTab === 'response' ? (
                <pre className="text-rose-300">
                  {JSON.stringify(responseOutput, null, 2)}
                </pre>
              ) : (
                <pre className="text-amber-300">
                  {JSON.stringify(selectedEndpoint.requestBody, null, 2)}
                </pre>
              )}
            </div>

            {/* Footer status */}
            <div className="px-5 py-2.5 bg-[#0e0305] border-t border-red-950 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-rose-300">
                <Zap className="w-3.5 h-3.5 text-red-400" />
                Response Content-Type: application/json;charset=UTF-8
              </span>
              <span className="text-slate-400">Security: Bearer JWT Validated</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
