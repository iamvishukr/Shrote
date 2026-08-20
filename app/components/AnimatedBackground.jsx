"use client";

import React from "react";

/**
 * Modern AI & Machine Learning Animated Background.
 * Features 5 distinct floating AI/ML 3D visual assets, neural network synapses,
 * live data flow streams, and telemetry cards.
 */
export default function AnimatedBackground({ variant = "neural", className = "" }) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden z-0 select-none ${className}`}>
      
      {/* ── AMBIENT GRADIENT GLOW ORBS ── */}
      <div className="absolute -top-[10%] left-[15%] w-[650px] h-[650px] bg-[#00A88F]/12 rounded-full blur-[160px] animate-bg-orb-1" />
      <div className="absolute top-[35%] -right-[10%] w-[700px] h-[700px] bg-[#0d2a4a]/8 rounded-full blur-[180px] animate-bg-orb-2" />
      <div className="absolute bottom-[5%] left-[10%] w-[600px] h-[600px] bg-[#00d4b4]/10 rounded-full blur-[150px] animate-bg-orb-3" />

      {/* ── 5 FLOATING 3D AI & MACHINE LEARNING BACKGROUND VISUALS ── */}

      {/* 1. TOP RIGHT: 3D AI Neural Brain Hologram with Live Pulse */}
      <div
        className="absolute top-[12%] right-[4%] w-48 sm:w-60 h-48 sm:h-60 rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur-md opacity-40 hover:opacity-80 transition-opacity duration-500 animate-bg-orb-1 group"
        style={{ transform: "perspective(1000px) rotateY(-12deg) rotateX(8deg)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"
          alt="AI Neural Network Brain"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a4a]/80 via-transparent to-transparent" />
        <div className="absolute bottom-2.5 left-3 right-3 text-white">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#00d4b4]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4b4] animate-ping" />
            <span>NEURAL AI BRAIN</span>
          </div>
        </div>
      </div>

      {/* 2. TOP LEFT: 3D AI Quantum Processor Chip */}
      <div
        className="absolute top-[22%] left-[2%] w-40 sm:w-52 h-40 sm:h-52 rounded-3xl overflow-hidden shadow-xl border border-white/60 bg-white/40 backdrop-blur-md opacity-35 hover:opacity-75 transition-opacity duration-500 animate-bg-orb-2 group"
        style={{ transform: "perspective(1000px) rotateY(14deg) rotateX(-6deg)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop"
          alt="AI Quantum Processor"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a4a]/80 via-transparent to-transparent" />
        <div className="absolute bottom-2.5 left-3 right-3 text-white">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#00d4b4]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A88F]" />
            <span>LLM TENSOR CORE</span>
          </div>
        </div>
      </div>

      {/* 3. MIDDLE RIGHT: 3D Machine Learning Prism Tensor */}
      <div
        className="absolute top-[50%] right-[3%] w-44 sm:w-56 h-44 sm:h-56 rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur-md opacity-35 hover:opacity-75 transition-opacity duration-500 animate-bg-orb-3 group"
        style={{ transform: "perspective(1000px) rotateY(-15deg) rotateX(10deg)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop"
          alt="Machine Learning Data Prism"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a4a]/80 via-transparent to-transparent" />
        <div className="absolute bottom-2.5 left-3 right-3 text-white">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#00d4b4]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4b4] animate-pulse" />
            <span>ML DATA TENSOR</span>
          </div>
        </div>
      </div>

      {/* 4. LOWER LEFT: 3D Cyber Wave Neural Fabric */}
      <div
        className="absolute bottom-[18%] left-[3%] w-48 sm:w-60 h-44 sm:h-52 rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/40 backdrop-blur-md opacity-30 hover:opacity-70 transition-opacity duration-500 animate-bg-orb-1 group"
        style={{ transform: "perspective(1000px) rotateY(12deg) rotateX(10deg)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"
          alt="Neural Fluid Wave"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a4a]/80 via-transparent to-transparent" />
        <div className="absolute bottom-2.5 left-3 right-3 text-white">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#00d4b4]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A88F]" />
            <span>NEURAL FLOW: ACTIVE</span>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM RIGHT: 3D Deep Learning Quantum Nodes */}
      <div
        className="absolute bottom-[5%] right-[8%] w-36 sm:w-48 h-36 sm:h-48 rounded-3xl overflow-hidden shadow-xl border border-white/60 bg-white/40 backdrop-blur-md opacity-35 hover:opacity-75 transition-opacity duration-500 animate-bg-orb-2 group"
        style={{ transform: "perspective(1000px) rotateY(-10deg) rotateX(-8deg)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop"
          alt="Deep Learning Quantum Nodes"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a4a]/80 via-transparent to-transparent" />
        <div className="absolute bottom-2.5 left-3 right-3 text-white">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#00d4b4]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A88F] animate-ping" />
            <span>DEEP SYNAPSE MATRIX</span>
          </div>
        </div>
      </div>

      {/* ── LIVE NEURAL SYNAPSE VECTORS (SVG DATA FLOW) ── */}
      <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aiDataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A88F" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00d4b4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0d2a4a" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <g stroke="url(#aiDataGrad)" strokeWidth="1.4" fill="none">
          <path d="M 150 200 Q 350 160 520 280 T 850 220" className="animate-ai-flow" />
          <path d="M 520 280 L 680 480 L 980 400" className="animate-ai-flow" style={{ animationDuration: "14s" }} />
          <path d="M 850 220 L 1150 320 L 1400 180" className="animate-ai-flow" style={{ animationDuration: "16s" }} />
          <path d="M 250 580 Q 580 500 820 620 T 1300 520" className="animate-ai-flow" style={{ animationDuration: "18s" }} />
          <path d="M 380 820 Q 700 720 980 880 T 1450 780" className="animate-ai-flow" style={{ animationDuration: "20s" }} />
        </g>
      </svg>

      {/* ── INTERACTIVE FIRING NEURON NODES ── */}
      <div className="absolute top-[200px] left-[150px] flex items-center justify-center">
        <div className="absolute w-8 h-8 rounded-full bg-[#00A88F]/20 animate-ai-ring" />
        <div className="w-3 h-3 rounded-full bg-[#00A88F] shadow-[0_0_14px_#00A88F] animate-ai-node" />
      </div>

      <div className="absolute top-[280px] left-[520px] flex items-center justify-center">
        <div className="absolute w-9 h-9 rounded-full bg-[#00d4b4]/25 animate-ai-ring" style={{ animationDelay: "1.2s" }} />
        <div className="w-3.5 h-3.5 rounded-full bg-[#00d4b4] shadow-[0_0_16px_#00d4b4] animate-ai-node" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="absolute top-[220px] left-[850px] flex items-center justify-center">
        <div className="absolute w-8 h-8 rounded-full bg-[#00A88F]/20 animate-ai-ring" style={{ animationDelay: "2s" }} />
        <div className="w-3 h-3 rounded-full bg-[#00A88F] shadow-[0_0_12px_#00A88F] animate-ai-node" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="absolute top-[480px] left-[680px] flex items-center justify-center">
        <div className="absolute w-10 h-10 rounded-full bg-[#00d4b4]/30 animate-ai-ring" style={{ animationDelay: "1.8s" }} />
        <div className="w-4 h-4 rounded-full bg-[#00d4b4] shadow-[0_0_18px_#00d4b4] animate-ai-node" style={{ animationDelay: "0.3s" }} />
      </div>

      {/* ── FLOATING AI TELEMETRY PILLS ── */}
      <div className="absolute top-[28%] left-[10%] px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#e8f0f7] text-[11px] font-mono text-[#00A88F] shadow-sm animate-ai-tensor flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#00A88F] animate-ping" />
        <span>Loss: 0.0018 | Epoch: 480/500</span>
      </div>

      <div className="absolute bottom-[35%] right-[10%] px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#e8f0f7] text-[11px] font-mono text-[#0d2a4a] shadow-sm animate-ai-tensor flex items-center gap-1.5" style={{ animationDelay: "3s" }}>
        <span>⚡ LLM Inference: 14ms (FP16)</span>
      </div>
    </div>
  );
}
