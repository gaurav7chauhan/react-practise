import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(12);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const passwordRef = useRef(null);
  const timoutRef = useState(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+-=<>?";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
    setCopied(false);
  }, [length, numAllowed, charAllowed]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 9);    copyingin range from st to end
    navigator.clipboard.writeText(password);
    setCopied(true);

    if (timoutRef.current) clearTimeout(timoutRef.current);

    timoutRef.current = setTimeout(() => setCopied(false), 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-gray-800/90 backdrop-blur-sm shadow-2xl rounded-2xl px-8 py-8 border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-4xl text-white font-bold bg-clip-text from-purple-400 to-pink-600 mb-2">
            Password Generator
          </h1>
          <p className="text-gray-400 text-sm">
            Create secure passwords instantly
          </p>
        </div>

        {/* Password Display */}
        <div className="mb-6">
          <div className="flex gap-2">
            <input
              ref={passwordRef}
              type="text"
              value={password}
              className="flex-1 outline-none py-3 px-4 bg-gray-900 text-white text-lg font-mono rounded-lg border border-gray-700 focus:border-purple-500 transition-colors"
              placeholder="Generated password"
              readOnly
            />
            <button
              onClick={copyToClipboard}
              className={`outline-none px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 ${
                copied
                  ? "bg-green-600 text-white"
                  : "bg-blue-600 from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
              }`}
            >
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
        </div>

        {/* Length Slider */}
        <div className="mb-6 bg-gray-900/50 p-4 rounded-lg border border-gray-700">
          <div className="flex justify-between items-center mb-3">
            <label className="text-gray-300 font-medium">Password Length</label>
            <span className="text-purple-400 font-bold text-xl">{length}</span>
          </div>
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>6</span>
            <span>50</span>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          <label className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-900/70 transition-colors group">
            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
              Include Numbers (0-9)
            </span>
            <input
              type="checkbox"
              checked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
              className="w-5 h-5 cursor-pointer accent-purple-600"
            />
          </label>

          <label className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-900/70 transition-colors group">
            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
              Include Special Characters (!@#$%...)
            </span>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="w-5 h-5 cursor-pointer accent-purple-600"
            />
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white
          font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        >
          🔄 Regenerate Password
        </button>
      </div>
    </div>
  );
};

export default App;
