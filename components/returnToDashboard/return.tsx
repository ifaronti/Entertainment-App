import Link from "next/link";

export default function Return() {

  const returnTo = () => {
    localStorage.setItem("page", "dashboard")
    localStorage.removeItem('isAI')
    localStorage.removeItem('Image')
    returnTo
  }
  return (
    <Link
      onClick={returnTo}
      className="text-[#fff] text-center"
      href="/dashboard"
    >
      Return to dashboard
    </Link>
  );
}
