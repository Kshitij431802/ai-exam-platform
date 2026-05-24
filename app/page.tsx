 export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">CSIR NET|GATE AI</h1>

        <button>Home</button>
<button>Courses</button>
<button>About</button>

<button className="bg-blue-600 px-4 py-2 rounded-xl">
  Login
</button>

<button className="bg-white text-black px-4 py-2 rounded-xl">
  Sign Up
</button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h1 className="text-6xl font-bold mb-6">
          AI Powered CSIR NET|GATE Platform
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl">
          Learn a topic, Solve MCQs, Upload PDFs,
          and Prepare smarter with AI tools.
        </p>

        <button className="mt-8 px-8 py-4 bg-blue-600 rounded-2xl hover:bg-blue-700">
          Start Learning 🚀
        </button>

      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">

        <div className="bg-gray-800 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">
             Notes
          </h2>

          <p>
            Generate smart notes instantly.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">
            MCQ 
          </h2>

          <p>
            Practice CSIR NET|Gate level questions daily.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">
             Upload
          </h2>

          <p>
            Upload a Topic and study with AI.
          </p>
        </div>

      
</section>
<section className="py-20 px-6 text-center">

  <h2 className="text-4xl font-bold mb-10">
    Tools
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-gray-800 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-3">
        Smart Learning
      </h3>

      <p>
        AI explains concepts simply.
      </p>
    </div>

    <div className="bg-gray-800 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-3">
        Fast Revision
      </h3>

      <p>
        Generate quick notes for revision instantly.
      </p>
    </div>

    <div className="bg-gray-800 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-3">
        Practice Daily
      </h3>

      <p>
        Solve MCQs and improve your Smartness.
      </p>
    </div>

  </div>

</section>
<section className="py-20 px-6 text-center">

  <h2 className="text-4xl font-bold mb-10">
    Student Reviews
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-gray-800 p-8 rounded-2xl">
      <p className="mb-4">
        “Best platform for CSIR NET|GATE”
      </p>

      <h3 className="font-bold">
        — Vaishnavi
      </h3>
    </div>

    <div className="bg-gray-800 p-8 rounded-2xl">
      <p className="mb-4">
        “AI notes helped me revise faster.”
      </p>

      <h3 className="font-bold">
        — Sumedh
      </h3>
    </div>

    <div className="bg-gray-800 p-8 rounded-2xl">
      <p className="mb-4">
        “Modern and smart chemistry learning.”
      </p>

      <h3 className="font-bold">
        — Gitanjali
      </h3>
    </div>

  </div>

</section>
<section className="py-20 px-6 text-center">

  <h2 className="text-4xl font-bold mb-10">
     Plans
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-gray-800 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4">
        Free
      </h3>

      <p className="text-4xl font-bold mb-4">
        ₹0
      </p>

      <p>
        Basic MCQs and notes access.
      </p>
    </div>

    <div className="bg-blue-700 p-8 rounded-2xl scale-105">
      <h3 className="text-2xl font-bold mb-4">
        Pro
      </h3>

      <p className="text-4xl font-bold mb-4">
        ₹49
      </p>

      <p>
        AI notes, PDF analysis, smart revision tools.
      </p>
    </div>

    <div className="bg-gray-800 p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4">
        Premium
      </h3>

      <p className="text-4xl font-bold mb-4">
        ₹99
      </p>

      <p>
        Full CSIR NET + GATE preparation system.
      </p>
    </div>

  </div>

</section>
<section className="py-20 px-6 text-center">

  <h2 className="text-4xl font-bold mb-8">
    Contact Us
  </h2>

  <p className="text-gray-300 mb-6">
    Start your AI-powered preparation today.
  </p>

  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-white font-bold">
    Contact Now kshitijgundewar12345@gmail.com
  </button>

</section>
     <footer className="border-t border-gray-800 text-center py-6 text-gray-400">
  ©  AI Platform 2026 • Built by Kshitij🚀
</footer> 

    </main>
  );
}