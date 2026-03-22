import { Link } from "react-router";
import { useEffect, useRef } from "react";

const NotFound = () => {
  const glitchRef = useRef(null);

  useEffect(() => {
    const el = glitchRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      el.setAttribute("data-glitch", Math.random() > 0.5 ? "active" : "");
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#080c14] relative overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(21,93,252,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(21,93,252,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute rounded-full blur-[120px] opacity-20 animate-pulse"
        style={{
          width: "600px",
          height: "600px",
          background: "#155dfc",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
            background: "#155dfc",
            opacity: 0.4 - i * 0.05,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animation: `float ${3 + i}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* 404 number */}
        <div className="relative mb-2 select-none" ref={glitchRef}>
          <span
            className="block font-black text-[clamp(7rem,20vw,14rem)] leading-none tracking-tighter"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #155dfc",
              textShadow:
                "0 0 40px rgba(21,93,252,0.5), 0 0 80px rgba(21,93,252,0.2)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            404
          </span>
          {/* Glitch copy */}
          <span
            className="absolute inset-0 block font-black text-[clamp(7rem,20vw,14rem)] leading-none tracking-tighter opacity-0"
            style={{
              color: "#155dfc",
              fontFamily: "'Courier New', monospace",
              animation: "glitch 4s infinite",
              clipPath: "polygon(0 30%, 100% 30%, 100% 50%, 0 50%)",
            }}
            aria-hidden
          >
            404
          </span>
        </div>

        {/* Divider line */}
        <div
          className="w-24 h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, #155dfc, transparent)",
          }}
        />

        {/* Text */}
        <h1
          className="text-white font-bold mb-3 tracking-wide uppercase"
          style={{
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            letterSpacing: "0.3em",
            fontFamily: "'Courier New', monospace",
          }}
        >
          Page Not Found
        </h1>
        <p
          className="mb-10 max-w-sm"
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.95rem",
            lineHeight: "1.7",
            fontFamily: "'Courier New', monospace",
          }}
        >
          Looks like this page got lost in the void.
          <br />
          Let's get you back on track.
        </p>

        {/* CTA Button */}
        <Link
          to="/"
          className="group relative inline-flex items-center gap-3 px-8 py-3 font-semibold text-white rounded-full overflow-hidden transition-all duration-300"
          style={{
            background: "#155dfc",
            fontFamily: "'Courier New', monospace",
            fontSize: "0.9rem",
            letterSpacing: "0.1em",
            boxShadow:
              "0 0 30px rgba(21,93,252,0.4), 0 0 60px rgba(21,93,252,0.1)",
          }}
        >
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "rgba(255,255,255,0.1)" }}
          />
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        {/* Error code badge */}
        <div
          className="mt-12 px-4 py-1.5 rounded-full border text-xs tracking-widest uppercase"
          style={{
            borderColor: "rgba(21,93,252,0.3)",
            color: "rgba(21,93,252,0.7)",
            fontFamily: "'Courier New', monospace",
          }}
        >
          Error · 404 · Not Found
        </div>
      </div>

      <style>{`
        @keyframes float {
          from { transform: translateY(0px) scale(1); }
          to   { transform: translateY(-20px) scale(1.1); }
        }
        @keyframes glitch {
          0%, 90%, 100% { opacity: 0; transform: translate(0); }
          91%  { opacity: 0.8; transform: translate(-4px, 2px); filter: hue-rotate(90deg); }
          93%  { opacity: 0; }
          95%  { opacity: 0.6; transform: translate(4px, -2px); }
          97%  { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
