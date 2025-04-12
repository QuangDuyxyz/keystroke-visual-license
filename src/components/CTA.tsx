
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

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
            Bảo vệ máy đếm khuẩn lạc KingAutoColony của bạn với hệ thống License Key chính hãng
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Đảm bảo thiết bị của bạn hoạt động chính xác và được hỗ trợ kỹ thuật từ LABone. 
            Kích hoạt bản quyền ngay hôm nay!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Kích hoạt thiết bị
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="tel:0978782147">
              <Button variant="outline" size="lg" className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Hotline: 0978 782 147
              </Button>
            </Link>
          </div>
          
          <div className="mt-10 text-sm text-muted-foreground">
            <p>Bảo hành và hỗ trợ kỹ thuật trọn đời từ đội ngũ chuyên gia LABone.</p>
            <p className="mt-2">Công ty LABone được chứng nhận ISO 9001 và ISO 13485</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
