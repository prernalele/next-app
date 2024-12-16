"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NewUsersPage = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/users")} className="btn btn-primary">
        Create
      </button>
    </div>
  );
};

export default NewUsersPage;
