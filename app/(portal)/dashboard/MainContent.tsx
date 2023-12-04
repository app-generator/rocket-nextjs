"use client";

/* eslint-disable jsx-a11y/anchor-is-valid */
import { Badge, Dropdown, Table, useTheme } from "flowbite-react";
import type { FC } from "react";

const DashboardPage: FC = function () {
    return (
        <>
            <Transactions />
        </>
    );
};


const MyApplications: FC = function () {
    return (
        <section className="bg-white dark:bg-gray-800 h-full flex flex-col justify-center items-center">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl text-center">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-gray-100 md:mb-8 lg:mb-16 md:text-4xl">
                    My Applications
                </h2>

                <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0 md:mb-8 md:mt-12 flex justify-center items-center">
                    <a href="/case_dashboard" className="block py-12 px-8 text-center bg-gray-50 rounded dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">
                        EB1A
                        <p className="font-light mt-3.5 mb-4 dark:text-white">
                            Outstanding Researcher Or Professor
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
};

const PurchaseApplication: FC = function () {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-gray-100 md:text-4xl">
                    Purchase An Application
                </h2>
                <p className="mb-4 text-base font-light text-center text-gray-500 dark:text-gray-300 md:text-xl sm:px-14 md:px-24 lg:px-56 xl:px-72">
                    Selecting the application type.
                </p>
                <div className="mt-6 space-y-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 xl:gap-8 md:space-y-0 md:mb-8 md:mt-12">
                    <a href="#" className="flex justify-center items-center p-8 text-center bg-gray-50 rounded hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 dark:text-white">
                        EB1A
                    </a>
                    <a href="#" className="flex justify-center items-center p-8 text-center bg-gray-50 rounded hover:bg-gray-100 dark:hover:bg-gray-600 dark:bg-gray-700 dark:text-white">
                        EB1B
                    </a>
                </div>
            </div>
        </section>
    );
};

const Datepicker: FC = function () {
    return (
        <span className="text-sm text-gray-600">
            <Dropdown inline label="Last 7 days">
                <Dropdown.Item>
                    <strong>Sep 16, 2021 - Sep 22, 2021</strong>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Yesterday</Dropdown.Item>
                <Dropdown.Item>Today</Dropdown.Item>
                <Dropdown.Item>Last 7 days</Dropdown.Item>
                <Dropdown.Item>Last 30 days</Dropdown.Item>
                <Dropdown.Item>Last 90 days</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Custom...</Dropdown.Item>
            </Dropdown>
        </span>
    );
};

const NewProductsThisWeek: FC = function () {
    return (
        <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <div className="flex items-center">
                <div className="shrink-0">
                    <span className="text-2xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
                        2,340
                    </span>
                    <h3 className="text-base font-normal text-gray-600 dark:text-gray-400">
                        New products this week
                    </h3>
                </div>
                <div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold text-green-600 dark:text-green-400">
                    14.6%
                    <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6">
                <Datepicker />
                <div className="shrink-0">
                    <a
                        href="#"
                        className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm"
                    >
                        Products Report
                        <svg
                            className="ml-1 h-4 w-4 sm:h-5 sm:w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Transactions: FC = function () {
    return (
        <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                        Transactions
                    </h3>
                    <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                        This is a list of latest transactions
                    </span>
                </div>
                <div className="shrink-0">
                    <a
                        href="#"
                        className="rounded-lg p-2 text-sm font-medium text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
                    >
                        View all
                    </a>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="overflow-x-auto rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow sm:rounded-lg">
                            <Table
                                striped
                                className="min-w-full divide-y divide-gray-200 dark:divide-gray-600"
                            >
                                <Table.Head className="bg-gray-50 dark:bg-gray-700">
                                    <Table.HeadCell>Transaction</Table.HeadCell>
                                    <Table.HeadCell>Date &amp; Time</Table.HeadCell>
                                    <Table.HeadCell>Amount</Table.HeadCell>
                                    <Table.HeadCell>Status</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="bg-white dark:bg-gray-800">
                                    <Table.Row>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">Bonnie Green</span>
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 23, 2021
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $2300
                                        </Table.Cell>
                                        <Table.Cell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment refund to{" "}
                                            <span className="font-semibold">#00910</span>
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 23, 2021
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            -$670
                                        </Table.Cell>
                                        <Table.Cell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment failed from{" "}
                                            <span className="font-semibold">#087651</span>
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 18, 2021
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $234
                                        </Table.Cell>
                                        <Table.Cell className="flex whitespace-nowrap p-4">
                                            <Badge color="failure">Cancelled</Badge>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">Lana Byrd</span>
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 15, 2021
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $5000
                                        </Table.Cell>
                                        <Table.Cell className="flex whitespace-nowrap p-4">
                                            <span className="mr-2 rounded-md bg-purple-100 py-0.5 px-2.5 text-xs font-medium text-purple-800 dark:bg-purple-200">
                                                In progress
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">Jese Leos</span>
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 15, 2021
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $2300
                                        </Table.Cell>
                                        <Table.Cell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">THEMESBERG LLC</span>
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 11, 2021
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $560
                                        </Table.Cell>
                                        <Table.Cell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">Lana Lysle</span>
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 6, 2021
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $1437
                                        </Table.Cell>
                                        <Table.Cell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment to{" "}
                                            <span className="font-semibold">Joseph Mcfall</span>
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Apr 1, 2021
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $980
                                        </Table.Cell>
                                        <Table.Cell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">Alphabet LLC</span>
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Mar 23, 2021
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $11,436
                                        </Table.Cell>
                                        <Table.Cell className="flex whitespace-nowrap p-4">
                                            <span className="mr-2 rounded-md bg-purple-100 py-0.5 px-2.5 text-xs font-medium text-purple-800 dark:bg-purple-200">
                                                In progress
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
                                            Payment from{" "}
                                            <span className="font-semibold">Bonnie Green</span>
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Mar 23, 2021
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
                                            $560
                                        </Table.Cell>
                                        <Table.Cell className="flex whitespace-nowrap p-4">
                                            <Badge color="success">Completed</Badge>
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between pt-3 sm:pt-6">
                <Datepicker />
                <div className="shrink-0">
                    <a
                        href="#"
                        className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm"
                    >
                        Transactions Report
                        <svg
                            className="ml-1 h-4 w-4 sm:h-5 sm:w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
