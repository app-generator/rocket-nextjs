
export default async function Home() {
  return (
    <main className="mx-auto mt-4 max-w-6xl px-6 pb-10">
      <section id="about" className="bg-white dark:bg-gray-900 mt-10 mb-36 pt-32">
        <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center mr-auto lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Rocket NextJs
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Open-Source starter built with <strong>NextJs &amp; Tailwind/Flowbite</strong>.
            </p>
            <a href="https://docs.appseed.us/" target="_blank" className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Docs
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://appseed.us/support/" target="_blank" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Support
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
          </div>
        </div>
      </section>

      <section>
        <img src="/images/home/dashboard.png" alt="" />
      </section>

      <section id="tech_stack" className="flex justify-between w-full h-[calc(100vh-300px)] items-center pt-32">
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center gap-4 w-full justify-center">
            <img className="sm:w-20 w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsymfon7-t1D7kzm9xJTrPp1xuRH8Hk5Bsw&usqp=CAU" />
            <img className="sm:w-20 w-12 mb-20" src="data:image/jpeg;base64,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" data-deferred="1" ></img>
            <img className="sm:h-20 h-12 mb-20" src="data:image/png;base64,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" data-deferred="1" alt="" />
            <img className="sm:w-16 w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREGa6CisOihbaCfCroououW0HXbTJZoDPbVg&amp;usqp=CAU"></img>
          </div>
          <img
            alt="Logo"

            className="mx-auto sm:h-20 h-16"
            src="/Logo.png"
          />
        </div>
        <div className="w-1/2 text-5xl font-bold hidden lg:block text-center">Technology Stack</div>
      </section>

      <section id="features" className="sm:my-20 my-8 pt-32">
        <p className="text-5xl font-bold text-center mb-12">Features</p>
        <div className="grid sm:grid-cols-3 grid-cols-2 mt-4 text-[#444] w-full sm:gap-6 gap-3">
          <div className="bg-[#f5f5f5] sm:px-6 p-4 rounded-lg sm:py-8 py-6 shadow-lg">
            <p className="sm:text-xl text-lg font-bold">Login with NextAuth</p>
            <p className="sm:text-base text-sm mt-2">
              -Magic links setup <br />
              -Login with Google walkthrough<br />
              -Save user data in MongoDB<br />
              -Private/protected pages & API calls<br />
              -Time saved: 3 hours</p>
          </div>
          <div className="bg-[#f5f5f5] sm:px-6 p-4 rounded-lg sm:py-8 py-6 shadow-lg">
            <p className="sm:text-xl text-lg font-bold">Emails with Mailgun</p>
            <p className="sm:text-base text-sm mt-2">
              -Send transactional emails <br />
              -DNS setup to avoid spam folder (DKIM, DMARC, SPF in subdomain)<br />
              -Webhook to receive & forward emails<br />
              -Time saved: 2 hours<br />
              -Headaches: 0</p>
          </div><div className="bg-[#f5f5f5] sm:px-6 p-4 rounded-lg sm:py-8 py-6 shadow-lg">
            <p className="sm:text-xl text-lg font-bold">Payments with Stripe</p>
            <p className="sm:text-base text-sm mt-2">
              -Create checkout sessions <br />
              -Login with Google walkthrough<br />
              -Save user data in MongoDB<br />
              -Private/protected pages & API calls<br />
              -Time saved: 3 hours</p>
          </div><div className="bg-[#f5f5f5] sm:px-6 p-4 rounded-lg sm:py-8 py-6 shadow-lg">
            <p className="sm:text-xl text-lg font-bold">Login with NextAuth</p>
            <p className="sm:text-base text-sm mt-2">
              -Magic links setup <br />
              -Handle webhooks to update user account<br />
              -Tips to setup your account & reduce chargebacks<br />
              -Private/protected pages & API calls<br />
              -Time saved: 2 hours</p>
          </div><div className="bg-[#f5f5f5] sm:px-6 p-4 rounded-lg sm:py-8 py-6 shadow-lg">
            <p className="sm:text-xl text-lg font-bold">Database with Mongodb</p>
            <p className="sm:text-base text-sm mt-2">
              -Mongoose schema <br />
              -Mongoose plugins to make your life easier<br />
              -Time saved: 2 hours<br />
            </p>
          </div><div className="bg-[#f5f5f5] sm:px-6 p-4 rounded-lg sm:py-8 py-6 shadow-lg">
            <p className="sm:text-xl text-lg font-bold">Style with TailwindCSS</p>
            <p className="sm:text-base text-sm mt-2">
              -Components, animations & sections (like the pricing page below)<br />
              -20+ themes with daisyUI<br />
              -AAutomatic dark mode<br />
              -Time saved: 5 hours
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
