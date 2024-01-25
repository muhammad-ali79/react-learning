import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userid } = useParams();
  return (
    <div className="h-full w-screen bg-black text-white text-center ">
      User:{userid}
    </div>
  );
}
