"use client";
import { FC } from "react";
import Image from "next/image";
import { Navbar, Button, Dropdown, Avatar } from "flowbite-react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Header: FC<Record<string, never>> = function () {
    const { data: session } = useSession();

    return (
        <header className="sticky top-0 z-20">
            <Navbar fluid>
                <Navbar.Brand href="/">
                    <Image
                        alt="Flowbite logo"
                        height="24"
                        src="/images/logo.png"
                        width="24"
                    />
                    <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
                        Rocket
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle />
                    {
                        session ?
                            <Dropdown
                                inline
                                label={
                                    <Avatar
                                        alt="User settings"
                                        img="/images/users/roberta-casas.png"
                                        rounded
                                    />
                                }
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">{session.user?.name}</span>
                                    <span className="block truncate text-sm font-medium">
                                        {session.user?.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => signOut()}>Sign out</Dropdown.Item>
                            </Dropdown>
                            :
                            <>
                                <Link href="/login">
                                    <Button>Login</Button>
                                </Link>
                                <Link href="/register" className="ml-3">
                                    <Button>Sign Up</Button>
                                </Link>
                            </>
                    }
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>Home</Navbar.Link>
                    <Navbar.Link href="/#about">About</Navbar.Link>
                    <Navbar.Link href="/#features">Features</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;