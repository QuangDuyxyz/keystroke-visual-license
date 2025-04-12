
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "License Key là gì và tại sao tôi cần nó?",
    answer: "License Key là một chuỗi ký tự duy nhất dùng để xác thực và kích hoạt phần mềm. Nó giúp bảo vệ sản phẩm khỏi việc sao chép trái phép và đảm bảo chỉ những người dùng đã trả phí mới có thể sử dụng phần mềm."
  },
  {
    question: "Làm thế nào để tôi tích hợp hệ thống license key vào phần mềm của mình?",
    answer: "Chúng tôi cung cấp SDK và API đơn giản để tích hợp vào phần mềm của bạn. Quá trình tích hợp thường chỉ mất vài giờ với các hướng dẫn chi tiết và hỗ trợ kỹ thuật từ đội ngũ của chúng tôi."
  },
  {
    question: "License key có thể chuyển sang máy tính khác không?",
    answer: "Mặc định, license key được gắn với một máy tính cụ thể thông qua định danh phần cứng. Tuy nhiên, bạn có thể thiết lập quy tắc cho phép người dùng chuyển license với số lần giới hạn hoặc thông qua quy trình xác thực."
  },
  {
    question: "Hệ thống có hoạt động với các ứng dụng offline không?",
    answer: "Có. Chúng tôi hỗ trợ cả phương thức kích hoạt online và offline. Đối với môi trường không có internet, người dùng có thể kích hoạt thông qua mã kích hoạt hoặc file license."
  },
  {
    question: "Các biện pháp bảo mật nào được sử dụng để bảo vệ license key?",
    answer: "Chúng tôi sử dụng mã hóa tiên tiến (AES-256, RSA), bảo vệ chống dịch ngược, xác thực hai chiều, và các kỹ thuật chống debug để đảm bảo license key không thể bị giả mạo hoặc sao chép."
  },
  {
    question: "Chi phí cho dịch vụ license key là bao nhiêu?",
    answer: "Chúng tôi cung cấp nhiều gói dịch vụ với giá từ 199.000đ/tháng cho nhà phát triển cá nhân đến các gói doanh nghiệp tùy chỉnh. Vui lòng liên hệ với đội ngũ bán hàng để nhận báo giá phù hợp với nhu cầu của bạn."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Câu hỏi thường gặp</h2>
          <p className="text-muted-foreground">
            Những thắc mắc phổ biến về hệ thống license key của chúng tôi
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-card rounded-xl shadow-md overflow-hidden">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-secondary/20 transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
