import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams;
  return (
    <>
      <h1>User </h1>
      <Link href="users/new" className="btn">
        New Users
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};
export default UsersPage;
