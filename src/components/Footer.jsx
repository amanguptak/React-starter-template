

const Footer = () => {
  return (
    <footer className="text-gray-800 bg-white rounded-md">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex-shrink-0">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGD7Zes0BFod2_dT_e-ORw12AMRbcfsBsTgq61XxWGQ&s" alt="Logo" className="h-20 w-fit" />
          </div>
          <div className="flex space-x-10">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-blue-500">Careers</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-blue-500">Press</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-blue-500">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-600 hover:text-blue-500">Contact Us</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-blue-500">FAQs</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="text-base text-gray-600 hover:text-blue-500">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5.02 3.68 9.14 8.44 9.88v-7H8v-3h2.44v-2.2C10.44 6.36 11.7 5 13.4 5H15v3h-1.4c-.5 0-.6.24-.6.6v1.4h3l-.5 3h-2.5v7.88C18.32 21.14 22 17.02 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.34-1.6.58-2.46.69a4.26 4.26 0 001.88-2.37c-.82.49-1.73.85-2.7 1.04a4.22 4.22 0 00-7.18 3.85c-3.52-.17-6.64-1.86-8.73-4.42a4.22 4.22 0 001.31 5.64c-.72-.02-1.39-.22-1.98-.54v.05a4.22 4.22 0 003.38 4.14c-.34.09-.7.14-1.07.14-.26 0-.52-.03-.77-.08a4.24 4.24 0 003.94 2.93A8.47 8.47 0 012 19.54a11.9 11.9 0 006.44 1.88c7.72 0 11.95-6.4 11.95-11.95l-.01-.54A8.55 8.55 0 0024 5.5a8.5 8.5 0 01-2.44.67 4.23 4.23 0 001.85-2.34z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-9 18H8V9h3v9zm-1.5-10.3c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c0 1-.8 1.8-1.8 1.8zm11.5 10.3h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V18h-3V9h3v1.4c.8-1.2 2.2-2 3.8-2 2.8 0 5 2.2 5 5v4.6z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.5.6.6.3 1.1.7 1.6 1.2.5.5.9 1 1.2 1.6.3.5.5 1.3.6 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.6 2.5-.3.6-.7 1.1-1.2 1.6-.5.5-1 1-1.6 1.2-.5.3-1.3.5-2.5.6-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.5-.6-.6-.3-1.1-.7-1.6-1.2-.5-.5-1-1-1.2-1.6-.3-.5-.5-1.3-.6-2.5-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-2 .6-2.5.3-.6.7-1.1 1.2-1.6.5-.5 1-1 1.6-1.2.5-.3 1.3-.5 2.5-.6 1.2-.1 1.6-.1 4.8-.1m0-2.2C8.7 0 8.2 0 7 0 5.8 0 5 .2 4.2.6 3.3 1.1 2.5 1.8 1.9 2.5c-.7.7-1.4 1.4-1.9 2.1-.4.8-.6 1.6-.6 2.8 0 1.2 0 1.7.1 3.9s.1 2.7.1 3.9-.1 2.7-.1 3.9c0 1.2.2 2 .6 2.8.5.7 1.2 1.4 1.9 2.1.7.7 1.4 1.4 2.1 1.9.8.4 1.6.6 2.8.6 1.2 0 1.7 0 3.9-.1s2.7-.1 3.9-.1c1.2 0 1.7 0 3.9.1 2.2 0 2.7.1 3.9.1 1.2 0 2-.2 2.8-.6.7-.5 1.4-1.2 2.1-1.9.7-.7 1.4-1.4 1.9-2.1.4-.8.6-1.6.6-2.8 0-1.2 0-1.7-.1-3.9s-.1-2.7-.1-3.9.1-2.7.1-3.9c0-1.2-.2-2-.6-2.8-.5-.7-1.2-1.4-1.9-2.1-.7-.7-1.4-1.4-2.1-1.9-.8-.4-1.6-.6-2.8-.6-1.2 0-1.7 0-3.9.1s-2.7.1-3.9.1c-1.2 0-1.7 0-3.9-.1s-2.7-.1-3.9-.1C8.2 0 8.7 0 12 0" />
                <path d="M12 5.8A6.2 6.2 0 005.8 12 6.2 6.2 0 0012 18.2 6.2 6.2 0 0018.2 12 6.2 6.2 0 0012 5.8zm0 10.2a4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4zm6.4-11.2a1.4 1.4 0 01-1.4 1.4 1.4 1.4 0 110-2.8 1.4 1.4 0 011.4 1.4z" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0">&copy; 2024 Aman Template, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
