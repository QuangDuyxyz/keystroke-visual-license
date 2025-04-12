import { Button } from "@/components/ui/button";
import { ShieldCheck, Monitor, Key, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 hero-gradient overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-blue-600/10 to-primary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6 animate-slide-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <img 
                src="/lovable-uploads/3a53cd44-aca9-4ce8-be34-607c7c8ed5d1.png" 
                alt="LABone Logo" 
                className="h-8 w-auto mr-2"
              />
              <span className="animate-pulse mr-1">•</span> Hệ thống quản lý bản quyền chính hãng
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up animation-delay-200">
              <span className="gradient-text animate-gradient">KingAutoColony</span> <br />Máy đếm khuẩn lạc
            </h1>
            
            <p className="text-lg text-muted-foreground animate-slide-up animation-delay-400">
              Giải pháp quản lý bản quyền cho máy đếm khuẩn lạc KingAutoColony từ LABone. Bảo vệ thiết bị và đảm bảo tính xác thực với hệ thống cấp phép bảo mật cao.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up animation-delay-600">
              <Button size="lg" className="group hover:scale-105 transition-transform duration-300">
                Kích hoạt thiết bị
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-300">
                Tìm hiểu thêm
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Bảo mật cao</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Quản lý dễ dàng</span>
              </div>
              <div className="flex items-center gap-2">
                <Key className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Key an toàn</span>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="lg:w-1/2 relative animate-slide-up animation-delay-800">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-30 animate-pulse-slow"></div>
              <div className="relative bg-card rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="aspect-w-16 aspect-h-9 md:aspect-h-10 lg:aspect-h-12">
                  <img 
                    src="/images/anh_may_dem_khuan_lac.png" 
                    alt="LABone Colony Counter - Máy đếm khuẩn lạc"
                    className="w-full h-full object-contain rounded-lg hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-background/0 p-6">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-300">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span>Chính xác</span>
                    </div>
                    <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-300">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-200"></span>
                      <span>Tin cậy</span>
                    </div>
                    <div className="flex items-center gap-1 hover:scale-110 transition-transform duration-300">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-400"></span>
                      <span>Hiệu quả</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-5 -right-5 bg-card p-4 rounded-lg shadow-lg animate-float">
              <Key className="h-10 w-10 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
