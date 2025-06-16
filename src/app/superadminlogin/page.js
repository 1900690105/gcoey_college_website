import { getAuthUrl } from "@/lib/google";

export default function SuperAdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <a
        href={getAuthUrl()}
        className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
      >
        Sign in with Google to Upload
      </a>
    </div>
  );
}
