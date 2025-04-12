
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/3a53cd44-aca9-4ce8-be34-607c7c8ed5d1.png" 
                alt="LABone Logo" 
                className="h-10 w-auto" 
              />
            </Link>
            <p className="text-muted-foreground mb-4">
              Công Ty TNHH Thiết Bị Khoa Học LABone - All For Science. Chuyên cung cấp các thiết bị và giải pháp khoa học kỹ thuật cao, bao gồm máy đếm khuẩn lạc KingAutoColony cùng hệ thống quản lý bản quyền.
            </p>
            <div className="mb-4 text-sm text-muted-foreground">
              <p>Công ty LABone được chứng nhận ISO 9001 và ISO 13485</p>
            </div>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/laboneofficial/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Sản phẩm</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  KingAutoColony
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Tủ ấm - Tủ ấm vi sinh
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">
                  Tủ sấy - Tủ sấy phòng thí nghiệm
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Tủ an toàn sinh học
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Phòng sạch - Laminar flow
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Công ty</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/docs" className="text-muted-foreground hover:text-primary transition-colors">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Thương hiệu
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Thị trường
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-muted-foreground hover:text-primary transition-colors">
                  Tài liệu
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Chứng nhận
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-muted-foreground">
                  228/13/3 Nguyễn Thị Lắng, Tân Phú Trung, Củ Chi, Thành phố Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground">
                  Hotline: 0978 782 147
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground">
                  Email: info@labone.vn
                </span>
              </li>
              <li className="text-muted-foreground ml-7">
                MST: 0312088377
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Công Ty TNHH Thiết Bị Khoa Học LABone - All For Science. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Chính sách riêng tư
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Điều khoản sử dụng
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
