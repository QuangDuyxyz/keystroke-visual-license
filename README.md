# LABone AutoColony - Hệ thống quản lý bản quyền

## Thông tin Project

**URL**: https://labone-autocolony.vercel.app

## Cách chỉnh sửa code

Có nhiều cách để chỉnh sửa ứng dụng này:

**Sử dụng IDE yêu thích của bạn**

Bạn có thể làm việc locally bằng IDE của mình, clone repo này và push các thay đổi.

Yêu cầu: Cài đặt Node.js & npm - [cài đặt với nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Các bước thực hiện:

```sh
# Bước 1: Clone repository
git clone https://github.com/QuangDuyxyz/keystroke-visual-license.git

# Bước 2: Di chuyển vào thư mục project
cd keystroke-visual-license

# Bước 3: Cài đặt dependencies
npm install

# Bước 4: Chạy development server
npm run dev
```

**Chỉnh sửa trực tiếp trên GitHub**

- Truy cập file cần sửa
- Click nút "Edit" (biểu tượng bút chì) ở góc phải
- Thực hiện thay đổi và commit

**Sử dụng GitHub Codespaces**

- Truy cập trang chính của repository
- Click nút "Code" (màu xanh lá) ở góc phải
- Chọn tab "Codespaces"
- Click "New codespace" để khởi tạo môi trường
- Chỉnh sửa file và commit/push thay đổi

## Công nghệ sử dụng

Project được xây dựng với:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Cách deploy

Project được deploy tự động trên Vercel:

1. Mỗi khi có push code lên GitHub
2. Vercel sẽ tự động build và deploy
3. Kiểm tra status tại: https://vercel.com/labonekingautocolony/labone-autocolony

## Custom Domain

Để kết nối domain tùy chỉnh:

1. Truy cập Vercel Dashboard
2. Vào Project Settings > Domains
3. Click "Add Domain"
4. Làm theo hướng dẫn cấu hình DNS
