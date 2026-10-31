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
  Tag, 
  Layers, 
  BarChart3, 
  Send, 
  MessageSquare, 
  Truck, 
  MapPin, 
  FileText, 
  Sliders, 
  User, 
  Search, 
  ChevronRight, 
  Eye, 
  RotateCw, 
  Maximize2, 
  Percent, 
  Building2, 
  Server, 
  Database, 
  Grid, 
  List, 
  Printer, 
  Clock, 
  Smartphone, 
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Luxury catalog items matching the resume specification
const luxuryCatalog = [
  {
    id: 'top-1',
    name: 'Milano Double-Breasted Wool Blazer',
    category: 'Apparel',
    department: 'Outerwear',
    price: 14999,
    originalPrice: 19999,
    rating: 4.9,
    reviews: 84,
    badge: 'Atelier Edition',
    image: '🧥',
    color: '#2a1a1f',
    sizes: ['S (38")', 'M (40")', 'L (42")', 'XL (44")'],
    defaultSize: 'M (40")',
    description: 'Italian super-130s virgin wool with peak lapels, horn buttons, and silk lining.',
    fitNotes: 'Structured shoulder with relaxed torso drape. Perfect for evening galas.'
  },
  {
    id: 'top-2',
    name: 'Silk & Linen Resort Overshirt',
    category: 'Apparel',
    department: 'Tops',
    price: 4499,
    originalPrice: 6200,
    rating: 4.8,
    reviews: 62,
    badge: 'Bespoke',
    image: '👔',
    color: '#341f25',
    sizes: ['S (38")', 'M (40")', 'L (42")', 'XL (44")'],
    defaultSize: 'M (40")',
    description: 'Pure mulberry silk woven with French flax linen for ultra-breathable luxury.',
    fitNotes: 'True to size with straight drape.'
  },
  {
    id: 'bottom-1',
    name: 'Pleated High-Rise Wool Trousers',
    category: 'Bottoms',
    department: 'Tailoring',
    price: 5299,
    originalPrice: 7500,
    rating: 4.9,
    reviews: 47,
    badge: 'Trending',
    image: '👖',
    color: '#1a1013',
    sizes: ['30"', '32"', '34"', '36"'],
    defaultSize: '32"',
    description: 'Double reverse pleats, side-tab waist adjusters, and unfinished cuffs for custom tailoring.',
    fitNotes: 'High-rise waist with gentle taper towards ankle.'
  },
  {
    id: 'footwear-1',
    name: 'Handcrafted Calfskin Belgian Loafers',
    category: 'Footwear',
    department: 'Leather Goods',
    price: 8499,
    originalPrice: 11999,
    rating: 4.9,
    reviews: 119,
    badge: 'Iconic',
    image: '👞',
    color: '#241418',
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    defaultSize: 'UK 9',
    description: 'Goodyear welted Tuscan calf leather with memory foam insole and stacked leather heel.',
    fitNotes: 'Fits snug initially, molds to foot contours within 3 wears.'
  },
  {
    id: 'perfume-1',
    name: 'Santal Impérial — Pure Extrait',
    category: 'Fragrances',
    department: 'Haute Parfumerie',
    price: 6800,
    originalPrice: 8500,
    rating: 5.0,
    reviews: 215,
    badge: 'Signature',
    image: '✨',
    color: '#38161e',
    sizes: ['50 ml (Travel)', '100 ml (Flacon)', '150 ml (Atelier)'],
    defaultSize: '100 ml (Flacon)',
    description: 'Creamy Australian sandalwood blended with cardamom, violet leaves, and ambergris.',
    fitNotes: 'Extrait concentration (32% oil). 14+ hours longevity.'
  },
  {
    id: 'perfume-2',
    name: 'Oud Nuit Royale — Private Blend',
    category: 'Fragrances',
    department: 'Haute Parfumerie',
    price: 8500,
    originalPrice: 10999,
    rating: 4.9,
    reviews: 98,
    badge: 'Rare Batch',
    image: '🌟',
    color: '#2b0b12',
    sizes: ['50 ml (Travel)', '100 ml (Flacon)', '150 ml (Atelier)'],
    defaultSize: '100 ml (Flacon)',
    description: 'Cambodian wild agarwood aged with Damascus rose petals and smoked vanilla bourbon.',
    fitNotes: 'Rich projection with dark sillage. Best for black-tie affairs.'
  }
];

