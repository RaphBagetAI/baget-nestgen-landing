import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>NestGen - Smart AI Home Integration</title>
        <meta name="description" content="NestGen: The future of smart home AI automation, energy management, and security - with privacy you can trust." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col">
        <header className="max-w-7xl mx-auto p-6 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-green-800">NestGen</h1>
          <a href="#signup" className="text-green-600 font-semibold hover:underline">Get Early Access</a>
        </header>

        <section className="flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-6 gap-x-12 py-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-green-900 mb-6">
              Seamless AI Integration for Your Smart Home
            </h2>
            <p className="mb-8 text-lg text-green-700">
              NestGen is an intuitive AI-powered smart home platform that integrates all your devices into one secure, energy-efficient, and automated ecosystem. Experience true interoperability, local AI privacy, and effortless control.
            </p>
            <a href="#signup" className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-green-800 transition">
              Join Early Access
            </a>
          </div>
          <img
            src="/smart-home-ai.svg"
            alt="Smart Home AI Illustration"
            className="w-full max-w-md object-contain"
          />
        </section>

        <section className="bg-green-100 py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <Feature
              title="Privacy-First AI"
              description="Local AI processing ensures your data stays private and secure inside your home."
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c.837 0 1.604-.336 2.159-.882a3 3 0 10-4.318 0A3.001 3.001 0 0112 11z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-2.485 0-4.5-2.015-4.5-4.5S9.515 5 12 5s4.5 2.015 4.5 4.5S14.485 14 12 14z" />
              </svg>}
            />
            <Feature
              title="Energy Management"
              description="Optimize your home’s energy usage with predictive automation and smart scheduling."
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>}
            />
            <Feature
              title="Unified Control"
              description="One app to control all your devices effortlessly, regardless of brand or system."
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 012-2h6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7v10a2 2 0 01-2 2H7" />
              </svg>}
            />
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16 text-center" id="signup">
          <h3 className="text-3xl font-bold text-green-900 mb-6">Get Early Access to NestGen</h3>
          <p className="mb-8 text-green-700">
            Be among the first to experience smarter, safer, and more efficient living. Sign up now for exclusive updates and early beta invites.
          </p>
          <form action="https://formspree.io/f/xayvzolj" method="POST" className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="px-4 py-3 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition w-full sm:w-auto"
            >
              Sign Up
            </button>
          </form>
        </section>

        <footer className="bg-green-800 text-green-100 py-6 mt-auto text-center">
          <p>© 2024 NestGen. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

function Feature({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="mb-3">
        {icon}
      </div>
      <h4 className="font-semibold text-lg text-green-900 mb-2">{title}</h4>
      <p className="text-green-700 max-w-xs">{description}</p>
    </div>
  );
}
