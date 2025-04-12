
import { MonitorCheck, KeyRound, ShieldCheck, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: <KeyRound className="h-6 w-6 text-white" />,
    title: "Tạo License Key",
    description: "Tạo license key duy nhất cho ứng dụng của bạn với các tùy chọn tích hợp bảo mật nâng cao."
  },
  {
    icon: <MonitorCheck className="h-6 w-6 text-white" />,
    title: "Gắn với máy tính",
    description: "License được liên kết với phần cứng máy tính cụ thể, ngăn chặn việc sao chép trái phép."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    title: "Xác thực bảo mật",
    description: "Xác thực license trong thời gian thực với hệ thống bảo mật đa lớp chống giả mạo."
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-white" />,
    title: "Theo dõi & Gia hạn",
    description: "Quản lý và gia hạn license một cách dễ dàng thông qua bảng điều khiển trực tuyến."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Cách hệ thống hoạt động</h2>
          <p className="text-muted-foreground">
            Quy trình đơn giản nhưng bảo mật để tạo, quản lý và kích hoạt license key cho phần mềm của bạn
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Visible only on mobile */}
                  <div className="md:hidden flex items-center mb-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary animate-pulse-slow">
                        {step.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-lg">{step.title}</div>
                    </div>
                  </div>
                  
                  {/* Content for left side */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-card shadow-md p-6 rounded-lg license-card animate-slide-up">
                      <h3 className="text-lg font-semibold mb-2 hidden md:block">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center circle with icon - visible only on desktop */}
                  <div className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary animate-pulse-slow z-10">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Empty div for right side */}
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
