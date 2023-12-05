import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left" id="footer">

      <div className="mx-6 py-10 text-center md:text-left border-t">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6
              className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <img
                alt="Logo"
                className="mr-3 h-4"
                src="/Logo.png"
              />
              Rocket Nextjs
            </h6>
            <p>
              Open-Source NextJS Starter built styled with Tailwind/Flowbite.
            </p>
          </div>
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <Link href="https://github.com/app-generator/rocket-nextjs/archive/refs/heads/main.zip" className="text-neutral-600 dark:text-neutral-200"
              >Free</Link>
            </p>
            <p className="mb-4">
              <a href='https://rocket-nextjs-pro.vercel.app/' target="_blank" className="text-neutral-600 dark:text-neutral-200"
              >Pro</a>
            </p>
          </div>
          <div className="">
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <Link href="#" className="text-neutral-600 dark:text-neutral-200"
              >Home</Link>
            </p>
            <p>
              <Link href="/#features" className="text-neutral-600 dark:text-neutral-200"
              >Features</Link>
            </p>
          </div>
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5">
                <path
                  d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a href="https://appseed.us/support/" target="_blank">support@appseed.us </a>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              <a href="https://twitter.com/@webappseed" target="_blank">@webappseed</a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        MIT License ©
        <Link
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://appseed.us/"
          target="_blank"
        > AppSeed.us</Link>
      </div>
    </footer>
  )
}

export default Footer;