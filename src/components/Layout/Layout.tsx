import Head from "next/head";
import React, { ReactNode, useEffect, useRef } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { A11yDialog } from "react-a11y-dialog";
import { CreatePostForm } from "components/CreatePostForm";

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { status } = useSession();

  return (
    <>
      <Head>
        <title>Next-JS Social Media Clone</title>
      </Head>
          <button type="button" onClick={() => dialog.current?.show()}>
            Add post!
          </button>
          {status === "authenticated" ? (
            <button
              onClick={async () => await signOut()}
              className="p-6 font-extrabold text-slate-200 transition-colors hover:cursor-pointer hover:text-slate-500">
              Sign out
            </button>
          ) : (
            <NavLink href="/sign-in">Sign In</NavLink>
          )}
        </ul>
      </nav>
      <main className="px-6 lg:px-56">{children}</main>
      <footer>Footer</footer>
      <A11yDialog
        id="my-accessible-dialog"
        dialogRef={(instance) => (dialog.current = instance)}
        classNames={{
          container: "fixed inset-0 top-20 bg-transparent",
          overlay: "fixed inset-0 flex bg-slate-700 bg-opacity-80",
          dialog:
            "m-auto  relative bg-white lg:w-1/2 pt-6 rounded-lg shadow-lg",
          title: "text-2xl font-bold text-center",
          closeButton: "absolute top-0 right-0 mx-4 my-1 text-2xl",
        }}
        title="Create new post">
        <CreatePostForm />
      </A11yDialog>
    </>
  );
};

const NavLink: React.FC<{ children: ReactNode; href: string }> = ({
  children,
  href,
}) => (
  <Link href={href}>
    <li className="p-6 text-xl font-bold text-black transition-colors hover:cursor-pointer hover:text-slate-700">
      {children}
    </li>
  </Link>
);
