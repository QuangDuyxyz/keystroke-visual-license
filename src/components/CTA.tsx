
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bảo vệ phần mềm của bạn với hệ thống License Key tiên tiến
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tăng doanh thu và bảo vệ sản phẩm của bạn khỏi việc sao chép trái phép. 
            Bắt đầu sử dụng ngay hôm nay!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Dùng thử miễn phí
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Xem demo
            </Button>
          </div>
          
          <div className="mt-10 text-sm text-muted-foreground">
            <p>Không cần thẻ tín dụng. Dùng thử miễn phí 14 ngày với đầy đủ tính năng.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
