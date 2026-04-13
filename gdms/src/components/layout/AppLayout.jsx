import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Badge, IconButton, Avatar, Tooltip } from '@mui/material'
import { useAuth } from '../../hooks'
import { logout } from '../../store/authSlice'
import { NAV_CONFIG, ROLES } from '../../mock/data'

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────
function Sidebar({ open, onClose }) {
  const { user } = useAuth()
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navItems = NAV_CONFIG[user?.role] || []
  const roleObj = ROLES.find(r => r.id === user?.role)

  function handleLogout() {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[199] md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed md:static top-0 left-0 bottom-0 z-[200]
          flex flex-col
          transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style={{ width: 240, background: '#0d4425', color: '#fff', flexShrink: 0 }}
      >
        {/* Logo */}
        <div className="p-4 border-b border-white/10">
          <div className="text-sm font-bold tracking-[3px] uppercase text-white">♻ GDMS</div>
          <div className="text-xs text-white/40 tracking-widest mt-0.5">Waste Management</div>
        </div>

        {/* User pill */}
        <div className="m-3 p-3 rounded-lg border border-white/10" style={{ background: 'rgba(255,255,255,0.07)' }}>
          <div className="text-xs text-white/40 tracking-widest uppercase mb-1">
            {roleObj?.icon} {roleObj?.label}
          </div>
          <div className="text-sm font-bold text-white capitalize">{user?.name || 'User'}</div>
          <div className="text-xs text-white/30 truncate">{user?.email}</div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-2 overflow-y-auto">
          <div className="px-4 mb-2 text-xs font-bold tracking-[2px] uppercase text-white/25">
            Navigation
          </div>
          {navItems.map(item => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-4 py-2.5 text-sm font-bold
                  border-l-[3px] transition-all no-underline
                  ${isActive
                    ? 'border-yellow-400 bg-white/10 text-white'
                    : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
                  }
                `}
                style={{ textDecoration: 'none', letterSpacing: '0.5px' }}
              >
                <span style={{ fontSize: '1rem', width: 20, textAlign: 'center' }}>{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-3">
          <button
            onClick={handleLogout}
            className="w-full py-2 rounded-lg text-xs font-bold tracking-widest uppercase transition-all"
            style={{ background: 'rgba(220,38,38,0.15)', color: '#fca5a5', border: '1px solid rgba(220,38,38,0.3)' }}
          >
            ⇒ Logout
          </button>
        </div>
      </aside>
    </>
  )
}

// ─── TOPBAR ──────────────────────────────────────────────────────────────────
function Topbar({ onMenuClick }) {
  const { user } = useAuth()
  const location = useLocation()
  const roleObj = ROLES.find(r => r.id === user?.role)

  // Map path → page title
  const titles = {
    '/dashboard':       'Dashboard',
    '/create-request':  'New Pickup Request',
    '/my-requests':     'My Requests',
    '/available-pickups': 'Available Pickups',
    '/my-deliveries':   'My Deliveries',
    '/incoming':        'Incoming Deliveries',
    '/inventory':       'Inventory',
    '/capacity':        'Manage Capacity',
    '/marketplace':     'Marketplace',
    '/my-orders':       'My Orders',
    '/track':           'Order Tracking',
    '/bulk-inventory':  'Bulk Inventory',
    '/place-order':     'Place Bulk Order',
  }

  return (
    <header
      className="flex items-center gap-3 px-4 border-b border-gray-200 bg-white flex-shrink-0"
      style={{ height: 56 }}
    >
      {/* Hamburger (mobile) */}
      <button
        onClick={onMenuClick}
        className="md:hidden text-xl bg-transparent border-none cursor-pointer text-gray-600"
      >
        ☰
      </button>

      {/* Title */}
      <div>
        <span className="font-bold text-gray-800 text-base">
          {titles[location.pathname] || 'Dashboard'}
        </span>
        <span className="ml-2 text-xs text-gray-400">
          {roleObj?.icon} {roleObj?.label}
        </span>
      </div>

      <div className="ml-auto flex items-center gap-3">
        {/* Notifications */}
        <Tooltip title="Notifications">
          <IconButton size="small" className="border border-gray-200">
            <Badge badgeContent={3} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '0.6rem', minWidth: 16, height: 16 } }}>
              <span style={{ fontSize: '1rem' }}>🔔</span>
            </Badge>
          </IconButton>
        </Tooltip>

        {/* Avatar */}
        <Avatar
          sx={{ width: 32, height: 32, bgcolor: '#1a6b3c', fontSize: '0.8rem', fontFamily: 'Courier New', fontWeight: 700 }}
        >
          {(user?.name || 'U')[0].toUpperCase()}
        </Avatar>
      </div>
    </header>
  )
}

// ─── APP LAYOUT ──────────────────────────────────────────────────────────────
export default function AppLayout({ children }) {
  const [sideOpen, setSideOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: '#f0f4f0' }}>
      <Sidebar open={sideOpen} onClose={() => setSideOpen(false)} />
      <div className="flex flex-col flex-1 overflow-hidden min-w-0">
        <Topbar onMenuClick={() => setSideOpen(o => !o)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}