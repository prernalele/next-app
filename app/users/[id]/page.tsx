import React from "react";
import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}

async function UserDetailPage({ params }: Props) {
  const { id } = await params;
  if (id > 10) notFound();
  return <div> UserDetailPage {id} </div>;
};

export default UserDetailPage;
