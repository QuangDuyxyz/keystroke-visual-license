
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, KeyRound, CheckCircle2, Monitor, Calendar } from "lucide-react";
import { toast } from "sonner";

const KeyGeneration = () => {
  const [generatedKey, setGeneratedKey] = useState("");
  const [copied, setCopied] = useState(false);
  const [productName, setProductName] = useState("");
  const [computerName, setComputerName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomKey = () => {
    // Format: XXXX-XXXX-XXXX-XXXX
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    
    // Generate 4 groups of 4 characters
    for (let g = 0; g < 4; g++) {
      for (let i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      if (g < 3) result += "-";
    }
    
    return result;
  };

  const handleGenerateKey = () => {
    if (!productName) {
      toast.error("Vui lòng nhập tên sản phẩm");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const key = generateRandomKey();
      setGeneratedKey(key);
      setIsLoading(false);
      toast.success("Đã tạo license key thành công!");
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedKey);
    setCopied(true);
    toast.success("Đã sao chép key!");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quản lý License Key</h2>
            <p className="text-muted-foreground">
              Tạo và quản lý license key bảo mật cho phần mềm của bạn
            </p>
          </div>
          
          <div className="bg-card shadow-lg rounded-2xl overflow-hidden border border-border">
            <Tabs defaultValue="generate" className="w-full">
              <div className="border-b border-border">
                <TabsList className="w-full flex h-14 bg-secondary/50 px-4 rounded-none justify-start">
                  <TabsTrigger value="generate" className="py-3">
                    <KeyRound className="mr-2 h-4 w-4" />
                    Tạo License Key
                  </TabsTrigger>
                  <TabsTrigger value="verify" className="py-3">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Xác thực License
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="generate" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Tên sản phẩm <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        placeholder="Nhập tên sản phẩm" 
                        value={productName} 
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-1 block flex items-center">
                        <Monitor className="h-4 w-4 mr-1" />
                        Định danh máy tính (tùy chọn)
                      </label>
                      <Input 
                        placeholder="Nhập định danh máy tính" 
                        value={computerName} 
                        onChange={(e) => setComputerName(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-1 block flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Ngày hết hạn (tùy chọn)
                      </label>
                      <Input 
                        type="date" 
                        value={expiryDate} 
                        onChange={(e) => setExpiryDate(e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      onClick={handleGenerateKey} 
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Đang tạo..." : "Tạo License Key"}
                    </Button>
                  </div>
                  
                  <div className="bg-secondary/30 p-6 rounded-lg flex flex-col items-center justify-center">
                    <div className="text-center">
                      <KeyRound className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">License Key của bạn</h3>
                      
                      {generatedKey ? (
                        <div className="animate-slide-up">
                          <div className="relative">
                            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4 text-xl font-mono tracking-wider overflow-hidden break-all">
                              {generatedKey}
                            </div>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="absolute top-2 right-2"
                              onClick={copyToClipboard}
                            >
                              {copied ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Key này được mã hóa và bảo mật. Chỉ hoạt động với sản phẩm và máy tính được chỉ định.
                          </p>
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm">
                          Nhập thông tin sản phẩm và nhấn "Tạo License Key" để tạo key mới
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="verify" className="p-6">
                <div className="max-w-md mx-auto space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      License Key <span className="text-red-500">*</span>
                    </label>
                    <Input placeholder="Nhập license key" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Tên sản phẩm <span className="text-red-500">*</span>
                    </label>
                    <Input placeholder="Nhập tên sản phẩm" />
                  </div>
                  
                  <Button className="w-full">
                    Xác thực License Key
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyGeneration;
