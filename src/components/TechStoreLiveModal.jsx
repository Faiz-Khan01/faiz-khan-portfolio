import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  RefreshCw,
  Copy,
  Check,
  PackageCheck,
  Tag
} from 'lucide-react';
import confetti from 'canvas-confetti';

const initialProducts = [
  {
    id: 1,
    name: 'Keychron Pro Mechanical Keyboard',
    category: 'Hardware',
    price: 4999,
    originalPrice: 6499,
    rating: 4.9,
    reviews: 142,
    badge: 'Best Seller',
    image: '⌨️',
    description: 'Hot-swappable mechanical switches, PBT keycaps, wireless Bluetooth & wired Type-C.'
  },
  {
    id: 2,
    name: '34" UltraWide 144Hz Monitor',
    category: 'Hardware',
    price: 27999,
    originalPrice: 32999,
    rating: 4.8,
    reviews: 89,
    badge: 'Pro Dev',
    image: '🖥️',
    description: 'IPS curved panel, 3440x1440 WQHD, USB-C 90W PD power delivery for laptop docks.'
  },
  {
    id: 3,
    name: 'Sony ANC Wireless Headphones',
    category: 'Audio',
    price: 14499,
    originalPrice: 19999,
    rating: 4.9,
    reviews: 210,
    badge: 'Hi-Fi Audio',
    image: '🎧',
    description: 'Industry-leading active noise canceling, 30-hour battery life, speak-to-chat microphone.'
  },
  {
    id: 4,
    name: 'Spring Boot Developer Desk Mat',
    category: 'Peripherals',
    price: 899,
    originalPrice: 1299,
    rating: 4.7,
    reviews: 64,
    badge: 'Exclusive',
    image: '💻',
    description: 'Extra-large 900x400mm waterproof micro-woven cloth with shortcut cheat-sheets.'
  },
  {
    id: 5,
    name: 'Ergonomic Vertical Mouse',
    category: 'Peripherals',
    price: 2499,
    originalPrice: 3199,
    rating: 4.6,
    reviews: 51,
    badge: 'Ergo Health',
    image: '🖱️',
    description: 'Natural 57-degree handshake posture reduces forearm strain. Dual Bluetooth & 2.4G.'
  },
  {
    id: 6,
    name: '10-in-1 Aluminum USB-C Hub',
    category: 'Hardware',
    price: 3299,
    originalPrice: 4499,
    rating: 4.8,
    reviews: 118,
    badge: 'Top Rated',
    image: '🔌',
    description: 'Dual 4K HDMI, Gigabit Ethernet, 100W Power Delivery, SD/TF reader and 3x USB 3.1.'
  }
];