export default function TechStoreLiveModal({ isOpen, onClose }) {
  // Navigation tabs: 'FITTING_ROOM' | 'AI_STYLIST' | 'CATALOG' | 'ADMIN_SUITE' | 'LOGISTICS' | 'APIS'
  const [activeTab, setActiveTab] = useState('FITTING_ROOM');
  
  // 3D Virtual Fitting Room State
  const [wornTop, setWornTop] = useState(luxuryCatalog[0]);
  const [wornBottom, setWornBottom] = useState(luxuryCatalog[2]);
  const [wornPerfume, setWornPerfume] = useState(luxuryCatalog[4]);
  const [mannequinSize, setMannequinSize] = useState('M'); // S, M, L, XL
  const [mannequinRotation, setMannequinRotation] = useState(0);

  // Shopping Cart & Sizing State
  const [cart, setCart] = useState([
    { ...luxuryCatalog[0], selectedSize: 'M (40")', quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('CART'); // 'CART' | 'RAZORPAY_POPUP' | 'INVOICE'
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [copiedLink, setCopiedLink] = useState(false);

  // AI Stylist Chat State
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: 'Good day! I am your AI Personal Stylist & Fragrance Concierge. Tell me the occasion or aesthetic you seek, and I will recommend curated pieces from our active inventory with live 3D fitting transfer.',
      cards: [luxuryCatalog[0], luxuryCatalog[4]]
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Admin Taxonomy & Scrubber State
  const [adminViewMode, setAdminViewMode] = useState('GRID'); // 'GRID' | 'TABLE'
  const [activeWeekday, setActiveWeekday] = useState('WED');

  // Courier & Pincode State
  const [pincodeInput, setPincodeInput] = useState('440001');
  const [pincodeDetails, setPincodeDetails] = useState({
    city: 'Nagpur',
    district: 'Nagpur Urban',
    state: 'Maharashtra',
    sla: 'Next-Day Priority Delivery (Air)',
    couriers: ['BlueDart Express', 'Delhivery Priority', 'DTDC Air Cargo']
  });

  if (!isOpen) return null;

  // Handle Mannequin Draping
  const handleWearItem = (item) => {
    if (item.category === 'Apparel') setWornTop(item);
    else if (item.category === 'Bottoms') setWornBottom(item);
    else if (item.category === 'Fragrances') setWornPerfume(item);
  };

  const handleRemoveItem = (category) => {
    if (category === 'Apparel') setWornTop(null);
    else if (category === 'Bottoms') setWornBottom(null);
    else if (category === 'Fragrances') setWornPerfume(null);
  };

  // Add Entire Outfit from 3D room to Cart
  const handleAddOutfitToCart = () => {
    const itemsToAdd = [];
    if (wornTop) itemsToAdd.push({ ...wornTop, selectedSize: `${mannequinSize} (${mannequinSize === 'S' ? '38"' : mannequinSize === 'M' ? '40"' : mannequinSize === 'L' ? '42"' : '44"'})`, quantity: 1 });
    if (wornBottom) itemsToAdd.push({ ...wornBottom, selectedSize: mannequinSize === 'S' ? '30"' : mannequinSize === 'M' ? '32"' : mannequinSize === 'L' ? '34"' : '36"', quantity: 1 });
    if (wornPerfume) itemsToAdd.push({ ...wornPerfume, selectedSize: '100 ml (Flacon)', quantity: 1 });

    setCart(prev => {
      let updated = [...prev];
      itemsToAdd.forEach(newItem => {
        const existingIdx = updated.findIndex(i => i.id === newItem.id && i.selectedSize === newItem.selectedSize);
        if (existingIdx >= 0) {
          updated[existingIdx].quantity += 1;
        } else {
          updated.push(newItem);
        }
      });
      return updated;
    });

    setIsCartOpen(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  // Add Single Product with selected size to Cart
  const handleAddToCart = (product, size) => {
    setCart(prev => {
      const chosenSize = size || product.defaultSize;
      const existingIdx = prev.findIndex(item => item.id === product.id && item.selectedSize === chosenSize);
      if (existingIdx >= 0) {
        const next = [...prev];
        next[existingIdx].quantity += 1;
        return next;
      }
      return [...prev, { ...product, selectedSize: chosenSize, quantity: 1 }];
    });
  };

  const updateCartQty = (idx, delta) => {
    setCart(prev => 
      prev.map((item, i) => {
        if (i === idx) {
          const nextQty = item.quantity + delta;
          return nextQty > 0 ? { ...item, quantity: nextQty } : null;
        }
        return item;
      }).filter(Boolean)
    );
  };

  // Pricing calculations
  const rawSubtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const discountAmount = discountApplied ? Math.round(rawSubtotal * 0.1) : 0;
  const gstAmount = Math.round((rawSubtotal - discountAmount) * 0.18);
  const finalTotal = rawSubtotal - discountAmount + gstAmount;

  // AI Stylist send message handler
  const handleSendChatMessage = (textToSend = chatInput) => {
    if (!textToSend.trim()) return;
    const userMsg = { id: Date.now(), sender: 'user', text: textToSend };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');

    setTimeout(() => {
      let botResponse = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: '',
        cards: []
      };

      const lower = textToSend.toLowerCase();
      if (lower.includes('gala') || lower.includes('evening') || lower.includes('suit') || lower.includes('blazer')) {
        botResponse.text = "For an evening black-tie or executive gala, I strongly recommend the Milano Virgin Wool Double-Breasted Blazer with high-rise pleated trousers. Pair this with our Santal Impérial or Oud Nuit Royale for an unforgettable presence.";
        botResponse.cards = [luxuryCatalog[0], luxuryCatalog[2], luxuryCatalog[4]];
      } else if (lower.includes('fragrance') || lower.includes('scent') || lower.includes('perfume')) {
        botResponse.text = "Our Haute Parfumerie vault features two distinct profiles: Santal Impérial (warm, creamy Australian sandalwood) and Oud Nuit Royale (smoky Cambodian agarwood with Damascus rose). Both have 14+ hours longevity.";
        botResponse.cards = [luxuryCatalog[4], luxuryCatalog[5]];
      } else if (lower.includes('order') || lower.includes('track') || lower.includes('awb')) {
        botResponse.text = "Order #TK-8842 has been dispatched via BlueDart Express (Air Priority). Current status: IN TRANSIT. Expected delivery to Nagpur, MH: Tomorrow by 1:00 PM.";
        botResponse.cards = [];
      } else {
        botResponse.text = `Here are our top editorial highlights matching "${textToSend}". You can drape them directly onto your 3D mannequin or add them to your cart.`;
        botResponse.cards = [luxuryCatalog[1], luxuryCatalog[3]];
      }

      setChatMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  // Indian Pincode Resolution
  const handlePincodeLookup = (code) => {
    setPincodeInput(code);
    if (code.length === 6) {
      if (code.startsWith('44')) {
        setPincodeDetails({
          city: 'Nagpur',
          district: 'Nagpur Urban',
          state: 'Maharashtra',
          sla: 'Guaranteed Next-Day Delivery (Air Priority)',
          couriers: ['BlueDart Express Air', 'Delhivery Air', 'DTDC Priority']
        });
      } else if (code.startsWith('11')) {
        setPincodeDetails({
          city: 'New Delhi',
          district: 'Central Delhi',
          state: 'Delhi NCR',
          sla: 'Same-Day / Next-Day Delivery (Metro Hub)',
          couriers: ['Delhivery Metro', 'BlueDart Apex', 'Shadowfax']
        });
      } else if (code.startsWith('40')) {
        setPincodeDetails({
          city: 'Mumbai',
          district: 'Mumbai Suburban',
          state: 'Maharashtra',
          sla: '24-Hour Express Logistics',
          couriers: ['BlueDart Express', 'FedEx Domestic', 'Ekart']
        });
      } else {
        setPincodeDetails({
          city: 'Bengaluru / Tier-1',
          district: 'Metro Zone',
          state: 'Karnataka',
          sla: '2-Day Express Air Delivery',
          couriers: ['Delhivery Express', 'BlueDart', 'DTDC']
        });
      }
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://techstore-catalog.vercel.app/');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Weekday data for admin scrubber
  const weekdayAnalytics = {
    SAT: { revenue: 58400, orders: 184, conversion: '4.8%' },
    SUN: { revenue: 74200, orders: 242, conversion: '5.6%' },
    MON: { revenue: 42100, orders: 135, conversion: '3.9%' },
    TUE: { revenue: 49800, orders: 156, conversion: '4.1%' },
    WED: { revenue: 68500, orders: 218, conversion: '5.2%' },
    THU: { revenue: 54300, orders: 172, conversion: '4.4%' },
    FRI: { revenue: 81200, orders: 265, conversion: '6.1%' },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/92 backdrop-blur-md animate-fadeIn select-none">
      <div className="bg-[#0b0204] border border-red-950/90 rounded-3xl max-w-6xl w-full max-h-[96vh] flex flex-col shadow-2xl overflow-hidden relative text-zinc-100">
        
        {/* Top Control Bar */}
        <div className="px-5 py-3.5 bg-[#120306] border-b border-red-950/80 flex items-center justify-between gap-4 shrink-0">
          
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-red-600"></span>
            <div className="ml-2 flex items-center gap-2">
              <span className="font-display font-extrabold text-white text-sm sm:text-base tracking-tight">
                TechStore <span className="text-red-400">PRO</span>
              </span>
              <span className="hidden md:inline px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-950/90 text-rose-300 border border-red-500/40">
                Spring Boot 3.2.5 + React 18 + Razorpay
              </span>
            </div>
          </div>

          {/* Simulated URL bar */}
          <div className="flex-1 max-w-md mx-2 px-3 py-1.5 rounded-xl bg-[#070102] border border-red-950 flex items-center justify-between text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-1.5 truncate">
              <Lock className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span className="text-red-400 font-semibold">https://</span>
              <span className="text-zinc-200 truncate">techstore-catalog.vercel.app</span>
            </div>
            <button 
              onClick={handleCopyLink}
              title="Copy Live Storefront URL" 
              className="text-zinc-500 hover:text-zinc-300 ml-2 cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-red-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <a
              href="https://techstore-catalog-yw04kw9zf-faiz-khan01s-projects.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-md shadow-red-600/30 transition-all cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live Storefront ↗</span>
            </a>

            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 rounded-xl bg-[#180408] hover:bg-[#25060d] text-zinc-200 transition-colors border border-red-950 cursor-pointer"
              title="Open Shopping Cart Drawer"
            >
              <ShoppingCart className="w-4 h-4 text-rose-300" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-[10px] font-bold flex items-center justify-center font-mono animate-pulse">
                  {cart.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#180408] hover:bg-[#25060d] text-zinc-400 hover:text-white transition-colors border border-red-950 cursor-pointer"
              title="Close Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Feature Navigation Tabs */}
        <div className="px-5 py-2.5 bg-[#0e0305] border-b border-red-950/70 flex items-center gap-2 overflow-x-auto text-xs font-mono shrink-0">
          {[
            { id: 'FITTING_ROOM', label: '🧥 3D Virtual Fitting Room', highlight: true },
            { id: 'AI_STYLIST', label: '🤖 AI Stylist & Concierge' },
            { id: 'CATALOG', label: '🛍️ Luxury Catalog & Sizing' },
            { id: 'ADMIN_SUITE', label: '📊 Executive Admin Suite' },
            { id: 'LOGISTICS', label: '🚚 Logistics & Pincode' },
            { id: 'APIS', label: '🌐 REST APIs & Architecture' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/35 border border-red-500'
                  : 'bg-[#150407] text-zinc-400 hover:text-zinc-200 border border-red-950/80 hover:bg-[#1e060a]'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Main Content Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#080103]">
          
          {/* TAB 1: 3D VIRTUAL FITTING ROOM */}
          {activeTab === 'FITTING_ROOM' && (
            <div className="space-y-6">
              
              {/* Studio Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-red-950/40 via-[#150407] to-amber-950/30 border border-red-950/80">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-950 text-red-300 border border-red-500/40">
                      Interactive Three.js Studio
                    </span>
                    <span className="text-xs text-zinc-400">Atelier Virtual Mannequin Draping</span>
                  </div>
                  <h3 className="font-display font-extrabold text-white text-lg sm:text-xl mt-1">
                    Virtual Fitting Room &amp; Dynamic Size Scaling
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-[#0a0204] p-1 rounded-xl border border-red-950">
                    <span className="text-[11px] font-mono text-zinc-400 px-2">Size:</span>
                    {['S', 'M', 'L', 'XL'].map(sz => (
                      <button
                        key={sz}
                        onClick={() => setMannequinSize(sz)}
                        className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          mannequinSize === sz
                            ? 'bg-red-600 text-white shadow-sm shadow-red-600/40'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleAddOutfitToCart}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-md shadow-red-600/30 cursor-pointer"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Wear &amp; Add Outfit to Bag</span>
                  </button>
                </div>
              </div>

              {/* 3D Studio Stage & Mannequin Display */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* 3D Visual Center Stage */}
                <div className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#130306] via-[#0b0204] to-[#050102] border border-red-950 p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[420px]">
                  
                  {/* Studio ambient glow & turntable spotlight */}
                  <div className="absolute top-1/4 w-80 h-80 bg-red-600/15 rounded-full blur-[90px] pointer-events-none"></div>
                  <div className="absolute bottom-6 w-64 h-16 bg-red-500/10 rounded-full blur-xl pointer-events-none"></div>

                  {/* Rotation Indicator & Compass */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-[11px] font-mono text-zinc-400 bg-black/60 px-3 py-1 rounded-full border border-red-950">
                    <RotateCw className="w-3 h-3 text-red-400 animate-spin" />
                    <span>Turntable Angle: {mannequinRotation}°</span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <button
                      onClick={() => setMannequinRotation((prev) => (prev + 45) % 360)}
                      className="p-1.5 rounded-lg bg-[#180408] hover:bg-[#25060d] text-zinc-300 border border-red-950 text-xs font-mono flex items-center gap-1 cursor-pointer"
                      title="Rotate Mannequin 45°"
                    >
                      <RotateCw className="w-3.5 h-3.5 text-rose-400" />
                      <span>Rotate</span>
                    </button>
                  </div>

                  {/* 3D Mannequin Bust & Draped Clothing Representation */}
                  <div 
                    className="relative flex flex-col items-center justify-center my-6 transition-transform duration-500"
                    style={{ transform: `rotateY(${mannequinRotation}deg)` }}
                  >
                    {/* Head / Neck Stand */}
                    <div className="w-12 h-14 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-800 border border-zinc-600/40 shadow-inner mb-1"></div>
                    <div className="w-6 h-6 bg-zinc-800 border-x border-zinc-700"></div>

                    {/* Torso & Draped Top with Dynamic Size Scaling */}
                    <div 
                      className="relative rounded-2xl p-5 flex flex-col items-center justify-center transition-all duration-300 border shadow-2xl"
                      style={{
                        width: mannequinSize === 'S' ? '180px' : mannequinSize === 'M' ? '204px' : mannequinSize === 'L' ? '228px' : '250px',
                        height: '190px',
                        background: wornTop ? 'linear-gradient(135deg, #2b0d14 0%, #170408 100%)' : 'linear-gradient(135deg, #1c1c1f 0%, #0e0e11 100%)',
                        borderColor: wornTop ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {wornTop ? (
                        <div className="text-center relative">
                          <span className="text-4xl filter drop-shadow-md">{wornTop.image}</span>
                          <h4 className="font-display font-bold text-white text-xs mt-2 px-2 truncate max-w-[170px]">
                            {wornTop.name}
                          </h4>
                          <span className="text-[10px] font-mono text-red-400 font-semibold block">
                            ₹{wornTop.price.toLocaleString('en-IN')} &bull; Size {mannequinSize}
                          </span>
                          <button
                            onClick={() => handleRemoveItem('Apparel')}
                            className="mt-2 text-[10px] font-mono text-zinc-400 hover:text-red-400 underline cursor-pointer"
                          >
                            ✕ Remove Top
                          </button>
                        </div>
                      ) : (
                        <div className="text-center text-zinc-500 font-mono text-xs">
                          <span>Bare Torso</span>
                          <p className="text-[10px] mt-1 text-zinc-600">Select top from rack</p>
                        </div>
                      )}
                    </div>

                    {/* Trousers / Bottoms with Scaling */}
                    <div 
                      className="relative rounded-b-2xl mt-1 p-3 flex flex-col items-center justify-center transition-all duration-300 border shadow-xl"
                      style={{
                        width: mannequinSize === 'S' ? '140px' : mannequinSize === 'M' ? '160px' : mannequinSize === 'L' ? '180px' : '200px',
                        height: '110px',
                        background: wornBottom ? 'linear-gradient(135deg, #1f0b10 0%, #0e0306 100%)' : 'linear-gradient(135deg, #151518 0%, #0a0a0c 100%)',
                        borderColor: wornBottom ? 'rgba(244, 63, 94, 0.4)' : 'rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {wornBottom ? (
                        <div className="text-center">
                          <span className="text-2xl">{wornBottom.image}</span>
                          <p className="text-[10px] font-mono text-zinc-300 truncate max-w-[130px] font-semibold mt-1">
                            {wornBottom.name}
                          </p>
                          <span className="text-[9px] font-mono text-rose-400">
                            ₹{wornBottom.price.toLocaleString('en-IN')}
                          </span>
                          <button
                            onClick={() => handleRemoveItem('Bottoms')}
                            className="block text-[9px] font-mono text-zinc-500 hover:text-red-400 underline cursor-pointer mt-0.5"
                          >
                            ✕ Clear Bottom
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] font-mono text-zinc-600">No Bottom Worn</span>
                      )}
                    </div>

                    {/* Mannequin Studio Stand */}
                    <div className="w-3 h-8 bg-zinc-800 border-x border-zinc-700"></div>
                    <div className="w-32 h-4 rounded-full bg-zinc-800 border border-zinc-600/50 shadow-lg"></div>

                  </div>

                  {/* Active Draped Badges & Total Outfit Price */}
                  <div className="w-full flex items-center justify-between pt-4 border-t border-red-950/60 mt-auto text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-400">Draped Ensemble:</span>
                      <span className="text-rose-300 font-bold">
                        {[wornTop?.name, wornBottom?.name, wornPerfume?.name].filter(Boolean).length} Pieces
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-400">Total Ensemble Value:</span>
                      <span className="text-red-400 font-extrabold text-sm font-mono">
                        ₹{((wornTop?.price || 0) + (wornBottom?.price || 0) + (wornPerfume?.price || 0)).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Right Column: Wardrobe Rack & Garment Details */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="p-4 rounded-2xl bg-[#0f0305] border border-red-950">
                    <h4 className="font-display font-bold text-white text-sm flex items-center gap-2 mb-3">
                      <Sliders className="w-4 h-4 text-red-400" />
                      <span>Smart Sizing &amp; Fitting Parameters</span>
                    </h4>
                    <div className="space-y-2 text-xs font-mono text-zinc-300">
                      <div className="flex justify-between py-1 border-b border-red-950/60">
                        <span className="text-zinc-400">Apparel Chest:</span>
                        <span className="text-white font-bold">{mannequinSize === 'S' ? '38" (96 cm)' : mannequinSize === 'M' ? '40" (101 cm)' : mannequinSize === 'L' ? '42" (106 cm)' : '44" (112 cm)'}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-red-950/60">
                        <span className="text-zinc-400">Waist Circumference:</span>
                        <span className="text-white font-bold">{mannequinSize === 'S' ? '30" (76 cm)' : mannequinSize === 'M' ? '32" (81 cm)' : mannequinSize === 'L' ? '34" (86 cm)' : '36" (91 cm)'}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-red-950/60">
                        <span className="text-zinc-400">Shoulder Drop:</span>
                        <span className="text-white font-bold">Structured Atelier 46°</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-zinc-400">Paired Fragrance Scent:</span>
                        <span className="text-amber-300 font-bold truncate max-w-[160px]">{wornPerfume?.name || 'None Selected'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Wardrobe Carousel Rack */}
                  <div className="p-4 rounded-2xl bg-[#0f0305] border border-red-950 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-display font-bold text-white text-sm flex items-center gap-2">
                        <Tag className="w-4 h-4 text-rose-400" />
                        <span>Wardrobe Rack (Click to Drape)</span>
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-400">6 Items Available</span>
                    </div>

                    <div className="space-y-2.5 overflow-y-auto max-h-[260px] pr-1">
                      {luxuryCatalog.map(item => {
                        const isCurrentlyWorn = wornTop?.id === item.id || wornBottom?.id === item.id || wornPerfume?.id === item.id;
                        return (
                          <div
                            key={item.id}
                            className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                              isCurrentlyWorn
                                ? 'bg-red-950/40 border-red-500/60 shadow-md'
                                : 'bg-[#150407] border-red-950/80 hover:border-red-900'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{item.image}</span>
                              <div>
                                <h5 className="font-bold text-white text-xs leading-tight">{item.name}</h5>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <span className="text-[10px] font-mono text-zinc-400">{item.category}</span>
                                  <span className="text-[10px] font-mono text-rose-300 font-bold">₹{item.price.toLocaleString('en-IN')}</span>
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => handleWearItem(item)}
                              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${
                                isCurrentlyWorn
                                  ? 'bg-red-600 text-white shadow-sm'
                                  : 'bg-[#22060c] hover:bg-red-600 text-zinc-200 hover:text-white border border-red-900/60'
                              }`}
                            >
                              {isCurrentlyWorn ? '✓ Worn' : 'Drape'}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          )}

          {/* TAB 2: AI PERSONAL STYLIST & CONCIERGE */}
          {activeTab === 'AI_STYLIST' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left: Chat Window */}
              <div className="lg:col-span-8 rounded-3xl bg-[#0f0305] border border-red-950 p-5 flex flex-col h-[520px]">
                
                {/* Chat Top Banner */}
                <div className="flex items-center justify-between pb-3 border-b border-red-950/80 shrink-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 p-0.5">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-xs">
                        🤖
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-sm">TechStore AI Concierge</h4>
                      <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active Catalog Retrieval Connected
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#160407] text-[10px] font-mono text-zinc-400 border border-red-950">
                    Real-time Natural Language
                  </span>
                </div>

                {/* Messages Stream */}
                <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
                  {chatMessages.map(msg => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-red-600 text-white rounded-br-sm'
                            : 'bg-[#180509] text-zinc-200 border border-red-950/90 rounded-bl-sm'
                        }`}
                      >
                        <p>{msg.text}</p>

                        {/* Interactive Product Mini-Cards */}
                        {msg.cards && msg.cards.length > 0 && (
                          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-red-900/40">
                            {msg.cards.map(c => (
                              <div
                                key={c.id}
                                className="p-2.5 rounded-xl bg-[#0d0204] border border-red-950 flex flex-col justify-between"
                              >
                                <div className="flex items-start gap-2">
                                  <span className="text-xl">{c.image}</span>
                                  <div>
                                    <h6 className="font-bold text-white text-[11px] truncate max-w-[140px]">{c.name}</h6>
                                    <span className="text-[10px] font-mono text-red-400 font-bold">₹{c.price.toLocaleString('en-IN')}</span>
                                  </div>
                                </div>
                                <div className="mt-2 flex items-center gap-1.5 pt-1.5 border-t border-red-950/60">
                                  <button
                                    onClick={() => {
                                      handleWearItem(c);
                                      setActiveTab('FITTING_ROOM');
                                    }}
                                    className="flex-1 py-1 px-1.5 rounded bg-[#20050a] hover:bg-red-600 text-[10px] font-mono text-rose-200 hover:text-white transition-colors cursor-pointer text-center"
                                  >
                                    🧥 Fit in 3D
                                  </button>
                                  <button
                                    onClick={() => handleAddToCart(c, c.defaultSize)}
                                    className="py-1 px-2 rounded bg-red-600 hover:bg-red-500 text-[10px] font-mono text-white transition-colors cursor-pointer"
                                  >
                                    + Add
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Preset Buttons */}
                <div className="py-2 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono text-zinc-400 shrink-0">
                  <span className="shrink-0 text-zinc-500">Presets:</span>
                  {[
                    'Recommend an evening gala outfit',
                    'Which fragrance pairs with black blazer?',
                    'Outerwear consultation',
                    'Where is order #TK-8842?'
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendChatMessage(p)}
                      className="px-2.5 py-1 rounded-lg bg-[#140407] hover:bg-[#20050a] hover:text-white border border-red-950 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      {p}
                    </button>
                  ))}
                </div>

                {/* Chat Input Bar */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendChatMessage();
                  }}
                  className="pt-2 flex items-center gap-2 border-t border-red-950/80 shrink-0"
                >
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask your personal stylist about fit, pairing, or fragrance notes..."
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#080103] border border-red-950 text-xs text-white focus:outline-none focus:border-red-500 placeholder:text-zinc-600 font-mono"
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-colors cursor-pointer"
                    title="Send Prompt"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>

              </div>

              {/* Right: AI Stylist Knowledge Architecture */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="p-4 rounded-2xl bg-[#0f0305] border border-red-950 text-xs">
                  <h4 className="font-display font-bold text-white text-sm mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Stylist Capabilities</span>
                  </h4>
                  <ul className="space-y-2 text-zinc-300 font-mono text-[11px]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span>Direct 3D mannequin draping transfer with 1-click.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span>Live catalog stock lookups &amp; low-inventory notifications.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span>Fragrance pyramiding: base, heart, and top notes consultation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span>Pincode delivery ETA queries and AWB order tracking.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#0f0305] border border-red-950 text-xs flex-1">
                  <h4 className="font-display font-bold text-white text-sm mb-2">Live Production Deployment</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Connected to Spring Boot 3.2.5 REST services hosted on Render Docker, querying live Aiven Cloud MySQL database catalog tables.
                  </p>
                  <div className="mt-4 pt-3 border-t border-red-950 space-y-2 font-mono text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Latency:</span>
                      <span className="text-rose-300">~42ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Context Window:</span>
                      <span className="text-rose-300">8k Tokens</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Inventory Sync:</span>
                      <span className="text-emerald-400 font-bold">100% Real-Time</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: STOREFRONT & SMART SIZING */}
          {activeTab === 'CATALOG' && (
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {luxuryCatalog.map(product => (
                  <div
                    key={product.id}
                    className="p-5 rounded-2xl bg-[#0f0305] border border-red-950 hover:border-red-500/50 transition-all flex flex-col justify-between group shadow-xl"
                  >
                    <div>
                      {/* Image Preview with Badge */}
                      <div className="h-32 rounded-xl bg-[#070102] border border-red-950 flex items-center justify-center text-6xl mb-4 group-hover:scale-105 transition-transform relative">
                        <span>{product.image}</span>
                        <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#1e050a] text-rose-300 border border-red-950">
                          {product.badge}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">{product.department}</span>
                        <span className="text-xs font-mono text-amber-400">★ {product.rating} ({product.reviews})</span>
                      </div>

                      <h4 className="font-display font-bold text-white text-base group-hover:text-red-400 transition-colors">
                        {product.name}
                      </h4>
                      <p className="mt-1 text-xs text-zinc-400 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Smart Sizing Selector */}
                      <div className="mt-4 pt-3 border-t border-red-950/80">
                        <span className="text-[10px] font-mono text-zinc-400 block mb-1.5">Select Variant / Size:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.sizes.map(sz => (
                            <button
                              key={sz}
                              onClick={() => handleAddToCart(product, sz)}
                              className="px-2 py-1 rounded-md text-[10px] font-mono bg-[#180408] hover:bg-red-600 text-zinc-300 hover:text-white border border-red-950 transition-all cursor-pointer"
                              title={`Add ${sz} to Bag`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Price and Cart Actions */}
                    <div className="mt-5 pt-4 border-t border-red-950 flex items-center justify-between">
                      <div>
                        <span className="font-mono text-base font-extrabold text-white">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <span className="ml-2 text-xs font-mono text-zinc-500 line-through">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            handleWearItem(product);
                            setActiveTab('FITTING_ROOM');
                          }}
                          className="p-2 rounded-xl bg-[#1e050a] hover:bg-[#2e0710] text-rose-300 text-xs font-mono border border-red-950 cursor-pointer"
                          title="Try in 3D Fitting Room"
                        >
                          🧥 Fit
                        </button>
                        <button
                          onClick={() => handleAddToCart(product, product.defaultSize)}
                          className="px-3 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-md shadow-red-600/30 cursor-pointer"
                        >
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 4: EXECUTIVE ADMIN SUITE */}
          {activeTab === 'ADMIN_SUITE' && (
            <div className="space-y-6">
              
              {/* Executive Analytics KPI Cards (100% DB Calculated) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#0f0305] border border-red-950">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>Live Revenue (INR)</span>
                    <span className="text-emerald-400 font-bold">+18.4%</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-display font-extrabold text-white font-mono">
                    ₹3,84,500
                  </h3>
                  <p className="mt-1 text-[11px] text-zinc-500 font-mono">Database aggregated total</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0f0305] border border-red-950">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>Customer Orders</span>
                    <span className="text-rose-400 font-bold">1,248</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-display font-extrabold text-white font-mono">
                    98.4% Rate
                  </h3>
                  <p className="mt-1 text-[11px] text-zinc-500 font-mono">Fulfillment ring SLA</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0f0305] border border-red-950">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>Active Customers</span>
                    <span className="text-amber-400 font-bold">+34 Today</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-display font-extrabold text-white font-mono">
                    842 Users
                  </h3>
                  <p className="mt-1 text-[11px] text-zinc-500 font-mono">Verified JWT accounts</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0f0305] border border-red-950">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span>Monthly Target</span>
                    <span className="text-red-400 font-bold">76.9%</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-display font-extrabold text-white font-mono">
                    ₹5,00,000
                  </h3>
                  <p className="mt-1 text-[11px] text-zinc-500 font-mono">Target revenue progress</p>
                </div>
              </div>

              {/* Interactive Weekday Sales Scrubber */}
              <div className="p-5 rounded-2xl bg-[#0f0305] border border-red-950">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h4 className="font-display font-bold text-white text-base">
                      Interactive Weekday Sales Scrubber (Sat – Fri)
                    </h4>
                    <p className="text-xs text-zinc-400 font-mono">
                      Scrub across weekdays to inspect database order volumes and conversion rates.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400">Active Day:</span>
                    <span className="px-3 py-1 rounded-xl bg-red-600 text-white text-xs font-mono font-bold">
                      {activeWeekday} &bull; ₹{weekdayAnalytics[activeWeekday].revenue.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Day selector scrubber */}
                <div className="grid grid-cols-7 gap-2 pt-3">
                  {Object.keys(weekdayAnalytics).map(day => {
                    const isSelected = activeWeekday === day;
                    return (
                      <button
                        key={day}
                        onClick={() => setActiveWeekday(day)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/30'
                            : 'bg-[#150407] border-red-950/80 text-zinc-400 hover:text-white hover:bg-[#1f060b]'
                        }`}
                      >
                        <span className="font-mono text-xs font-bold block">{day}</span>
                        <span className="font-mono text-[11px] block mt-1">₹{(weekdayAnalytics[day].revenue / 1000).toFixed(1)}k</span>
                        <span className="text-[10px] text-zinc-300 block">{weekdayAnalytics[day].orders} orders</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category Taxonomy Manager: Dual Grid & Table Views */}
              <div className="p-5 rounded-2xl bg-[#0f0305] border border-red-950">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-display font-bold text-white text-base">
                      Category Taxonomy Manager
                    </h4>
                    <p className="text-xs text-zinc-400 font-mono">
                      Dual view modes: Luxury Grid (⊞) &amp; High-Density Table (☰) with category inspection
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 bg-[#0a0204] p-1 rounded-xl border border-red-950">
                    <button
                      onClick={() => setAdminViewMode('GRID')}
                      className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                        adminViewMode === 'GRID' ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-white'
                      }`}
                      title="Grid Mode"
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setAdminViewMode('TABLE')}
                      className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                        adminViewMode === 'TABLE' ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-white'
                      }`}
                      title="Table Mode"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {adminViewMode === 'GRID' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { name: 'Outerwear', count: 18, revenue: '₹1.84L', image: '🧥' },
                      { name: 'Tailoring & Trousers', count: 12, revenue: '₹94.2k', image: '👖' },
                      { name: 'Leather Goods & Shoes', count: 15, revenue: '₹1.22L', image: '👞' },
                      { name: 'Haute Parfumerie', count: 8, revenue: '₹1.45L', image: '✨' },
                    ].map((cat, i) => (
                      <div key={i} className="p-4 rounded-xl bg-[#140407] border border-red-950 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl">{cat.image}</span>
                          <span className="text-[10px] font-mono text-zinc-400">{cat.count} items</span>
                        </div>
                        <div className="mt-3">
                          <h5 className="font-bold text-white text-xs">{cat.name}</h5>
                          <span className="text-[11px] font-mono text-red-400 font-bold">{cat.revenue}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs">
                      <thead className="bg-[#140407] text-zinc-400 uppercase text-[10px] border-b border-red-950">
                        <tr>
                          <th className="py-2.5 px-3">Department</th>
                          <th className="py-2.5 px-3">Catalog Units</th>
                          <th className="py-2.5 px-3">Revenue Share</th>
                          <th className="py-2.5 px-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-red-950/60 text-zinc-300">
                        <tr>
                          <td className="py-2 px-3 font-bold text-white">Outerwear &amp; Blazers</td>
                          <td className="py-2 px-3">18 Models</td>
                          <td className="py-2 px-3 text-red-400">42% Share</td>
                          <td className="py-2 px-3 text-emerald-400 font-bold">Active</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 font-bold text-white">Tailored Trousers</td>
                          <td className="py-2 px-3">12 Models</td>
                          <td className="py-2 px-3 text-red-400">24% Share</td>
                          <td className="py-2 px-3 text-emerald-400 font-bold">Active</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 font-bold text-white">Haute Parfumerie</td>
                          <td className="py-2 px-3">8 Fragrances</td>
                          <td className="py-2 px-3 text-red-400">34% Share</td>
                          <td className="py-2 px-3 text-emerald-400 font-bold">Active</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 5: LOGISTICS & PINCODE RESOLUTION */}
          {activeTab === 'LOGISTICS' && (
            <div className="space-y-6">
              
              {/* Indian Pincode Resolution Tool */}
              <div className="p-5 rounded-2xl bg-[#0f0305] border border-red-950">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h4 className="font-display font-bold text-white text-base flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-400" />
                      <span>Indian 6-Digit Pincode Resolution API</span>
                    </h4>
                    <p className="text-xs text-zinc-400 font-mono">
                      Type any Indian 6-digit postal code to auto-resolve City, District, State, and Courier SLAs.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400">Try Pre-fills:</span>
                    {['440001 (Nagpur)', '110001 (Delhi)', '400001 (Mumbai)'].map(pin => {
                      const code = pin.split(' ')[0];
                      return (
                        <button
                          key={pin}
                          onClick={() => handlePincodeLookup(code)}
                          className="px-2 py-1 rounded-lg bg-[#160407] hover:bg-red-600 text-[10px] font-mono text-zinc-300 hover:text-white border border-red-950 transition-colors cursor-pointer"
                        >
                          {pin}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5">
                    <label className="text-[11px] font-mono text-zinc-400 block mb-1">Enter 6-Digit Pincode:</label>
                    <input
                      type="text"
                      maxLength={6}
                      value={pincodeInput}
                      onChange={(e) => handlePincodeLookup(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070102] border border-red-950 text-white font-mono text-sm font-bold focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div className="md:col-span-7 p-3.5 rounded-xl bg-[#140407] border border-red-950 font-mono text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Destination:</span>
                      <span className="text-white font-bold">{pincodeDetails.city}, {pincodeDetails.state}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">District:</span>
                      <span className="text-rose-300">{pincodeDetails.district}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">SLA Delivery Window:</span>
                      <span className="text-emerald-400 font-bold">{pincodeDetails.sla}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4-Stage Multi-Courier Tracking Timeline */}
              <div className="p-5 rounded-2xl bg-[#0f0305] border border-red-950">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-display font-bold text-white text-base flex items-center gap-2">
                      <Truck className="w-4 h-4 text-rose-400" />
                      <span>Live Order Tracking: Consignment #TK-8842</span>
                    </h4>
                    <p className="text-xs text-zinc-400 font-mono">
                      Partner: BlueDart Express Air &bull; AWB: BD-99418290-IN
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                    IN TRANSIT
                  </span>
                </div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
                  {[
                    { step: '1. PLACED', desc: 'Order confirmed & Razorpay verified', time: '10:14 AM', done: true },
                    { step: '2. PROCESSING', desc: 'Quality inspected & packed at Mumbai Hub', time: '11:45 AM', done: true },
                    { step: '3. SHIPPED', desc: 'Handed to BlueDart Express Flight BD-402', time: '02:30 PM', done: true, active: true },
                    { step: '4. DELIVERED', desc: 'Out for delivery to Nagpur doorstep', time: 'Tomorrow 1:00 PM', done: false }
                  ].map((s, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border relative ${
                        s.active
                          ? 'bg-red-950/40 border-red-500 shadow-lg shadow-red-600/20'
                          : s.done
                          ? 'bg-[#140407] border-red-950/80'
                          : 'bg-[#090103] border-red-950/40 opacity-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono font-bold text-xs text-white">{s.step}</span>
                        {s.done ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Clock className="w-4 h-4 text-zinc-500" />
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-300 leading-snug">{s.desc}</p>
                      <span className="text-[10px] font-mono text-rose-400 block mt-2">{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 6: REST APIS & SYSTEM ARCHITECTURE */}
          {activeTab === 'APIS' && (
            <div className="space-y-6">
              
              {/* Cloud Architecture Diagram */}
              <div className="p-5 rounded-2xl bg-[#0f0305] border border-red-950 font-mono text-xs">
                <h4 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                  <Server className="w-4 h-4 text-red-400" />
                  <span>Cloud Deployment Topology</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-[#140407] border border-red-950">
                    <span className="text-rose-400 font-bold block mb-1">Frontend Layer</span>
                    <strong className="text-white text-sm block">React 18 SPA (Vite)</strong>
                    <span className="text-[11px] text-zinc-400 block mt-1">Vercel Edge CDN &bull; Tailwind CSS &bull; Three.js</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#140407] border border-red-950">
                    <span className="text-red-400 font-bold block mb-1">Backend REST API</span>
                    <strong className="text-white text-sm block">Spring Boot 3.2.5</strong>
                    <span className="text-[11px] text-zinc-400 block mt-1">Render Docker &bull; Spring Security 6 &bull; Razorpay</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#140407] border border-red-950">
                    <span className="text-amber-400 font-bold block mb-1">Relational Persistence</span>
                    <strong className="text-white text-sm block">Aiven Cloud MySQL 8.0</strong>
                    <span className="text-[11px] text-zinc-400 block mt-1">SSL Secured &bull; Users, Orders, Products, Cart</span>
                  </div>
                </div>
              </div>

              {/* REST API Reference Table matching specs */}
              <div className="p-5 rounded-2xl bg-[#0f0305] border border-red-950">
                <h4 className="font-display font-bold text-white text-base mb-3">
                  REST API Reference (Spring Boot 3.2.5)
                </h4>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead className="bg-[#140407] text-zinc-400 uppercase text-[10px] border-b border-red-950">
                      <tr>
                        <th className="py-2.5 px-3">Method</th>
                        <th className="py-2.5 px-3">Endpoint Route</th>
                        <th className="py-2.5 px-3">Description</th>
                        <th className="py-2.5 px-3">Access Level</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-red-950/60 text-zinc-300">
                      <tr>
                        <td className="py-2 px-3 text-emerald-400 font-bold">POST</td>
                        <td className="py-2 px-3 text-white">/api/auth/register</td>
                        <td className="py-2 px-3">Register customer account with BCrypt</td>
                        <td className="py-2 px-3 text-zinc-400">Public</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-emerald-400 font-bold">POST</td>
                        <td className="py-2 px-3 text-white">/api/auth/login</td>
                        <td className="py-2 px-3">Authenticate user &amp; receive stateless JWT</td>
                        <td className="py-2 px-3 text-zinc-400">Public</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-sky-400 font-bold">GET</td>
                        <td className="py-2 px-3 text-white">/api/products</td>
                        <td className="py-2 px-3">Retrieve active catalog products with filtering</td>
                        <td className="py-2 px-3 text-zinc-400">Public</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-emerald-400 font-bold">POST</td>
                        <td className="py-2 px-3 text-white">/api/cart/add/&#123;productId&#125;</td>
                        <td className="py-2 px-3">Add item with size variant to user cart</td>
                        <td className="py-2 px-3 text-rose-300">User</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-emerald-400 font-bold">POST</td>
                        <td className="py-2 px-3 text-white">/api/payment/create-order</td>
                        <td className="py-2 px-3">Generate Razorpay order ID in INR</td>
                        <td className="py-2 px-3 text-rose-300">User</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-emerald-400 font-bold">POST</td>
                        <td className="py-2 px-3 text-white">/api/payment/verify</td>
                        <td className="py-2 px-3">Verify SHA-256 HMAC cryptographic signature</td>
                        <td className="py-2 px-3 text-rose-300">User</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-amber-400 font-bold">PUT</td>
                        <td className="py-2 px-3 text-white">/api/admin/orders/&#123;id&#125;/shipping</td>
                        <td className="py-2 px-3">Assign courier &amp; AWB tracking number</td>
                        <td className="py-2 px-3 text-red-400 font-bold">Admin</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* SHOPPING CART & CHECKOUT SLIDE-OVER DRAWER */}
        {isCartOpen && (
          <div className="absolute inset-0 z-20 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="w-full max-w-md bg-[#0e0305] border-l border-red-950 flex flex-col h-full shadow-2xl p-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-red-950/80">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-red-400" />
                  <h4 className="font-display font-bold text-white text-base">Shopping Bag ({cart.reduce((a, b) => a + b.quantity, 0)})</h4>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-lg bg-[#180408] text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto py-4 space-y-3">
                {cart.length === 0 ? (
                  <div className="text-center py-16 text-zinc-500 font-mono text-xs">
                    <ShoppingCart className="w-10 h-10 mx-auto text-zinc-600 mb-2" />
                    <span>Your shopping bag is empty.</span>
                  </div>
                ) : (
                  cart.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#140407] border border-red-950 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{item.image}</span>
                        <div>
                          <h6 className="font-bold text-white leading-tight truncate max-w-[160px]">{item.name}</h6>
                          <span className="text-[10px] font-mono text-zinc-400 block">Size: {item.selectedSize}</span>
                          <span className="text-[11px] font-mono text-red-400 font-bold">₹{item.price.toLocaleString('en-IN')}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-[#090103] p-1 rounded-lg border border-red-950">
                          <button
                            onClick={() => updateCartQty(idx, -1)}
                            className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs px-1.5 font-bold text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQty(idx, 1)}
                            className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Coupon Code Input */}
              {cart.length > 0 && (
                <div className="pt-3 border-t border-red-950/80">
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      placeholder="Coupon Code (Try FAIZ10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-xl bg-[#080103] border border-red-950 font-mono text-xs text-white uppercase placeholder:text-zinc-600"
                    />
                    <button
                      onClick={() => {
                        if (couponCode.toUpperCase() === 'FAIZ10' || couponCode.toUpperCase() === 'SPRING10') {
                          setDiscountApplied(true);
                        }
                      }}
                      className="px-3 py-1.5 rounded-xl bg-red-600 text-white font-mono text-xs font-bold hover:bg-red-500 cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs font-mono text-zinc-300 mb-4">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Subtotal:</span>
                      <span>₹{rawSubtotal.toLocaleString('en-IN')}</span>
                    </div>
                    {discountApplied && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Discount (10% FAIZ10):</span>
                        <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-zinc-400">GST (18%):</span>
                      <span>₹{gstAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-red-950 font-bold text-sm text-white">
                      <span>Grand Total:</span>
                      <span className="text-red-400">₹{finalTotal.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={() => {
                      setCheckoutStep('RAZORPAY_POPUP');
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pay with Razorpay (₹{finalTotal.toLocaleString('en-IN')})</span>
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

        {/* SIMULATED RAZORPAY CHECKOUT POPUP */}
        {checkoutStep === 'RAZORPAY_POPUP' && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/85 backdrop-blur-md animate-fadeIn p-4">
            <div className="max-w-md w-full bg-[#110306] border border-red-900 rounded-3xl p-6 shadow-2xl relative text-zinc-100">
              
              <div className="flex items-center justify-between pb-3 border-b border-red-950 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-xs font-mono">
                    RZP
                  </div>
                  <h4 className="font-display font-bold text-white text-sm">Razorpay Payment Gateway</h4>
                </div>
                <button
                  onClick={() => setCheckoutStep('CART')}
                  className="p-1 rounded-lg bg-[#180408] text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3 rounded-xl bg-[#080103] border border-red-950 mb-4 flex justify-between items-center font-mono">
                <div>
                  <span className="text-[10px] text-zinc-500 block">Payable Amount:</span>
                  <span className="text-lg font-bold text-white">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  HMAC SHA-256
                </span>
              </div>

              {/* Payment Methods */}
              <div className="space-y-2 mb-5">
                {[
                  { id: 'UPI', label: 'UPI / QR (GPay, PhonePe, Paytm)', desc: 'Instant UPI Intent or VPA' },
                  { id: 'CARDS', label: 'Credit / Debit Card', desc: 'Visa, MasterCard, RuPay' },
                  { id: 'NETBANKING', label: 'Net Banking', desc: 'SBI, HDFC, ICICI, Axis' },
                  { id: 'COD', label: 'Cash On Delivery (COD)', desc: 'Pay upon delivery' }
                ].map(m => (
                  <button
                    key={m.id}
                    onClick={() => setPaymentMethod(m.id)}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      paymentMethod === m.id
                        ? 'bg-red-950/50 border-red-500 text-white'
                        : 'bg-[#150407] border-red-950/80 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-xs font-bold block">{m.label}</span>
                      <span className="text-[10px] text-zinc-500 block">{m.desc}</span>
                    </div>
                    {paymentMethod === m.id && <Check className="w-4 h-4 text-red-400" />}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setCheckoutStep('INVOICE');
                  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono text-xs font-bold shadow-lg shadow-red-600/30 cursor-pointer"
              >
                Complete Payment (₹{finalTotal.toLocaleString('en-IN')})
              </button>

            </div>
          </div>
        )}

        {/* AUTOMATED PDF TAX INVOICE POPUP */}
        {checkoutStep === 'INVOICE' && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fadeIn p-4 overflow-y-auto">
            <div className="max-w-xl w-full bg-[#0d0205] border border-red-900 rounded-3xl p-6 shadow-2xl relative text-zinc-100">
              
              <div className="flex items-center justify-between pb-3 border-b border-red-950 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h4 className="font-display font-bold text-white text-base">Payment Confirmed &bull; Automated Tax Invoice</h4>
                </div>
                <button
                  onClick={() => {
                    setCheckoutStep('CART');
                    setIsCartOpen(false);
                  }}
                  className="p-1 rounded-lg bg-[#180408] text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Invoice Body */}
              <div className="p-4 rounded-2xl bg-[#060102] border border-red-950 font-mono text-xs space-y-3">
                <div className="flex justify-between border-b border-red-950/80 pb-2">
                  <div>
                    <strong className="text-white">TechStore PRO Atelier</strong>
                    <p className="text-[10px] text-zinc-500">GSTIN: 27AABCT8842K1Z9</p>
                  </div>
                  <div className="text-right">
                    <span className="text-rose-400 font-bold">INV-2026-9921</span>
                    <p className="text-[10px] text-zinc-500">Date: 31-Oct-2026</p>
                  </div>
                </div>

                <div className="space-y-1 text-[11px] text-zinc-300">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Payment Gateway:</span>
                    <span className="text-white font-bold">Razorpay ({paymentMethod})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">SHA-256 HMAC:</span>
                    <span className="text-emerald-400 truncate max-w-[200px]">hmac_9941a27e8f001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">AWB Tracking:</span>
                    <span className="text-amber-400">BD-99418290-IN (BlueDart)</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-red-950/80 flex justify-between font-bold text-sm text-white">
                  <span>Settled Total:</span>
                  <span className="text-red-400">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => window.print()}
                  className="flex-1 py-2.5 rounded-xl bg-[#1a0408] hover:bg-[#25060d] text-rose-200 border border-red-950 text-xs font-mono font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Tax Invoice</span>
                </button>
                <button
                  onClick={() => {
                    setCheckoutStep('CART');
                    setIsCartOpen(false);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold cursor-pointer"
                >
                  Done
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
