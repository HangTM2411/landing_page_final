import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Mapping giá trị select sang tên gói đầy đủ cho Google Form
const packageNames = {
  'brandbox': 'GÓI BRANDBOX',
  'cheapy': 'GÓI CHEAPY',
  'buid': 'GÓI BUID',
  'companion': 'GÓI COMPANION',
  'reboot': 'GÓI REBOOT'
};

export function ConsultationModal({ open, onOpenChange }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.email || !formData.package) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Entry IDs - VUI LÒNG KIỂM TRA LẠI BẰNG CÁCH LÀM THEO HƯỚNG DẪN
      const entries = {
        name: 'entry.326536544',
        phone: 'entry.1415292674', 
        email: 'entry.723179666',
        package: 'entry.72725569'
      };
      
      // Log dữ liệu để debug
      console.log('Submitting data:', {
        [entries.name]: formData.name,
        [entries.phone]: formData.phone,
        [entries.email]: formData.email,
        [entries.package]: packageNames[formData.package as keyof typeof packageNames]
      });
      
      // Tạo URL với query parameters
      const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeP9a_f0XTX-gsX8P_UMDa51vO9dyZ42NJdeeV5gO_Xsp4lEg/formResponse';
      const params = new URLSearchParams();
      params.append(entries.name, formData.name);
      params.append(entries.phone, formData.phone);
      params.append(entries.email, formData.email);
      params.append(entries.package, packageNames[formData.package as keyof typeof packageNames]);
      
      const fullUrl = `${baseUrl}?${params.toString()}`;
      
      // Gửi form qua iframe ẩn (POST method)
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe_' + Date.now();
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      const form = document.createElement('form');
      form.action = baseUrl;
      form.method = 'POST';
      form.target = iframe.name;
      
      // Thêm các fields
      Object.entries({
        [entries.name]: formData.name,
        [entries.phone]: formData.phone,
        [entries.email]: formData.email,
        [entries.package]: packageNames[formData.package as keyof typeof packageNames]
      }).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });
      
      document.body.appendChild(form);
      form.submit();
      
      // Cleanup
      setTimeout(() => {
        if (document.body.contains(form)) document.body.removeChild(form);
        if (document.body.contains(iframe)) document.body.removeChild(iframe);
      }, 2000);
      
      // Hiển thị thông báo thành công
      setTimeout(() => {
        alert('Cảm ơn bạn! Chúng tôi đã nhận được thông tin và sẽ liên hệ với bạn sớm nhất.');
      }, 500);
      
      // Reset form và đóng modal
      setFormData({ name: '', phone: '', email: '', package: '' });
      onOpenChange(false);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      setTimeout(() => setIsSubmitting(false), 1000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 p-0 gap-0 overflow-hidden">
        {/* Header với gradient */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 p-6 text-white relative">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white text-center">
              Đăng Ký Nhận Tư Vấn
            </DialogTitle>
            <DialogDescription className="text-blue-100 text-center mt-2">
              Để lại thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Tên */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Họ và tên <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Nhập họ và tên của bạn"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 bg-white"
            />
          </div>

          {/* Số điện thoại */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">
              Số điện thoại <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Nhập số điện thoại"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 bg-white"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Nhập địa chỉ email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 bg-white"
            />
          </div>

          {/* Gói dịch vụ */}
          <div className="space-y-2">
            <Label htmlFor="package" className="text-gray-700">
              Bạn đang quan tâm đến gói nào? <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.package}
              onValueChange={(value) => setFormData({ ...formData, package: value })}
              required
            >
              <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 bg-white">
                <SelectValue placeholder="Chọn gói dịch vụ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brandbox">GÓI BRANDBOX</SelectItem>
                <SelectItem value="cheapy">GÓI CHEAPY</SelectItem>
                <SelectItem value="buid">GÓI BUID</SelectItem>
                <SelectItem value="companion">GÓI COMPANION</SelectItem>
                <SelectItem value="reboot">GÓI REBOOT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Button submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-bold transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? 'ĐANG GỬI...' : 'GỬI THÔNG TIN'}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Thông tin của bạn sẽ được bảo mật tuyệt đối
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