export default function TechStoreLiveModal({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [cart, setCart] = useState([
    { ...initialProducts[0], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('BROWSE'); // 'BROWSE' | 'RAZORPAY_MODAL' | 'SUCCESS'
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const categories = ['ALL', 'Hardware', 'Audio', 'Peripherals'];

  const filteredProducts = selectedCategory === 'ALL'
    ? initialProducts
    : initialProducts.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const cartTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const rawSubtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = discountApplied ? Math.round(rawSubtotal * 0.1) : 0;
  const finalTotal = rawSubtotal - discountAmount;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'FAIZ10' || couponCode.trim().toUpperCase() === 'SPRING10') {
      setDiscountApplied(true);
    }
  };

  const handleInitiateRazorpay = () => {
    setIsCartOpen(false);
    setCheckoutStep('RAZORPAY_MODAL');
  };

  const handleCompleteRazorpay = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setCheckoutStep('SUCCESS');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1400);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://faiz-khan-portfolio-omega.vercel.app/#projects');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      
      <div className="bg-[#0b1120] border border-slate-700 rounded-3xl max-w-5xl w-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Browser Top Navigation Bar */}
        <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          
          {/* Window Control Buttons */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 text-xs font-mono font-semibold text-slate-400 hidden sm:inline">
              TechStore E-Commerce • Production Environment
            </span>
          </div>

          {/* Simulated URL bar */}
          <div className="flex-1 max-w-md mx-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 truncate">
              <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-emerald-400 font-semibold">https://</span>
              <span className="text-slate-200 truncate">faiz-khan-portfolio.vercel.app/techstore</span>
            </div>
            <button 
              onClick={handleCopyLink}
              title="Copy URL" 
              className="text-slate-500 hover:text-slate-300 ml-2"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Close & External Link */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartTotalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-bold flex items-center justify-center font-mono">
                  {cartTotalItems}
                </span>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Live Project Deployment Banner */}
        <div className="px-6 py-2.5 bg-gradient-to-r from-emerald-950/70 via-slate-900 to-cyan-950/70 border-b border-emerald-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono font-bold text-emerald-400 uppercase tracking-wide">
              Live Deployed E-Commerce Project
            </span>
            <span className="text-slate-400 hidden md:inline">• Java Spring Boot + Razorpay + React.js + Docker</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span className="px-2 py-0.5 rounded bg-slate-800/90 text-cyan-400 border border-slate-700">
              Docker Engine: Active
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800/90 text-emerald-400 border border-slate-700">
              Razorpay API: Connected
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          
          {checkoutStep === 'BROWSE' && (
            <div>
              {/* Hero Banner in Store */}
              <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950/50 to-slate-900 border border-slate-800 mb-8 overflow-hidden">
                <div className="relative z-10 max-w-xl">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Spring Boot 3 + React 18
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-display font-extrabold text-white">
                    Faiz Khan's <span className="gradient-text-emerald">TechStore Catalog</span>
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300">
                    Interactive simulation of the deployed eCommerce store. Add items to your cart and test the integrated Razorpay cryptographic payment flow! Use coupon code <code className="text-emerald-400 bg-slate-800 px-1 py-0.5 rounded">FAIZ10</code> for 10% off.
                  </p>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all shrink-0 ${
                      selectedCategory === cat
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="h-28 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-center text-5xl mb-4 group-hover:scale-105 transition-transform">
                        {p.image}
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-emerald-400">
                          {p.badge}
                        </span>
                        <span className="text-xs font-mono text-amber-400">★ {p.rating}</span>
                      </div>

                      <h4 className="font-display font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                        {p.name}
                      </h4>
                      <p className="mt-1 text-xs text-slate-400 line-clamp-2">
                        {p.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <div>
                        <span className="text-base font-bold text-white font-mono">₹{p.price.toLocaleString()}</span>
                        <span className="ml-2 text-xs text-slate-500 line-through font-mono">₹{p.originalPrice.toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => addToCart(p)}
                        className="px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center gap-1.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          )}

          {/* Razorpay Authentic Simulated Payment Gateway */}
          {checkoutStep === 'RAZORPAY_MODAL' && (
            <div className="max-w-md mx-auto my-6 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-emerald-500/40 shadow-2xl">
              
              {/* Razorpay Brand Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-base">
                    R
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-sm">Razorpay Checkout</h4>
                    <span className="text-[10px] font-mono text-slate-400">Secured with 256-Bit SSL</span>
                  </div>
                </div>
                <span className="text-sm font-bold text-emerald-400 font-mono">
                  ₹{finalTotal.toLocaleString()}
                </span>
              </div>

              {/* Order Telemetry */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5">
                <div className="flex justify-between text-slate-400">
                  <span>Merchant:</span>
                  <span className="text-white">TechStore (Faiz Khan)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Order ID:</span>
                  <span className="text-cyan-400">order_Lz{Math.floor(Math.random() * 89999 + 10000)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Signature Mode:</span>
                  <span className="text-emerald-400">HMAC-SHA256</span>
                </div>
              </div>

              {/* Simulated Payment Modes */}
              <div className="mt-5 space-y-3">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-emerald-500/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">Test Card (Pre-filled)</div>
                      <div className="text-[10px] font-mono text-slate-400">4111 •••• •••• 1111 (08/29)</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-2">
                <button
                  onClick={handleCompleteRazorpay}
                  disabled={isProcessingPayment}
                  className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                >
                  {isProcessingPayment ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Verifying Backend Signature...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Pay ₹{finalTotal.toLocaleString()} (Test Mode)</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setCheckoutStep('BROWSE')}
                  className="text-xs font-mono text-slate-400 hover:text-white py-1 transition-colors"
                >
                  Cancel and return to store
                </button>
              </div>

            </div>
          )}

          {/* Payment Success Receipt */}
          {checkoutStep === 'SUCCESS' && (
            <div className="max-w-md mx-auto my-6 p-8 rounded-3xl bg-slate-900 border border-emerald-500/60 text-center shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400 mb-4">
                <PackageCheck className="w-8 h-8" />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white">
                Payment Successful!
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                Your test order was processed through Faiz's Spring Boot payment controller with HMAC-SHA256 signature verification.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 text-left font-mono text-xs space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Payment ID:</span>
                  <span className="text-emerald-400">pay_test_{Math.floor(Math.random() * 899999 + 100000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Amount Verified:</span>
                  <span className="text-white font-bold">₹{finalTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Docker Parity:</span>
                  <span className="text-cyan-400">Clean 200 OK</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => {
                    setCart([]);
                    setCheckoutStep('BROWSE');
                  }}
                  className="flex-1 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  Close Demo
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Slide-out Cart Drawer */}
        {isCartOpen && (
          <div className="absolute top-14 bottom-0 right-0 w-full sm:w-96 bg-slate-900/95 backdrop-blur-md border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl z-20 animate-slideLeft">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-display font-bold text-white text-base">Your Cart</h4>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="mt-4 space-y-3 max-h-[45vh] overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="py-8 text-center text-xs text-slate-400 font-mono">
                    Cart is empty. Add products from the catalog!
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3"
                    >
                      <span className="text-2xl">{item.image}</span>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-display font-semibold text-xs text-white truncate">{item.name}</h5>
                        <span className="text-xs font-mono text-emerald-400">₹{item.price.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-slate-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-bold text-white px-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-slate-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Coupon Form */}
              {cart.length > 0 && (
                <form onSubmit={handleApplyCoupon} className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon (e.g. FAIZ10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal:</span>
                    <span>₹{rawSubtotal.toLocaleString()}</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Discount (10%):</span>
                      <span>-₹{discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-slate-800">
                    <span>Total:</span>
                    <span className="text-emerald-400 font-mono">₹{finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={handleInitiateRazorpay}
                  className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Checkout with Razorpay</span>
                </button>
              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
}
