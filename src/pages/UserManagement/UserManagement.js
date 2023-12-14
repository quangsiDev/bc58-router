import React from "react";
import ListUser from "./ListUser";
import FormUser from "./FormUser";

export default function UserManagement() {
  return (
    <div className="container">
      <ListUser />
      <FormUser />
    </div>
  );
}
