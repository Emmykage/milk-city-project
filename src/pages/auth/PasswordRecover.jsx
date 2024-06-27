import React from 'react';
import { NavLink } from 'react-router-dom';

const PasswordRecover = () => (
  <section className="h-screen bg-neutral-200 dark:bg-neutral-700">
    <div className="container h-full p-10 m-auto">
      <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="w-full h-full">
          <div className="block h-full rounded-lg  shadow-lg dark:bg-neutral-800">
            <div className="g-0 lg:flex lg:flex-wrap h-full">
              {/* <!-- Left column container--> */}
              <div className="px-4 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <NavLink to="/">

                        <img
                          className="mx-auto w-48"
                          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />

                      </NavLink>
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Lotus Team
                      </h4>
                    </div>

                    <form>

                      <p className="mb-4">Request Password Reset</p>
                      {/* <!--Username input--> */}

                      <div className="w-full text-left">
                        <label htmlFor="email" className="">Email</label>
                        <input
                          type="text"
                          label="Username"
                          className="mb-4 border border-gray-200 w-full py-3 px-2"
                        />

                      </div>

                      {/* <!--Password input--> */}

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <NavLink
                          to="/"
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          style={{
                            background:
                                'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                          }}
                        >
                          Reset Password
                        </NavLink>

                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        {/* <TERipple rippleColor="light"> */}
                        <NavLink
                          to="/auth/register"
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        >
                          Register
                        </NavLink>
                        {/* </TERipple> */}
                      </div>
                    </form>
                  </div>
              </div>

              {/* <!-- Right column container with background and description--> */}
              <div
                className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-green-600 via-green-500 to-green-900"
              >
                <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PasswordRecover;
