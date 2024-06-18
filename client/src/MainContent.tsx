import { Outlet } from "react-router-dom";

export default function MainContent() {
  return (
    <div style={{ maxWidth: 700, minWidth: 400, margin: "auto" }}>
      <Outlet />
    </div>
  );
}
