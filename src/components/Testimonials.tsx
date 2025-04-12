
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "CEO, Software Solutions",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Hệ thống license key đã giúp chúng tôi giảm 90% tình trạng vi phạm bản quyền phần mềm. Giải pháp bảo mật tuyệt vời với giá cả hợp lý.",
    rating: 5
  },
  {
    name: "Trần Thị B",
    role: "Product Manager, Tech Inc",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Giao diện quản lý trực quan và dễ sử dụng. Việc tích hợp vào sản phẩm của chúng tôi diễn ra nhanh chóng và API hoạt động rất ổn định.",
    rating: 5
  },
  {
    name: "Lê Văn C",
    role: "Giám đốc kỹ thuật, Game Studio",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    content: "Tính năng gắn license với phần cứng máy tính đã giúp chúng tôi bảo vệ game của mình khỏi việc chia sẻ trái phép. Hỗ trợ kỹ thuật tuyệt vời.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Khách hàng nói gì về chúng tôi</h2>
          <p className="text-muted-foreground">
            Những đánh giá từ khách hàng đã sử dụng hệ thống license key của chúng tôi
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl shadow-md p-6 relative license-card group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Quote className="h-5 w-5" />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
