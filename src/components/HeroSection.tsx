
import { Button } from "@/components/ui/button";
import { ShieldCheck, Monitor, Key, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 hero-gradient overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="animate-pulse mr-1">•</span> Hệ thống quản lý bản quyền chính hãng
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">KingAutoColony</span> <br />Máy đếm khuẩn lạc
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Giải pháp quản lý bản quyền cho máy đếm khuẩn lạc KingAutoColony từ LABone. Bảo vệ thiết bị và đảm bảo tính xác thực với hệ thống cấp phép bảo mật cao.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group">
                Kích hoạt thiết bị
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
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
          
          {/* Right Content - Hero Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-30 animate-pulse-slow"></div>
              <div className="relative bg-card rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/daa7b16c-422f-4ec2-8bfd-6e42e3fb0001.png" 
                  alt="LABone - Chuyên gia trong phòng thí nghiệm"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-background/0 p-6">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <div className="flex items-center gap-1">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Chính xác</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>Tin cậy</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full"></span>
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
            <div className="absolute bottom-10 -left-10 bg-card p-4 rounded-lg shadow-lg animate-float animation-delay-1000">
              <ShieldCheck className="h-8 w-8 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
