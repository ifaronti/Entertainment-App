import Link from "next/link";

export default function Return() {
  return (
    <Link
      onClick={() => localStorage.setItem("page", "dashboard")}
      className="text-[#fff] text-center"
      href="/dashboard"
    >
      Return to dashboard
    </Link>
  );
}
