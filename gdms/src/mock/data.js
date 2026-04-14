// ─── ROLES ────────────────────────────────────────────────────────────────────
export const ROLES = [
  { id: 'producer',       label: 'Garbage Producer',    icon: '🏭', desc: 'Salon / Shop / Factory' },
  { id: 'delivery',       label: 'Delivery Boy',         icon: '🚛', desc: 'Small Collector' },
  { id: 'storage',        label: 'Store Provider',       icon: '🏪', desc: 'Warehouse / Hub' },
  { id: 'small_consumer', label: 'Small Consumer',       icon: '♻️', desc: 'Individual / NGO' },
  { id: 'large_consumer', label: 'Large Consumer',       icon: '🏗️', desc: 'Recycling Factory' },
]

// ─── GARBAGE TYPES ─────────────────────────────────────────────────────────────
export const GARBAGE_TYPES = [
  'Organic Waste', 'Plastic', 'Metal Scrap', 'E-Waste',
  'Paper/Cardboard', 'Glass', 'Textile', 'Chemical Waste',
  'Food Waste', 'Hair/Salon Waste',
]

// ─── STATUS CONFIG ─────────────────────────────────────────────────────────────
export const STATUS_CONFIG = {
  pending:    { label: 'Pending',     color: 'warning' },
  accepted:   { label: 'Accepted',    color: 'info' },
  in_transit: { label: 'In Transit',  color: 'secondary' },
  delivered:  { label: 'Delivered',   color: 'success' },
  stored:     { label: 'Stored',      color: 'success' },
  rejected:   { label: 'Rejected',    color: 'error' },
  processing: { label: 'Processing',  color: 'info' },
  completed:  { label: 'Completed',   color: 'success' },
  cancelled:  { label: 'Cancelled',   color: 'error' },
}

//  ─── REQUESTS ─────────────────────────────────────────────────────────────────
export const mockRequests = [
  { id: 'REQ-001', type: 'Organic Waste',    qty: 50,  unit: 'kg',   loc: 'MG Road, Pune',      status: 'pending',    producer: 'Green Salon',   date: '2025-04-10', priority: 'high' },
  { id: 'REQ-002', type: 'Hair/Salon Waste', qty: 20,  unit: 'kg',   loc: 'FC Road, Pune',       status: 'accepted',   producer: 'Beauty Hub',    date: '2025-04-10', priority: 'medium', agent: 'Rajan Kumar' },
  { id: 'REQ-003', type: 'Plastic',          qty: 80,  unit: 'kg',   loc: 'Kothrud, Pune',       status: 'in_transit', producer: 'Fresh Juice Bar', date: '2025-04-09', priority: 'low',    agent: 'Suresh Yadav' },
  { id: 'REQ-004', type: 'Food Waste',        qty: 30,  unit: 'kg',   loc: 'Shivaji Nagar, Pune', status: 'delivered',  producer: 'Hotel Swad',    date: '2025-04-09', priority: 'medium', agent: 'Rajan Kumar' },
  { id: 'REQ-005', type: 'Paper/Cardboard',  qty: 120, unit: 'kg',   loc: 'Hadapsar, Pune',      status: 'pending',    producer: 'Print House',   date: '2025-04-11', priority: 'high' },
  { id: 'REQ-006', type: 'Metal Scrap',      qty: 200, unit: 'kg',   loc: 'MIDC, Pimpri',        status: 'stored',     producer: 'ABC Factory',   date: '2025-04-08', priority: 'high' },
  { id: 'REQ-007', type: 'E-Waste',          qty: 15,  unit: 'units', loc: 'Baner, Pune',         status: 'pending',    producer: 'Tech Park',     date: '2025-04-11', priority: 'medium' },
  { id: 'REQ-008', type: 'Glass',            qty: 60,  unit: 'kg',   loc: 'Viman Nagar, Pune',   status: 'in_transit', producer: 'Wine Shop',     date: '2025-04-10', priority: 'low',    agent: 'Suresh Yadav' },
]

// ─── INVENTORY ────────────────────────────────────────────────────────────────
export const mockInventory = [
  { id: 'INV-001', type: 'Organic Waste',    qty: 450, unit: 'kg', stored: '2025-04-08', cap: 75, icon: '🌱', maxQty: 600 },
  { id: 'INV-002', type: 'Plastic',          qty: 320, unit: 'kg', stored: '2025-04-07', cap: 55, icon: '🧴', maxQty: 580 },
  { id: 'INV-003', type: 'Metal Scrap',      qty: 800, unit: 'kg', stored: '2025-04-06', cap: 90, icon: '⚙️', maxQty: 888 },
  { id: 'INV-004', type: 'Paper/Cardboard',  qty: 180, unit: 'kg', stored: '2025-04-09', cap: 30, icon: '📄', maxQty: 600 },
  { id: 'INV-005', type: 'Glass',            qty: 120, unit: 'kg', stored: '2025-04-05', cap: 20, icon: '🍶', maxQty: 600 },
]

