
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center animate-pulse">
              <AlertTriangle className="h-10 w-10 text-red-500" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-4 gradient-text">404</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
          
          <Button asChild size="lg">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-5 w-5" />
              Trở về trang chủ
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
