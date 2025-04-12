
import { 
  Shield, Lock, KeyRound, Monitor, Globe, Database, 
  Clock, BarChart, Settings, RefreshCw, AlarmClock, Zap 
} from "lucide-react";

const features = [
  {
    icon: <KeyRound className="h-6 w-6 text-primary" />,
    title: "Tạo License Key",
    description: "Tạo và quản lý license key an toàn với mã hóa mạnh mẽ cho phần mềm của bạn."
  },
  {
    icon: <Monitor className="h-6 w-6 text-primary" />,
    title: "Định danh máy tính",
    description: "Gắn license với phần cứng máy tính cụ thể để tránh sao chép trái phép."
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Bảo mật cao cấp",
    description: "Hệ thống mã hóa tiên tiến bảo vệ license key không bị hack hoặc giả mạo."
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Giới hạn thời gian",
    description: "Thiết lập thời hạn sử dụng license, tự động hết hạn theo ngày đã cài đặt."
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: "Báo cáo & Thống kê",
    description: "Theo dõi việc sử dụng license và phân tích dữ liệu để tối ưu chiến lược bán hàng."
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Kích hoạt online/offline",
    description: "Hỗ trợ kích hoạt qua mạng hoặc offline cho các môi trường không có internet."
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Lưu trữ an toàn",
    description: "Dữ liệu license được lưu trữ trong cơ sở dữ liệu bảo mật với sao lưu thường xuyên."
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Tích hợp nhanh chóng",
    description: "API dễ sử dụng để tích hợp hệ thống license vào sản phẩm của bạn một cách nhanh chóng."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Tính năng nổi bật</h2>
          <p className="text-muted-foreground">
            Hệ thống quản lý license key toàn diện với các công nghệ bảo mật tiên tiến, 
            giúp bảo vệ phần mềm và tăng doanh thu của bạn.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 license-card"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