// ─── MARKET ───────────────────────────────────────────────────────────────────
export const mockMarket = [
  { id: 'MKT-001', type: 'Organic Waste',   qty: 100, unit: 'kg', price: 2,  avail: true,  icon: '🌱', seller: 'Green Hub',   category: 'organic' },
  { id: 'MKT-002', type: 'Plastic PET',     qty: 50,  unit: 'kg', price: 8,  avail: true,  icon: '🧴', seller: 'Eco Store',   category: 'plastic' },
  { id: 'MKT-003', type: 'Cardboard',       qty: 200, unit: 'kg', price: 3,  avail: true,  icon: '📦', seller: 'Paper Depot', category: 'paper' },
  { id: 'MKT-004', type: 'Metal Scrap',     qty: 500, unit: 'kg', price: 15, avail: false, icon: '⚙️', seller: 'Metal Yard',  category: 'metal' },
  { id: 'MKT-005', type: 'Glass Bottles',   qty: 80,  unit: 'kg', price: 5,  avail: true,  icon: '🍶', seller: 'Green Hub',   category: 'glass' },
  { id: 'MKT-006', type: 'Textile Waste',   qty: 150, unit: 'kg', price: 4,  avail: true,  icon: '👕', seller: 'Fabric Store',category: 'textile' },
]

// ─── BULK INVENTORY ───────────────────────────────────────────────────────────
export const mockBulkInventory = [
  { id: 'BLK-001', type: 'Metal Scrap',     qty: 800,  unit: 'kg', rate: 12, minOrder: 100,  available: true },
  { id: 'BLK-002', type: 'Plastic HDPE',    qty: 1200, unit: 'kg', rate: 6,  minOrder: 200,  available: true },
  { id: 'BLK-003', type: 'Paper/Cardboard', qty: 650,  unit: 'kg', rate: 3,  minOrder: 50,   available: true },
  { id: 'BLK-004', type: 'Glass',           qty: 400,  unit: 'kg', rate: 4,  minOrder: 100,  available: true },
  { id: 'BLK-005', type: 'E-Waste',         qty: 90,   unit: 'units', rate: 80, minOrder: 10, available: false },
  { id: 'BLK-006', type: 'Organic Compost', qty: 2000, unit: 'kg', rate: 1,  minOrder: 500,  available: true },
]

// ─── ORDERS ───────────────────────────────────────────────────────────────────
export const mockOrders = [
  { id: 'ORD-001', type: 'Organic Waste',   qty: 50,  unit: 'kg', date: '2025-04-08', status: 'delivered',  consumer: 'Rohan Sharma' },
  { id: 'ORD-002', type: 'Cardboard',       qty: 30,  unit: 'kg', date: '2025-04-10', status: 'in_transit', consumer: 'Priya Patel' },
  { id: 'ORD-003', type: 'Glass Bottles',   qty: 20,  unit: 'kg', date: '2025-04-11', status: 'pending',    consumer: 'Priya Patel' },
  { id: 'ORD-004', type: 'Metal Scrap',     qty: 300, unit: 'kg', date: '2025-04-07', status: 'completed',  consumer: 'RecycleCo Ltd' },
  { id: 'ORD-005', type: 'Plastic HDPE',    qty: 500, unit: 'kg', date: '2025-04-09', status: 'processing', consumer: 'RecycleCo Ltd' },
]

// ─── TRACKING EVENTS ──────────────────────────────────────────────────────────
export const mockTrackingEvents = {
  'REQ-003': [
    { title: 'Request Submitted',    time: 'Apr 10, 9:00 AM',   done: true },
    { title: 'Agent Assigned',       time: 'Apr 10, 9:45 AM',   done: true },
    { title: 'Picked Up',            time: 'Apr 10, 11:30 AM',  done: true },
    { title: 'In Transit',           time: 'Apr 10, 12:15 PM',  done: false, active: true },
    { title: 'Delivered to Storage', time: 'Est. 2:00 PM',      done: false },
    { title: 'Processed/Recycled',   time: 'Est. Apr 11',       done: false },
  ],
  'ORD-002': [
    { title: 'Order Placed',         time: 'Apr 10, 8:00 AM',   done: true },
    { title: 'Confirmed',            time: 'Apr 10, 9:00 AM',   done: true },
    { title: 'Dispatched',           time: 'Apr 10, 11:00 AM',  done: false, active: true },
    { title: 'Out for Delivery',     time: 'Est. 2:00 PM',      done: false },
    { title: 'Delivered',            time: 'Est. Apr 11',       done: false },
  ],
}

// ─── NAV CONFIG ───────────────────────────────────────────────────────────────
export const NAV_CONFIG = {
  producer: [
    { path: '/dashboard',      icon: '📊', label: 'Dashboard' },
    { path: '/create-request', icon: '➕', label: 'New Request' },
    { path: '/my-requests',    icon: '📋', label: 'My Requests' },
    { path: '/track',          icon: '📍', label: 'Track Orders' },
  ],
  delivery: [
    { path: '/dashboard',        icon: '📊', label: 'Dashboard' },
    { path: '/available-pickups',icon: '🗂️', label: 'Available Pickups' },
    { path: '/my-deliveries',    icon: '🚛', label: 'My Deliveries' },
  ],
  storage: [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/incoming',  icon: '📥', label: 'Incoming' },
    { path: '/inventory', icon: '🗄️', label: 'Inventory' },
    { path: '/capacity',  icon: '📊', label: 'Capacity' },
  ],
  small_consumer: [
    { path: '/dashboard',  icon: '📊', label: 'Dashboard' },
    { path: '/marketplace',icon: '🏪', label: 'Browse Waste' },
    { path: '/my-orders',  icon: '🛒', label: 'My Orders' },
    { path: '/track',      icon: '📍', label: 'Track Order' },
  ],
  large_consumer: [
    { path: '/dashboard',    icon: '📊', label: 'Dashboard' },
    { path: '/bulk-inventory',icon: '🏗️', label: 'Bulk Inventory' },
    { path: '/place-order',  icon: '📦', label: 'Place Order' },
    { path: '/track',        icon: '📍', label: 'Track Delivery' },
  ],
}