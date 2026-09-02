import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "wouter";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <Seo
        title="Page Not Found | RichDad Investments"
        description="The requested RichDad Investments page could not be found."
        noIndex
      />
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              404 Page Not Found
            </h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The page you requested does not exist or may have moved.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-lg bg-[#0F172A] px-5 py-3 font-semibold text-white hover:bg-[#1E293B]"
          >
            Return to homepage
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
