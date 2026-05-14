/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Calendar as CalendarIcon, 
  BarChart3, 
  ChevronRight, 
  LayoutDashboard, 
  GraduationCap,
  Trophy,
  Search,
  Menu,
  X,
  ArrowLeft,
  FileText,
  Zap,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BrainCircuit,
  Clock,
  MapPin,
  Globe,
  Play,
  Bookmark,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { DECA_DATA, CALENDAR_EVENTS, Cluster, Event, Question, PerformanceIndicator } from './data/deca-data';
import { getDetailedExplanation } from './lib/gemini';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// --- Types ---
type View = 'home' | 'login' | 'register' | 'cluster' | 'event' | 'test' | 'test-pdf' | 'flashcards' | 'stats' | 'profile' | 'study-buddy' | 'calendar' | 'notebook' | 'personal-flashcards' | 'pi-learn' | 'pi-pdf' | 'all-pi';

interface User {
  id: string;
  name: string;
  email: string;
  primaryEventId?: string;
  progress: {
    testScores: Record<string, number[]>;
    flashcardsLearned: string[];
    piMastery: Record<string, number>;
  };
  notebook: { id: string; title: string; content: string; date: string }[];
  personalFlashcards: { id: string; term: string; definition: string; isStarred?: boolean }[];
}

// --- Components ---

const Navbar = ({ user, setView, onLogout, onSelectCluster }: { 
  user: User | null, 
  setView: (v: View) => void, 
  onLogout: () => void,
  onSelectCluster: (c: Cluster) => void
}) => {
  const [showClusters, setShowClusters] = useState(false);

  return (
    <nav className="bg-[#0073BB] text-white py-4 px-6 flex items-center justify-between sticky top-0 z-50 shadow-md">
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView('home')}>
        <div className="bg-white p-1 rounded">
          <Trophy size={24} className="text-[#0073BB]" />
        </div>
        <span className="text-xl font-black tracking-tighter uppercase">WeddingtonDECA</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
        <div 
          className="relative group"
          onMouseEnter={() => setShowClusters(true)}
          onMouseLeave={() => setShowClusters(false)}
        >
          <button className="hover:text-blue-200 transition-colors flex items-center gap-1">
            Career Clusters
            <ChevronRight size={14} className="rotate-90" />
          </button>
          
          <AnimatePresence>
            {showClusters && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 w-64 bg-white text-slate-900 shadow-2xl border border-slate-100 py-2 z-50"
              >
                {DECA_DATA.map((cluster) => (
                  <button
                    key={cluster.id}
                    onClick={() => { onSelectCluster(cluster); setShowClusters(false); }}
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center gap-3 transition-colors border-b border-slate-50 last:border-0"
                  >
                    <div className={`w-2 h-2 rounded-full ${cluster.color}`} />
                    <span className="text-[11px] font-bold uppercase tracking-wider">{cluster.name}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button onClick={() => setView('calendar')} className="hover:text-blue-200 transition-colors">Calendar</button>
        <button onClick={() => setView('notebook')} className="hover:text-blue-200 transition-colors">Notebook</button>
        <button onClick={() => setView('personal-flashcards')} className="hover:text-blue-200 transition-colors">My Flashcards</button>
        <button onClick={() => setView('stats')} className="hover:text-blue-200 transition-colors">Statistics</button>
        <button onClick={() => setView('study-buddy')} className="hover:text-blue-200 transition-colors">Study Buddy</button>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="relative group">
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#0073BB]">
                  <GraduationCap size={14} />
                </div>
                <span className="text-sm font-bold hidden sm:inline">{user.name}</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white text-slate-900 shadow-2xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Profile</p>
                  <p className="text-xs font-bold truncate">{user.email}</p>
                </div>
                <button onClick={() => setView('profile')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-xs font-bold uppercase tracking-widest">My Profile</button>
                <button onClick={() => setView('stats')} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-xs font-bold uppercase tracking-widest">My Progress</button>
                <button onClick={onLogout} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-xs font-bold uppercase tracking-widest text-red-600">Logout</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setView('login')} className="text-white hover:bg-white/10">Login</Button>
            <Button variant="secondary" size="sm" onClick={() => setView('register')} className="bg-white text-[#0073BB] hover:bg-blue-50">Join Now</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
            alt="DECA Excellence" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-[#0073BB] text-white mb-6 px-6 py-2 text-sm uppercase tracking-[0.3em] font-black border-none">Weddington DECA</Badge>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-2xl">
              Excellence in <span className="text-[#0073BB]">Action</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mt-8 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
              Empowering the next generation of business leaders at Weddington. Your journey to competitive mastery starts here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Everything You Need to Win</h2>
            <div className="w-20 h-1 bg-[#0073BB] mx-auto mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Practice Exams', desc: 'Real DECA exams with AI-powered feedback and detailed explanations.', icon: FileText },
              { title: 'Roleplay Prep', desc: 'Scenario analysis and example solutions for every event category.', icon: Trophy },
              { title: 'Study Buddy', desc: 'Connect with members from across the globe to share notes and study together.', icon: BrainCircuit },
            ].map((f, i) => (
              <div key={i} className="space-y-4 text-center">
                <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center mx-auto text-[#0073BB]">
                  <f.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 uppercase">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const AuthView = ({ type, onAuth }: { type: 'login' | 'register', onAuth: (u: User) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock Auth
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: name || 'Competitor',
      email,
      progress: {
        testScores: {},
        flashcardsLearned: [],
        piMastery: {}
      },
      notebook: [],
      personalFlashcards: []
    };
    localStorage.setItem('deca_user', JSON.stringify(mockUser));
    onAuth(mockUser);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <Card className="w-full max-w-md border-slate-200 shadow-2xl rounded-none">
        <CardHeader className="text-center bg-[#0073BB] text-white py-10">
          <CardTitle className="text-3xl font-black uppercase tracking-tighter">
            {type === 'login' ? 'Welcome Back' : 'Join the Hub'}
          </CardTitle>
          <CardDescription className="text-blue-100 uppercase tracking-widest text-xs mt-2">
            {type === 'login' ? 'Continue your competitive journey' : 'Start your competitive career today'}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {type === 'register' && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-500">Full Name</label>
                <input 
                  type="text" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-slate-200 focus:border-[#0073BB] outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500">Email Address</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-slate-200 focus:border-[#0073BB] outline-none transition-all"
                placeholder="competitor@deca.org"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-500">Password</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-slate-200 focus:border-[#0073BB] outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            <Button type="submit" className="w-full bg-[#0073BB] hover:bg-[#005a92] text-white py-6 font-bold uppercase tracking-widest rounded-none">
              {type === 'login' ? 'Login' : 'Create Account'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const StudyBuddyView = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="bg-[#0073BB] text-white p-12 -mx-6 -mt-8 mb-12">
        <h2 className="text-4xl font-black uppercase tracking-tighter">Study Buddy</h2>
        <p className="text-blue-100 mt-2 uppercase tracking-widest text-sm">Collaborate with DECA members worldwide</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Active Study Groups</h3>
              <Button className="bg-[#0073BB] hover:bg-[#005a92] text-white uppercase font-bold text-xs">Create Group</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Marketing Masters', members: 12, topic: 'Individual Series', active: true },
                { name: 'Finance Wizards', members: 8, topic: 'Team Decision Making', active: true },
                { name: 'Hospitality Heroes', members: 15, topic: 'Principles', active: false },
                { name: 'Entrepreneurship Elite', members: 5, topic: 'Business Plan', active: true },
              ].map((group, i) => (
                <Card key={i} className="border-slate-200 hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-bold uppercase">{group.name}</CardTitle>
                      {group.active && <Badge className="bg-green-500 text-white border-none">Live Now</Badge>}
                    </div>
                    <CardDescription className="uppercase text-xs font-bold text-slate-400">{group.topic}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(n => (
                          <div key={n} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">U{n}</div>
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600">+{group.members - 3}</div>
                      </div>
                      <Button variant="outline" size="sm" className="border-[#0073BB] text-[#0073BB] uppercase font-bold text-xs">Join Session</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">Shared Resources</h3>
            <div className="space-y-4">
              {[
                { title: 'Ultimate Marketing PI Cheat Sheet', author: 'Sarah J.', cluster: 'Marketing', downloads: 1240 },
                { title: 'Finance Roleplay Tips 2024', author: 'Mike D.', cluster: 'Finance', downloads: 850 },
                { title: 'Hospitality Vocabulary List', author: 'Elena R.', cluster: 'Hospitality', downloads: 2100 },
              ].map((res, i) => (
                <Card key={i} className="border-slate-200">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0073BB]">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 uppercase">{res.title}</h4>
                        <p className="text-xs text-slate-500 uppercase font-bold">Shared by {res.author} • {res.cluster}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-slate-900">{res.downloads}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Downloads</p>
                      </div>
                      <Button size="sm" className="bg-[#0073BB] hover:bg-[#005a92] text-white uppercase font-bold text-xs">Download</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="uppercase tracking-tighter font-black">Find a Study Buddy</CardTitle>
              <CardDescription className="uppercase text-xs font-bold">Connect with members in your cluster</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search by event or cluster..." 
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-none focus:border-[#0073BB] outline-none transition-all uppercase text-xs font-bold"
                />
              </div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map(n => (
                  <div key={n} className="flex items-center justify-between p-3 hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200" />
                      <div>
                        <p className="text-sm font-bold text-slate-900 uppercase">Member {n}</p>
                        <p className="text-[10px] text-slate-500 uppercase font-bold">Marketing • State Qualifier</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-[#0073BB]"><Zap size={18} /></Button>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-slate-900 text-white uppercase font-bold text-xs py-6">View All Members</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ currentView, setView, isOpen, toggle, selectedCluster }: { 
  currentView: View, 
  setView: (v: View, data?: any) => void, 
  isOpen: boolean,
  toggle: () => void,
  selectedCluster: Cluster | null
}) => {
  const navItems = [
    { id: 'profile', label: 'My Profile', icon: GraduationCap },
    { id: 'all-pi', label: 'All 288 PIs', icon: BookOpen },
    { id: 'stats', label: 'Performance', icon: BarChart3 },
    { id: 'study-buddy', label: 'Study Buddy', icon: BrainCircuit },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={toggle}
        />
      )}
      
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:block
      `}>
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center gap-3 border-b border-slate-100">
            <div className="w-10 h-10 bg-[#0073BB] rounded-none flex items-center justify-center text-white">
              <Trophy size={24} />
            </div>
            <h1 className="text-xl font-black text-slate-900 uppercase tracking-tighter">WHS DECA</h1>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setView(item.id as View); if (window.innerWidth < 768) toggle(); }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-none transition-all uppercase text-xs font-bold tracking-widest
                  ${currentView === item.id 
                    ? 'bg-[#0073BB] text-white' 
                    : 'text-slate-600 hover:bg-slate-50'}
                `}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}

            <div className="pt-8 pb-4">
              <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Career Clusters</p>
            </div>

            {DECA_DATA.map((cluster) => (
              <button
                key={cluster.id}
                onClick={() => { setView('cluster', { cluster }); if (window.innerWidth < 768) toggle(); }}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-none transition-all uppercase text-[11px] font-bold tracking-wider
                  ${currentView === 'cluster' && selectedCluster?.id === cluster.id
                    ? 'bg-blue-50 text-[#0073BB]'
                    : 'text-slate-600 hover:bg-slate-50'}
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full ${cluster.color}`} />
                  {cluster.name}
                </div>
                <ChevronRight size={14} className="opacity-50" />
              </button>
            ))}
          </nav>

          <div className="p-6 border-t border-slate-100">
            <div className="bg-slate-50 rounded-none p-4 border border-slate-200">
              <p className="text-[10px] font-black text-slate-900 mb-2 uppercase tracking-widest">Chapter Goal</p>
              <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-2 uppercase">
                <span>State Qualifiers</span>
                <span>12/20</span>
              </div>
              <Progress value={60} className="h-1.5 rounded-none bg-slate-200" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

const Dashboard = ({ onSelectCluster, user, onUpdateUser }: { onSelectCluster: (c: Cluster) => void, user?: User | null, onUpdateUser?: (u: User) => void }) => {
  const [isSelectingEvent, setIsSelectingEvent] = useState(false);

  const allEvents = useMemo(() => {
    return DECA_DATA.flatMap(c => c.events.map(e => ({ ...e, clusterName: c.name, clusterId: c.id })));
  }, []);

  const primaryEvent = useMemo(() => {
    if (!user?.primaryEventId) return null;
    return allEvents.find(e => e.id === user.primaryEventId);
  }, [user?.primaryEventId, allEvents]);

  const handleSelectEvent = (eventId: string) => {
    if (user && onUpdateUser) {
      const updatedUser = { ...user, primaryEventId: eventId };
      onUpdateUser(updatedUser);
      setIsSelectingEvent(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <header className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Weddington DECA Dashboard</h2>
          <p className="text-slate-500 mt-2 uppercase tracking-widest text-sm font-bold">Your journey to competitive excellence starts here.</p>
        </div>
        {user && (
          <div className="flex flex-col items-end">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Primary Event</p>
            {primaryEvent ? (
              <div className="flex items-center gap-3">
                <Badge className="bg-[#0073BB] hover:bg-[#0073BB] rounded-none uppercase text-[10px] font-bold py-1 px-3">
                  {primaryEvent.name}
                </Badge>
                <Button variant="ghost" size="sm" onClick={() => setIsSelectingEvent(true)} className="h-6 px-2 text-[10px] font-bold uppercase text-[#0073BB]">Change</Button>
              </div>
            ) : (
              <Button size="sm" onClick={() => setIsSelectingEvent(true)} className="bg-[#0073BB] hover:bg-[#005a92] rounded-none uppercase text-[10px] font-bold">Select Your Event</Button>
            )}
          </div>
        )}
      </header>

      {isSelectingEvent && (
        <Card className="border-2 border-[#0073BB] rounded-none bg-blue-50/50">
          <CardHeader>
            <CardTitle className="text-xl font-black uppercase tracking-tighter">Select Your Competitive Event</CardTitle>
            <CardDescription className="text-xs font-bold uppercase tracking-widest">This will personalize your study recommendations and analytics.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-64 overflow-y-auto p-2">
              {allEvents.map(event => (
                <button
                  key={event.id}
                  onClick={() => handleSelectEvent(event.id)}
                  className="text-left p-3 bg-white border border-slate-200 hover:border-[#0073BB] transition-all text-xs font-bold uppercase tracking-tight"
                >
                  <p className="text-slate-900">{event.name}</p>
                  <p className="text-[10px] text-slate-400">{event.clusterName}</p>
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="ghost" onClick={() => setIsSelectingEvent(false)} className="uppercase text-xs font-bold tracking-widest">Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Career Clusters</h3>
              <Button variant="ghost" className="text-[#0073BB] font-bold uppercase text-xs tracking-widest">View All</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DECA_DATA.map((cluster) => (
                <Card 
                  key={cluster.id} 
                  className="group cursor-pointer hover:shadow-2xl transition-all border-slate-100 overflow-hidden rounded-none bg-white"
                  onClick={() => onSelectCluster(cluster)}
                >
                  <div className={`h-1 ${cluster.color}`} />
                  <CardHeader className="pb-4 pt-8">
                    <CardTitle className="flex items-center justify-between text-xl font-black uppercase tracking-tighter text-slate-900">
                      {cluster.name}
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#0073BB] group-hover:text-white transition-all">
                        <BookOpen size={18} />
                      </div>
                    </CardTitle>
                    <CardDescription className="text-sm font-medium leading-relaxed text-slate-500 mt-2">{cluster.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-8">
                    <div className="flex gap-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Events</span>
                        <span className="text-sm font-bold text-slate-900">{cluster.events.length}</span>
                      </div>
                      <div className="flex flex-col border-l border-slate-100 pl-4">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Resources</span>
                        <span className="text-sm font-bold text-slate-900">{cluster.practiceTests.length + cluster.flashcards.length}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-8">Performance Snapshot</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="bg-[#0073BB] text-white border-none rounded-none shadow-xl">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Daily Streak</span>
                  </div>
                  <p className="text-4xl font-black uppercase tracking-tighter">12 Days</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-900 text-white border-none rounded-none shadow-xl">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Tests Passed</span>
                  </div>
                  <p className="text-4xl font-black uppercase tracking-tighter">24</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-slate-200 rounded-none shadow-xl">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-3 text-slate-600">
                    <BrainCircuit size={20} />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Terms Mastered</span>
                  </div>
                  <p className="text-4xl font-black uppercase tracking-tighter text-slate-900">142</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-10">
          <Card className="border-slate-200 rounded-none shadow-lg">
            <CardHeader className="border-b border-slate-100">
              <CardTitle className="flex items-center gap-3 font-black uppercase tracking-tighter text-lg">
                <CalendarIcon size={20} className="text-[#0073BB]" />
                Event Calendar
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Calendar mode="single" className="rounded-none border-none mx-auto" />
              <div className="mt-8 space-y-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Upcoming Deadlines</p>
                {CALENDAR_EVENTS.map(event => (
                  <div key={event.id} className="flex items-start gap-4 p-4 rounded-none hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-12 h-12 rounded-none bg-blue-50 flex flex-col items-center justify-center text-[#0073BB] font-black text-[10px] uppercase">
                      <span>{event.date.toLocaleString('default', { month: 'short' })}</span>
                      <span className="text-lg leading-none">{event.date.getDate()}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">{event.title}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{event.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const ClusterView = ({ 
  user,
  cluster, 
  onBack, 
  onSelectEvent, 
  onStartTest, 
  onStartFlashcards,
  onLearnPI,
  onViewPIPDF,
  onViewTestPDF
}: { 
  user: User | null,
  cluster: Cluster, 
  onBack: () => void,
  onSelectEvent: (e: Event) => void,
  onStartTest: (t: any, level: 'district' | 'icdc') => void,
  onStartFlashcards: (f: any[]) => void,
  onLearnPI: (pi: PerformanceIndicator) => void,
  onViewPIPDF: () => void,
  onViewTestPDF: (t: any) => void
}) => {
  const [testLevel, setTestLevel] = useState<'district' | 'international' | null>(null);
  const [selectedTestForOptions, setSelectedTestForOptions] = useState<any | null>(null);

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full">
            <ArrowLeft size={20} />
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-slate-900">{cluster.name}</h2>
              <div className={`w-3 h-3 rounded-full ${cluster.color}`} />
            </div>
            <p className="text-slate-500">{cluster.description}</p>
          </div>
        </div>
      </header>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-slate-100 p-1 rounded-xl flex gap-4 w-fit mx-auto mb-8">
          <TabsTrigger value="overview" className="rounded-lg px-8">Overview</TabsTrigger>
          <TabsTrigger value="events" className="rounded-lg px-8">Events</TabsTrigger>
          <TabsTrigger value="tests" className="rounded-lg px-8">Practice Tests</TabsTrigger>
          <TabsTrigger value="pi" className="rounded-lg px-8">Performance Indicators</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">About {cluster.name}</h3>
              <p className="text-slate-600 leading-relaxed">
                The {cluster.name} cluster focuses on the core principles and strategies that drive business success. 
                Whether you're interested in market research, financial analysis, or strategic management, 
                this cluster provides the foundation you need to excel in the competitive business world.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-none">
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Total Events</p>
                  <p className="text-2xl font-black text-slate-900">{cluster.events.length}</p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-none">
                  <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">PIs to Master</p>
                  <p className="text-2xl font-black text-slate-900">{cluster.performanceIndicators.length}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Card className="border-slate-200 hover:border-blue-200 transition-colors cursor-pointer" onClick={() => onStartFlashcards(cluster.flashcards)}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <BrainCircuit size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg uppercase">Vocabulary</CardTitle>
                    <CardDescription className="text-xs">Master {cluster.flashcards.length} core terms.</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card className="border-slate-200 hover:border-purple-200 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg uppercase">PI Analysis</CardTitle>
                    <CardDescription className="text-xs">Deep dive into {cluster.performanceIndicators.length} indicators.</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cluster.events.map(event => (
              <Card 
                key={event.id} 
                className="group cursor-pointer hover:shadow-md transition-all border-slate-200 rounded-none"
                onClick={() => onSelectEvent(event)}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between uppercase tracking-tight">
                    {event.name}
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-all text-[#0073BB]" />
                  </CardTitle>
                  <CardDescription className="text-[10px] font-bold uppercase text-slate-400">{event.category} Event</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 line-clamp-2">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tests" className="mt-8">
          {!testLevel ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto py-12">
              <Button 
                className="h-40 bg-[#0073BB] hover:bg-[#005a92] text-white flex flex-col gap-4 rounded-none group"
                onClick={() => setTestLevel('district')}
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div className="text-center">
                  <p className="text-xl font-black uppercase tracking-tighter">District and State Level</p>
                  <p className="text-[10px] font-bold opacity-70">Standard competition format</p>
                </div>
              </Button>
              <Button 
                className="h-40 bg-slate-900 hover:bg-slate-800 text-white flex flex-col gap-4 rounded-none group"
                onClick={() => setTestLevel('international')}
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe size={24} />
                </div>
                <div className="text-center">
                  <p className="text-xl font-black uppercase tracking-tighter">International Level</p>
                  <p className="text-[10px] font-bold opacity-70">ICDC championship format</p>
                </div>
              </Button>
            </div>
          ) : !selectedTestForOptions ? (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Button variant="ghost" size="sm" onClick={() => setTestLevel(null)} className="uppercase font-bold text-[10px]">
                  <ArrowLeft size={14} className="mr-2" /> Back to Levels
                </Button>
                <h3 className="text-xl font-black uppercase tracking-tight">
                  {testLevel === 'district' ? 'District & State' : 'International'} Practice Tests
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cluster.practiceTests
                  .filter(test => {
                    const isIcdc = test.name.toLowerCase().includes('icdc') || test.id.toLowerCase().includes('icdc');
                    return testLevel === 'international' ? isIcdc : !isIcdc;
                  })
                  .map(test => (
                  <Card 
                    key={test.id} 
                    className="border-slate-200 rounded-none hover:border-[#0073BB] transition-all cursor-pointer group"
                    onClick={() => setSelectedTestForOptions(test)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-black uppercase tracking-tighter group-hover:text-[#0073BB] transition-colors">{test.name}</CardTitle>
                        <Badge className="bg-green-100 text-green-700 border-none uppercase text-[10px]">Available</Badge>
                      </div>
                      <CardDescription className="uppercase text-[10px] font-bold">{test.questions.length} Questions • 100 Points</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto py-12 space-y-8">
              <div className="text-center space-y-4">
                <Button variant="ghost" size="sm" onClick={() => setSelectedTestForOptions(null)} className="uppercase font-bold text-[10px]">
                  <ArrowLeft size={14} className="mr-2" /> Back to Tests
                </Button>
                <h3 className="text-3xl font-black uppercase tracking-tighter">{selectedTestForOptions.name}</h3>
                <p className="text-slate-500 uppercase text-xs font-bold tracking-widest">Select your study mode</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-slate-200 rounded-none hover:border-[#0073BB] transition-all group cursor-pointer" onClick={() => onViewTestPDF(selectedTestForOptions)}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <FileText size={32} />
                    </div>
                    <CardTitle className="uppercase font-black">PDF Version</CardTitle>
                    <CardDescription className="text-xs">View the official exam PDF</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-2 border-slate-200 rounded-none hover:border-[#0073BB] transition-all group cursor-pointer" onClick={() => onStartTest(selectedTestForOptions, testLevel === 'district' ? 'district' : 'icdc')}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-50 text-[#0073BB] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Play size={32} />
                    </div>
                    <CardTitle className="uppercase font-black">Live Mode</CardTitle>
                    <CardDescription className="text-xs">Interactive test with instant feedback</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="pi" className="mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h3 className="text-xl font-black uppercase tracking-tight">Performance Indicators</h3>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  const flashcards = cluster.performanceIndicators.map(pi => {
                    return {
                      id: pi.id,
                      term: `${pi.code} (SP) - ${pi.name}`,
                      definition: `Definition: ${pi.description}\nKey Points:\n - Understand the core concept\n - Apply to business scenarios\n - Explain the impact`,
                      isStarred: user?.personalFlashcards.find(f => f.id === pi.id)?.isStarred || false
                    };
                  });
                  onStartFlashcards(flashcards);
                }} 
                className="uppercase font-bold text-[10px] tracking-widest rounded-none"
              >
                <Zap size={14} className="mr-2" />
                Study All as Flashcards
              </Button>
              <Button variant="outline" size="sm" onClick={onViewPIPDF} className="uppercase font-bold text-[10px] tracking-widest rounded-none">
                <FileText size={14} className="mr-2" />
                View PDF Version
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cluster.performanceIndicators.map(pi => (
              <Card key={pi.id} className="border-slate-200 hover:border-blue-200 transition-all rounded-none">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="font-mono">{pi.code}</Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">Tier 1</Badge>
                  </div>
                  <CardTitle className="text-lg mt-2 uppercase font-bold">{pi.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 line-clamp-2">{pi.description}</p>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 uppercase font-bold text-[10px] tracking-widest rounded-none"
                      onClick={() => onLearnPI(pi)}
                    >
                      Learn More
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="uppercase font-bold text-[10px] tracking-widest text-[#0073BB] rounded-none"
                      onClick={() => {
                        onStartFlashcards([{ 
                          id: pi.id, 
                          term: `${pi.code} (SP) - ${pi.name}`, 
                          definition: `Definition: ${pi.description}`
                        }]);
                      }}
                    >
                      Flashcard
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const EventView = ({ 
  event, 
  onBack,
  onStartFlashcards 
}: { 
  event: Event, 
  onBack: () => void,
  onStartFlashcards: (f: any[]) => void
}) => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full">
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">{event.name}</h2>
            <p className="text-slate-500">{event.category} Event</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <section className="bg-slate-50 p-8 border border-slate-100 rounded-none">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Event Description</h3>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              {event.description}
            </p>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Practice Roleplays</h3>
              <Badge className="bg-blue-50 text-[#0073BB] border-none uppercase text-[10px] font-bold">{event.roleplays.length} Scenarios</Badge>
            </div>
            <div className="space-y-4">
              {event.roleplays.map(rp => (
                <Card key={rp.id} className="border-slate-200 rounded-none shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-black uppercase tracking-tight">{rp.title}</CardTitle>
                    <CardDescription className="text-[10px] font-bold uppercase text-slate-400">PIs: {rp.performanceIndicators.join(', ')}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-slate-50 p-6 border-l-4 border-[#0073BB]">
                      <p className="text-sm text-slate-700 leading-relaxed italic">"{rp.scenario}"</p>
                    </div>
                    {rp.exampleSolution && (
                      <div className="space-y-3">
                        <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Strategy Guide</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{rp.exampleSolution}</p>
                      </div>
                    )}
                    <div className="flex gap-4 pt-4">
                      <Button className="bg-[#0073BB] hover:bg-[#005a92] text-white uppercase font-bold text-xs py-6 px-8 rounded-none">Start Roleplay</Button>
                      <Button variant="outline" className="border-slate-200 uppercase font-bold text-xs py-6 px-8 rounded-none">View Rubric</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {event.roleplays.length === 0 && (
                <div className="text-center py-12 border-2 border-dashed border-slate-200">
                  <p className="text-slate-400 font-bold uppercase text-xs">No roleplays available for this event yet.</p>
                </div>
              )}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Study Videos</h3>
              <Badge className="bg-red-50 text-red-600 border-none uppercase text-[10px] font-bold">{event.videos.length} Videos</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.videos.map(video => (
                <Card key={video.id} className="border-slate-200 rounded-none overflow-hidden group cursor-pointer">
                  <div className="aspect-video bg-slate-900 relative">
                    <iframe 
                      src={video.url} 
                      className="w-full h-full" 
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm font-bold uppercase tracking-tight group-hover:text-[#0073BB] transition-colors">{video.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
              {event.videos.length === 0 && (
                <div className="col-span-full text-center py-12 border-2 border-dashed border-slate-200">
                  <p className="text-slate-400 font-bold uppercase text-xs">No study videos available for this event yet.</p>
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <Card className="border-slate-200 bg-blue-50/50 border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <BrainCircuit size={20} />
                Event Vocabulary
              </CardTitle>
              <CardDescription className="text-blue-600/80">Master terms specific to {event.name}.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => onStartFlashcards(event.flashcards)}
              >
                Study {event.flashcards.length} Terms
              </Button>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Event Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold shrink-0">1</div>
                <p className="text-sm text-slate-600">Always start with a strong handshake and professional greeting.</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold shrink-0">2</div>
                <p className="text-sm text-slate-600">Incorporate all performance indicators naturally into your pitch.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const FlashcardView = ({ flashcards, onBack, onToggleStar }: { 
  flashcards: any[], 
  onBack: () => void,
  onToggleStar?: (id: string) => void 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const current = flashcards[currentIndex];

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-12 animate-in zoom-in-95 duration-300">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft size={18} /> Back
        </Button>
        <div className="flex items-center gap-4">
          {onToggleStar && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={(e) => {
                e.stopPropagation();
                onToggleStar(current.id);
              }}
              className={current.isStarred ? 'text-yellow-500' : 'text-slate-300'}
            >
              <Trophy size={20} fill={current.isStarred ? 'currentColor' : 'none'} />
            </Button>
          )}
          <p className="text-sm font-medium text-slate-500">Card {currentIndex + 1} of {flashcards.length}</p>
        </div>
      </div>

      <div 
        className="relative h-80 w-full perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full transition-all duration-500 preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
        >
          {/* Front */}
          <Card className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center p-12 text-center border-2 ${isFlipped ? 'invisible' : 'visible'}`}>
            <h3 className="text-3xl font-bold text-slate-900">{current.term}</h3>
            <p className="mt-4 text-slate-400 text-sm">Click to flip</p>
          </Card>

          {/* Back */}
          <Card className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center p-12 text-center border-2 bg-blue-50 border-blue-100 ${isFlipped ? 'visible' : 'invisible'}`} style={{ transform: 'rotateY(180deg)' }}>
            <div className="text-left w-full overflow-y-auto max-h-full scrollbar-hide">
              <p className="text-lg text-slate-800 leading-relaxed whitespace-pre-wrap">{current.definition}</p>
            </div>
          </Card>
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button 
          variant="outline" 
          size="lg" 
          className="px-8"
          disabled={currentIndex === 0}
          onClick={() => { setCurrentIndex(prev => prev - 1); setIsFlipped(false); }}
        >
          Previous
        </Button>
        <Button 
          size="lg" 
          className="px-8 bg-blue-600 hover:bg-blue-700"
          disabled={currentIndex === flashcards.length - 1}
          onClick={() => { setCurrentIndex(prev => prev + 1); setIsFlipped(false); }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

const PracticeTestView = ({ test, level, onBack, onFinish, onAddToNotebook, onAddFlashcard, onRemoveFlashcard, user }: { 
  test: any, 
  level: 'district' | 'icdc',
  onBack: () => void, 
  onFinish: (results: any) => void,
  onAddToNotebook: (title: string, content: string) => void,
  onAddFlashcard: (term: string, definition: string, id?: string) => void,
  onRemoveFlashcard: (id: string) => void,
  user: User | null
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const [isFinished, setIsFinished] = useState(false);
  const [aiExplanations, setAiExplanations] = useState<Record<string, string>>({});
  const [loadingAi, setLoadingAi] = useState<string | null>(null);
  const [showNavigator, setShowNavigator] = useState(false);
  const [showSubmitWarning, setShowSubmitWarning] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'correct' | 'incorrect' | 'bookmarked' | 'unanswered'>('all');
  const [showSummary, setShowSummary] = useState(false);

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (qId: string) => {
    setExpandedSections(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const currentQuestion = test.questions[currentQuestionIndex];

  const handleAnswer = (optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionIndex }));
  };

  const toggleBookmark = (qId: string) => {
    setBookmarks(prev => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getAiHelp = async (q: Question, userAnswerIndex: number) => {
    setLoadingAi(q.id);
    const explanation = await getDetailedExplanation(
      q.text, 
      q.options[q.correctAnswer], 
      q.options[userAnswerIndex], 
      q.explanation
    );
    setAiExplanations(prev => ({ ...prev, [q.id]: explanation }));
    setLoadingAi(null);
  };

  const handleSubmit = () => {
    const unansweredCount = test.questions.length - Object.keys(answers).length;
    if (unansweredCount > 0) {
      setShowSubmitWarning(true);
    } else {
      setIsFinished(true);
    }
  };

  const confirmSubmit = () => {
    setIsFinished(true);
    setShowSubmitWarning(false);
  };

  if (isFinished) {
    const score = test.questions.reduce((acc: number, q: Question) => {
      return acc + (answers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);
    const percentage = Math.round((score / test.questions.length) * 100);

    return (
      <div className="max-w-4xl mx-auto space-y-8 py-12 animate-in fade-in duration-500">
        {!showSummary ? (
          <>
            <header className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Trophy size={40} />
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Test Complete!</h2>
              <div className="flex flex-col items-center gap-2">
                <p className="text-6xl font-black text-[#0073BB]">{percentage}%</p>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">You got {score} out of {test.questions.length} correct.</p>
              </div>
            </header>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 bg-white/90 backdrop-blur-sm z-30 py-4 border-b border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Question Review</h3>
                <div className="flex flex-wrap gap-2">
                  {(['all', 'correct', 'incorrect', 'bookmarked', 'unanswered'] as const).map(f => (
                    <Button
                      key={f}
                      variant={reviewFilter === f ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setReviewFilter(f)}
                      className="uppercase font-bold text-[10px] tracking-widest rounded-none h-8"
                    >
                      {f}
                    </Button>
                  ))}
                </div>
              </div>

              {test.questions
                .filter((q: Question) => {
                  if (reviewFilter === 'all') return true;
                  if (reviewFilter === 'correct') return answers[q.id] === q.correctAnswer;
                  if (reviewFilter === 'incorrect') return answers[q.id] !== undefined && answers[q.id] !== q.correctAnswer;
                  if (reviewFilter === 'bookmarked') return bookmarks.has(q.id);
                  if (reviewFilter === 'unanswered') return answers[q.id] === undefined;
                  return true;
                })
                .map((q: Question, idx: number) => {
                  const isCorrect = answers[q.id] === q.correctAnswer;
                  const isBookmarked = bookmarks.has(q.id);
                  const originalIdx = test.questions.findIndex((tq: any) => tq.id === q.id);
                  
                  return (
                    <Card key={q.id} className={`border-l-8 rounded-none ${isCorrect ? 'border-l-green-500' : answers[q.id] === undefined ? 'border-l-slate-300' : 'border-l-red-500'}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <CardTitle className="text-lg leading-snug font-bold uppercase">
                            <span className="text-slate-300 mr-2">#{originalIdx + 1}</span>
                            {q.text}
                          </CardTitle>
                          <div className="flex items-center gap-2">
                            {isBookmarked && <Badge className="bg-yellow-100 text-yellow-700 border-none uppercase text-[10px]">Bookmarked</Badge>}
                            {answers[q.id] === undefined ? (
                              <Badge variant="outline" className="uppercase text-[10px]">Unanswered</Badge>
                            ) : isCorrect ? (
                              <CheckCircle2 className="text-green-500 shrink-0" />
                            ) : (
                              <XCircle className="text-red-500 shrink-0" />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {q.options.map((opt, i) => (
                            <div 
                              key={i} 
                              className={`p-4 border-2 text-xs font-bold uppercase tracking-tight ${
                                i === q.correctAnswer 
                                  ? 'bg-green-50 border-green-200 text-green-800' 
                                  : i === answers[q.id] 
                                    ? 'bg-red-50 border-red-200 text-red-800' 
                                    : 'bg-slate-50 border-slate-100 text-slate-400'
                              }`}
                            >
                              {opt}
                            </div>
                          ))}
                        </div>
                        
                        {/* Collapsible Review Section */}
                        <div className="border-t border-slate-100 pt-4">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-full flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50"
                            onClick={() => toggleSection(q.id)}
                          >
                            <span>{expandedSections[q.id] ? 'Hide Analysis' : 'Show Analysis, Notes & Terms'}</span>
                            {expandedSections[q.id] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </Button>

                          <AnimatePresence>
                            {expandedSections[q.id] && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-4 pt-4">
                                  {/* Explanation Section */}
                                  <div className="bg-slate-50 p-6 border border-slate-100 space-y-4">
                                    <div className="flex items-center justify-between">
                                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Explanation</p>
                                      <Badge variant="outline" className="text-[10px] font-mono border-slate-200">{q.reference}</Badge>
                                    </div>
                                    <div className="space-y-4">
                                      <p className="text-sm text-slate-700 leading-relaxed">
                                        {q.explanation}
                                      </p>
                                      <div className="flex flex-wrap gap-2">
                                        <Button 
                                          variant="outline" 
                                          size="sm" 
                                          className="text-[10px] font-black uppercase tracking-widest h-8"
                                          onClick={() => onAddToNotebook(`Explanation: ${q.text.substring(0, 30)}...`, `Question: ${q.text}\nCorrect Answer: ${q.options[q.correctAnswer]}\nExplanation: ${q.explanation}`)}
                                        >
                                          Add to Notebook
                                        </Button>
                                        {!aiExplanations[q.id] && answers[q.id] !== undefined && (
                                          <Button 
                                            variant="secondary" 
                                            size="sm" 
                                            className="bg-[#0073BB] hover:bg-[#005a92] text-white text-[10px] font-black uppercase tracking-widest h-8"
                                            onClick={() => getAiHelp(q, answers[q.id])}
                                            disabled={loadingAi === q.id}
                                          >
                                            {loadingAi === q.id ? 'Thinking...' : 'Learn More'}
                                          </Button>
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Notes Section */}
                                  {q.notes && (
                                    <div className="bg-slate-50/30 p-6 border border-slate-100 space-y-4">
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                          <BookOpen size={14} className="text-[#0073BB] opacity-60" />
                                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Study Notes & Key Terms</p>
                                        </div>
                                        <Button 
                                          variant="outline" 
                                          size="sm" 
                                          className="text-[10px] font-bold uppercase tracking-widest h-7 border-slate-100 text-slate-400 hover:bg-white hover:text-[#0073BB] flex items-center gap-2 transition-all shadow-sm"
                                          onClick={() => onAddToNotebook(`Notes: ${q.text.substring(0, 30)}...`, q.notes || '')}
                                        >
                                          <Bookmark size={12} />
                                          Add to Notebook
                                        </Button>
                                      </div>
                                      <div className="space-y-4">
                                        {q.notes.split('\n').map((note, idx) => {
                                          const parts = note.split(' - ');
                                          if (parts.length > 1) {
                                            return (
                                              <div key={idx} className="flex items-start gap-3 group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 shrink-0 group-hover:bg-[#0073BB] transition-colors" />
                                                <p className="text-sm leading-relaxed">
                                                  <span className="font-medium text-slate-800">{parts[0]}</span>
                                                  <span className="mx-2 text-slate-300">—</span>
                                                  <span className="text-slate-500 font-normal">{parts.slice(1).join(' - ')}</span>
                                                </p>
                                              </div>
                                            );
                                          }
                                          return (
                                            <div key={idx} className="flex items-start gap-3">
                                              <div className="w-1.5 h-1.5 rounded-full bg-blue-200 mt-1.5 shrink-0" />
                                              <p className="text-sm text-slate-500 leading-relaxed font-normal">
                                                {note}
                                              </p>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  )}

                                  {/* Terms Section */}
                                  <div className="bg-blue-50/50 p-6 border border-blue-100 space-y-4">
                                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Key Terms</p>
                                    <div className="flex flex-wrap gap-2">
                                      <Badge variant="secondary" className="bg-white border-blue-100 text-blue-700 uppercase text-[10px]">{q.performanceIndicatorId}</Badge>
                                      {(() => {
                                        const noteTerms = q.notes ? q.notes.split('\n').map(n => n.split(' - ')[0]).filter(t => t.length > 0 && t.length < 30) : [];
                                        const allTerms = Array.from(new Set([...(q.keyTerms || []), ...noteTerms]));
                                        const displayTerms = allTerms.length > 0 ? allTerms : q.options.map(o => o.replace(/\./g, ''));
                                        
                                        return displayTerms.map((term, i) => {
                                          const termId = `term-${q.id}-${term}`;
                                          const isTermStarred = user?.personalFlashcards.some(f => f.id === termId);
                                          return (
                                            <Badge 
                                              key={i} 
                                              variant="secondary" 
                                              className={`bg-white border-blue-100 text-blue-700 uppercase text-[10px] flex items-center gap-1 pr-1 cursor-pointer hover:bg-blue-50 transition-colors ${isTermStarred ? 'border-yellow-400 bg-yellow-50' : ''}`}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                if (isTermStarred) {
                                                  onRemoveFlashcard(termId);
                                                } else {
                                                  onAddFlashcard(term, `Key term from question: ${q.text}\n\nContext: ${q.explanation}`, termId);
                                                }
                                              }}
                                            >
                                              {term}
                                              <Star size={10} className={`${isTermStarred ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />
                                            </Badge>
                                          );
                                        });
                                      })()}
                                    </div>
                                  </div>

                                  {aiExplanations[q.id] && (
                                    <div className="p-6 bg-blue-50 border border-blue-100 space-y-2 animate-in fade-in slide-in-from-top-2">
                                      <p className="text-[10px] font-black text-[#0073BB] uppercase tracking-widest flex items-center gap-1">
                                        <BrainCircuit size={12} /> AI Coach Insight
                                      </p>
                                      <p className="text-sm text-slate-700 italic leading-relaxed">{aiExplanations[q.id]}</p>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>

            <div className="flex justify-center gap-4 pt-8">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 px-12 rounded-none uppercase font-bold text-xs tracking-widest" onClick={() => setShowSummary(true)}>
                Next: View Performance Summary
              </Button>
            </div>
          </>
        ) : (
          <div className="space-y-12 animate-in slide-in-from-right-4 duration-500">
            <header className="text-center space-y-4">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Performance Summary</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Analysis of your test results</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-slate-200 rounded-none">
                <CardHeader>
                  <CardTitle className="uppercase tracking-tight">Instructional Areas to Work On</CardTitle>
                  <CardDescription className="text-xs">Based on your incorrect answers in this test.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array.from(new Set(test.questions
                    .filter((q: any) => answers[q.id] !== q.correctAnswer)
                    .map((q: any) => q.performanceIndicatorId.split(':')[0])
                  )).map((area: any) => (
                    <div key={area} className="flex items-center justify-between p-3 bg-red-50 border border-red-100">
                      <span className="font-black text-red-700">{area}</span>
                      <Badge className="bg-red-100 text-red-700 border-none uppercase text-[10px]">Needs Focus</Badge>
                    </div>
                  ))}
                  {test.questions.filter((q: any) => answers[q.id] !== q.correctAnswer).length === 0 && (
                    <p className="text-sm text-slate-500 italic">No areas identified for improvement. Great job!</p>
                  )}
                </CardContent>
              </Card>

              <Card className="border-slate-200 rounded-none">
                <CardHeader>
                  <CardTitle className="uppercase tracking-tight">Concepts You Struggle With</CardTitle>
                  <CardDescription className="text-xs">Specific topics that need more review.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {test.questions
                    .filter((q: any) => answers[q.id] !== q.correctAnswer)
                    .slice(0, 5)
                    .map((q: any) => (
                      <div key={q.id} className="p-3 bg-slate-50 border border-slate-100">
                        <p className="text-xs font-bold text-slate-700">{q.text.substring(0, 60)}...</p>
                        <p className="text-[10px] font-black text-[#0073BB] uppercase mt-1">{q.reference}</p>
                      </div>
                    ))}
                  {test.questions.filter((q: any) => answers[q.id] !== q.correctAnswer).length === 0 && (
                    <p className="text-sm text-slate-500 italic">You've mastered all concepts in this test!</p>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" className="px-12 rounded-none uppercase font-bold text-xs tracking-widest" onClick={() => setShowSummary(false)}>
                Back to Review
              </Button>
              <Button size="lg" className="bg-[#0073BB] hover:bg-[#005a92] px-12 rounded-none uppercase font-bold text-xs tracking-widest" onClick={() => onFinish({ score, total: test.questions.length, answers })}>
                Finish & Save Progress
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 py-8 px-4 animate-in slide-in-from-bottom-4 duration-500 relative">
      {/* Submit Warning Modal */}
      <AnimatePresence>
        {showSubmitWarning && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-8 max-w-md w-full border-4 border-slate-900 shadow-2xl"
            >
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Unfinished Test</h3>
              <p className="text-slate-600 mb-8 font-medium">
                You still have {test.questions.length - Object.keys(answers).length} unanswered questions. Are you sure you want to submit?
              </p>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 uppercase font-bold text-xs py-6 rounded-none" onClick={() => setShowSubmitWarning(false)}>Go Back</Button>
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white uppercase font-bold text-xs py-6 rounded-none" onClick={confirmSubmit}>Submit Anyway</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Question Navigator Drawer */}
      <AnimatePresence>
        {showNavigator && (
          <div className="fixed inset-0 z-[90] flex justify-end bg-slate-900/20 backdrop-blur-[2px]" onClick={() => setShowNavigator(false)}>
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black uppercase tracking-tight">Question Map</h3>
                <Button variant="ghost" size="icon" onClick={() => setShowNavigator(false)}><X size={20} /></Button>
              </div>
              
              <div className="grid grid-cols-5 gap-2">
                {test.questions.map((q: any, idx: number) => {
                  const isAnswered = answers[q.id] !== undefined;
                  const isBookmarked = bookmarks.has(q.id);
                  return (
                    <button
                      key={q.id}
                      onClick={() => { setCurrentQuestionIndex(idx); setShowNavigator(false); }}
                      className={`h-12 flex flex-col items-center justify-center relative border-2 transition-all ${
                        currentQuestionIndex === idx 
                          ? 'border-blue-600 bg-blue-50' 
                          : isAnswered 
                            ? 'border-slate-200 bg-slate-100' 
                            : 'border-slate-100 bg-white'
                      }`}
                    >
                      {isBookmarked && (
                        <div className="absolute top-0 right-0 p-0.5">
                          <Bookmark size={10} className="fill-blue-500 text-blue-500" />
                        </div>
                      )}
                      <span className={`text-xs font-bold ${currentQuestionIndex === idx ? 'text-blue-700' : 'text-slate-500'}`}>{idx + 1}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 space-y-3 p-4 bg-slate-50 border border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Legend</p>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                  <div className="relative w-4 h-4">
                    <Bookmark size={12} className="fill-blue-500 text-blue-500" />
                  </div> 
                  Bookmarked
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                  <div className="w-3 h-3 border-2 border-slate-100 bg-white" /> Unanswered
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-600">
                  <div className="w-3 h-3 border-2 border-slate-200 bg-slate-100" /> Answered
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-40 py-4 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full">
            <X size={20} />
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-black uppercase tracking-tight text-slate-900">{test.name}</h3>
              <Badge className={level === 'icdc' ? 'bg-slate-900 text-white' : 'bg-blue-600 text-white'}>
                {level === 'icdc' ? 'ICDC' : 'District'}
              </Badge>
            </div>
            <p className="text-[10px] font-bold uppercase text-slate-400">Question {currentQuestionIndex + 1} of {test.questions.length}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowNavigator(true)}
            className="uppercase font-bold text-[10px] tracking-widest rounded-none h-10 px-4"
          >
            <Menu size={14} className="mr-2" />
            Question Map
          </Button>
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white uppercase font-bold text-[10px] tracking-widest rounded-none h-10 px-6"
            onClick={handleSubmit}
          >
            Submit Test
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-slate-200 shadow-sm rounded-none">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest">Question {currentQuestionIndex + 1}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => toggleBookmark(currentQuestion.id)}
                  className={`flex items-center gap-2 uppercase font-bold text-[10px] tracking-widest ${bookmarks.has(currentQuestion.id) ? 'text-yellow-600 bg-yellow-50' : 'text-slate-400'}`}
                >
                  <Trophy size={14} className={bookmarks.has(currentQuestion.id) ? 'fill-current' : ''} />
                  {bookmarks.has(currentQuestion.id) ? 'Bookmarked' : 'Bookmark'}
                </Button>
              </div>
              <CardTitle className="text-xl leading-snug text-slate-900 font-bold">
                {currentQuestion.text}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {currentQuestion.options.map((option: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left p-4 border-2 transition-all flex items-center justify-between group rounded-none ${
                    answers[currentQuestion.id] === idx 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-slate-100 hover:border-slate-200 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-none flex items-center justify-center text-xs font-black border-2 ${
                      answers[currentQuestion.id] === idx 
                        ? 'bg-blue-600 border-blue-600 text-white' 
                        : 'bg-slate-50 border-slate-100 text-slate-400 group-hover:bg-slate-100'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className={`text-sm font-bold ${answers[currentQuestion.id] === idx ? 'text-blue-900' : 'text-slate-600'}`}>
                      {option}
                    </span>
                  </div>
                  {answers[currentQuestion.id] === idx && <CheckCircle2 size={18} className="text-blue-600" />}
                </button>
              ))}
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 uppercase font-bold text-xs tracking-widest rounded-none border-2"
              disabled={currentQuestionIndex === 0}
              onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
            >
              Previous
            </Button>
            <Button 
              size="lg" 
              className="px-12 bg-slate-900 hover:bg-slate-800 text-white uppercase font-bold text-xs tracking-widest rounded-none"
              onClick={nextQuestion}
            >
              {currentQuestionIndex === test.questions.length - 1 ? 'Review' : 'Next Question'}
            </Button>
          </div>
        </div>

        <div className="hidden lg:block space-y-4">
          <Card className="border-slate-200 rounded-none bg-slate-50/50">
            <CardHeader className="p-4">
              <CardTitle className="text-[10px] font-black uppercase tracking-widest text-slate-400">Test Progress</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span>Completed</span>
                  <span>{Math.round((Object.keys(answers).length / test.questions.length) * 100)}%</span>
                </div>
                <Progress value={(Object.keys(answers).length / test.questions.length) * 100} className="h-1.5" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-3 border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase">Answered</p>
                  <p className="text-xl font-black text-slate-900">{Object.keys(answers).length}</p>
                </div>
                <div className="bg-white p-3 border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase">Bookmarked</p>
                  <p className="text-xl font-black text-slate-900">{bookmarks.size}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const ProfileView = ({ user, onLogout, navigateTo }: { user: User | null, onLogout: () => void, navigateTo: (v: View, data?: any) => void }) => {
  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-12 animate-in fade-in duration-500">
      <header className="bg-[#0073BB] text-white p-12 -mx-6 -mt-12 mb-12">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#0073BB]">
            <GraduationCap size={48} />
          </div>
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">{user.name}</h2>
            <p className="text-blue-100 uppercase tracking-widest text-sm">{user.email}</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-slate-200 rounded-none">
          <CardHeader>
            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Tests Taken</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-black text-slate-900">{Object.keys(user.progress.testScores).length}</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 rounded-none">
          <CardHeader>
            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Flashcards</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-black text-slate-900">{user.personalFlashcards.length}</p>
          </CardContent>
        </Card>
        <Card className="border-slate-200 rounded-none">
          <CardHeader>
            <CardTitle className="text-sm font-black uppercase tracking-widest text-slate-400">Notebook Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-black text-slate-900">{user.notebook.length}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-slate-200 rounded-none cursor-pointer hover:border-[#0073BB] transition-all" onClick={() => navigateTo('all-pi')}>
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tighter flex items-center gap-3">
              <BookOpen className="text-[#0073BB]" />
              Master PI List
            </CardTitle>
            <CardDescription className="uppercase text-[10px] font-bold">View all 288 performance indicators</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-slate-200 rounded-none cursor-pointer hover:border-[#0073BB] transition-all" onClick={() => navigateTo('stats')}>
          <CardHeader>
            <CardTitle className="text-lg font-black uppercase tracking-tighter flex items-center gap-3">
              <BarChart3 className="text-[#0073BB]" />
              Detailed Analytics
            </CardTitle>
            <CardDescription className="uppercase text-[10px] font-bold">Track your mastery by instructional area</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="flex justify-center pt-8">
        <Button onClick={onLogout} variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 uppercase font-black tracking-widest px-12 py-6">
          Logout from Profile
        </Button>
      </div>
    </div>
  );
};

const StatsView = ({ user }: { user: User | null }) => {
  const allEvents = useMemo(() => {
    return DECA_DATA.flatMap(c => c.events.map(e => ({ ...e, clusterName: c.name, clusterId: c.id })));
  }, []);

  const primaryEvent = useMemo(() => {
    if (!user?.primaryEventId) return null;
    return allEvents.find(e => e.id === user.primaryEventId);
  }, [user?.primaryEventId, allEvents]);

  const piData = useMemo(() => {
    if (!user) return [];
    
    // Group by Instructional Area (prefix of PI code)
    const areas: Record<string, { name: string, total: number, count: number }> = {
      'MK': { name: 'Marketing', total: 0, count: 0 },
      'FI': { name: 'Finance', total: 0, count: 0 },
      'HT': { name: 'Hospitality', total: 0, count: 0 },
      'BL': { name: 'Business Law', total: 0, count: 0 },
      'EN': { name: 'Entrepreneurship', total: 0, count: 0 },
      'PFL': { name: 'Financial Literacy', total: 0, count: 0 },
      'BA': { name: 'Business Admin', total: 0, count: 0 }
    };

    Object.entries(user.progress.piMastery).forEach(([id, value]) => {
      const prefix = id.split(':')[0];
      if (areas[prefix]) {
        areas[prefix].total += value;
        areas[prefix].count += 1;
      }
    });

    return Object.entries(areas)
      .filter(([_, data]) => data.count > 0)
      .map(([_, data]) => ({
        name: data.name,
        value: Math.round(data.total / data.count)
      }));
  }, [user]);

  const COLORS = ['#0073BB', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899', '#6366f1'];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-8">
        <div>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Performance Analytics</h2>
          <p className="text-slate-500 mt-2 uppercase tracking-widest text-sm font-bold">Data-driven insights for your competitive journey.</p>
        </div>
        {primaryEvent && (
          <div className="bg-slate-50 p-4 border border-slate-200">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Focusing on</p>
            <p className="text-sm font-black text-[#0073BB] uppercase tracking-tight">{primaryEvent.name}</p>
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 gap-8">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Instructional Area Mastery</CardTitle>
            <CardDescription>Average performance across core DECA instructional areas.</CardDescription>
          </CardHeader>
          <CardContent className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={piData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} width={120} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" fill="#0073BB" radius={[0, 4, 4, 0]} barSize={40}>
                  {piData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-slate-200 border-red-100 bg-red-50/30">
          <CardHeader>
            <CardTitle className="text-red-700 flex items-center gap-2">
              <XCircle size={20} />
              Needs Work (Performance Indicators)
            </CardTitle>
            <CardDescription className="text-red-600/80">Focus on these specific indicators to boost your score.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {user && Object.entries(user.progress.piMastery)
              .filter(([_, val]) => val < 70)
              .sort((a, b) => a[1] - b[1])
              .slice(0, 3)
              .map(([id, val]) => (
                <div key={id} className="flex items-center justify-between p-3 bg-white rounded-xl border border-red-100 shadow-sm">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{id}</p>
                    <p className="text-xs text-slate-500">Performance Indicator</p>
                  </div>
                  <Badge variant="destructive">{val}% Mastery</Badge>
                </div>
              ))}
            {(!user || Object.keys(user.progress.piMastery).length === 0) && (
              <>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-red-100 shadow-sm">
                  <div>
                    <p className="text-sm font-bold text-slate-900">FI:001</p>
                    <p className="text-xs text-slate-500">Nature of financial needs</p>
                  </div>
                  <Badge variant="destructive">30% Mastery</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-red-100 shadow-sm">
                  <div>
                    <p className="text-sm font-bold text-slate-900">MK:002</p>
                    <p className="text-xs text-slate-500">Technology in marketing</p>
                  </div>
                  <Badge variant="destructive">45% Mastery</Badge>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        <Card className="border-slate-200 border-green-100 bg-green-50/30">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center gap-2">
              <CheckCircle2 size={20} />
              Mastered (Performance Indicators)
            </CardTitle>
            <CardDescription className="text-green-600/80">You are doing great in these specific areas!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {user && Object.entries(user.progress.piMastery)
              .filter(([_, val]) => val >= 70)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 3)
              .map(([id, val]) => (
                <div key={id} className="flex items-center justify-between p-3 bg-white rounded-xl border border-green-100 shadow-sm">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{id}</p>
                    <p className="text-xs text-slate-500">Performance Indicator</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">{val}% Mastery</Badge>
                </div>
              ))}
            {(!user || Object.keys(user.progress.piMastery).length === 0) && (
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-green-100 shadow-sm">
                <div>
                  <p className="text-sm font-bold text-slate-900">MK:001</p>
                  <p className="text-xs text-slate-500">Nature and scope of marketing</p>
                </div>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">90% Mastery</Badge>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const CalendarView = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="bg-[#0073BB] text-white p-12 -mx-6 -mt-8 mb-12">
        <h2 className="text-4xl font-black uppercase tracking-tighter">Event Calendar</h2>
        <p className="text-blue-100 mt-2 uppercase tracking-widest text-sm">Stay ahead of deadlines and competitions</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Card className="border-slate-200 rounded-none shadow-xl">
            <CardContent className="p-8">
              <Calendar mode="single" className="rounded-none border-none w-full" />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Upcoming Events</h3>
          <div className="space-y-6">
            {CALENDAR_EVENTS.map(event => (
              <div key={event.id} className="flex items-start gap-6 p-6 bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-none bg-blue-50 flex flex-col items-center justify-center text-[#0073BB] font-black text-xs uppercase">
                  <span>{event.date.toLocaleString('default', { month: 'short' })}</span>
                  <span className="text-2xl leading-none">{event.date.getDate()}</span>
                </div>
                <div>
                  <p className="text-lg font-black text-slate-900 uppercase tracking-tight">{event.title}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{event.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

const PerformanceIndicatorLearnView = ({ pi, onBack }: { pi: PerformanceIndicator, onBack: () => void }) => {
  const detail = PERFORMANCE_INDICATOR_DETAILS[pi.code];

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-12 animate-in fade-in duration-500">
      <header className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full">
          <ArrowLeft size={20} />
        </Button>
        <div>
          <Badge variant="outline" className="font-mono mb-2">{pi.code}</Badge>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">{pi.name}</h2>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-slate-200 rounded-none">
            <CardHeader className="bg-slate-50 border-b border-slate-100">
              <CardTitle className="text-sm uppercase font-black tracking-widest text-slate-400">Official Definition</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {detail?.definition || pi.description}
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 rounded-none">
            <CardHeader className="bg-slate-50 border-b border-slate-100">
              <CardTitle className="text-sm uppercase font-black tracking-widest text-slate-400">Key Mastery Points</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {(detail?.keyPoints || ["Understand the core concept", "Apply to business scenarios", "Explain the impact"]).map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-[#0073BB] flex items-center justify-center shrink-0 text-xs font-bold">
                      {i + 1}
                    </div>
                    <p className="text-slate-600">{point}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="border-[#0073BB] bg-blue-50/50 rounded-none">
            <CardHeader>
              <CardTitle className="text-sm uppercase font-black tracking-widest text-[#0073BB] flex items-center gap-2">
                <BrainCircuit size={16} />
                Roleplay Tips
              </CardTitle>
              <CardDescription className="text-blue-600/80">What to say to the judge</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {(detail?.roleplayTips || [
                "Connect this PI to the overall business goal.",
                "Use professional terminology.",
                "Provide a concrete example."
              ]).map((tip, i) => (
                <div key={i} className="p-3 bg-white border border-blue-100 rounded-none text-sm text-slate-700 italic">
                  "{tip}"
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const PerformanceIndicatorPDFView = ({ cluster, onBack }: { cluster: Cluster, onBack: () => void }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between print:hidden">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft size={18} />
          Back to Cluster
        </Button>
        <Button onClick={() => window.print()} className="bg-slate-900 text-white rounded-none">
          Print / Save as PDF
        </Button>
      </div>

      <div className="bg-white p-12 shadow-2xl border border-slate-100 print:shadow-none print:border-none">
        <header className="border-b-4 border-slate-900 pb-8 mb-12 text-center">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Performance Indicators</h1>
          <p className="text-xl font-bold text-slate-500 uppercase tracking-widest">{cluster.name}</p>
        </header>

        <div className="space-y-12">
          {cluster.performanceIndicators.map(pi => {
            const detail = PERFORMANCE_INDICATOR_DETAILS[pi.code];
            return (
              <div key={pi.id} className="space-y-4 break-inside-avoid">
                <div className="flex items-center gap-4 border-l-4 border-[#0073BB] pl-4">
                  <span className="font-mono font-bold text-[#0073BB]">{pi.code}</span>
                  <h3 className="text-xl font-black uppercase tracking-tight">{pi.name}</h3>
                </div>
                <div className="pl-8 space-y-4">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Definition</p>
                    <p className="text-slate-700 leading-relaxed">{detail?.definition || pi.description}</p>
                  </div>
                  {detail?.keyPoints && (
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Key Points</p>
                      <ul className="list-disc pl-5 text-slate-600 space-y-1">
                        {detail.keyPoints.map((kp, i) => <li key={i}>{kp}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <footer className="mt-24 pt-8 border-t border-slate-100 text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em]">
          Weddington DECA Study Portal • {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

const NotebookView = ({ notebook, onRemove }: { notebook: User['notebook'], onRemove: (id: string) => void }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="bg-slate-900 text-white p-12 -mx-6 -mt-8 mb-12">
        <h2 className="text-4xl font-black uppercase tracking-tighter">Digital Notebook</h2>
        <p className="text-slate-400 mt-2 uppercase tracking-widest text-sm">Your personal collection of DECA insights and concepts</p>
      </header>

      {notebook.length === 0 ? (
        <div className="text-center py-24 border-2 border-dashed border-slate-200">
          <BookOpen size={48} className="mx-auto text-slate-200 mb-4" />
          <p className="text-slate-400 font-bold uppercase text-xs">Your notebook is empty. Add notes from practice tests!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notebook.map(note => (
            <Card key={note.id} className="border-slate-200 rounded-none hover:shadow-lg transition-all">
              <CardHeader className="border-b border-slate-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-black uppercase tracking-tight">{note.title}</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => onRemove(note.id)} className="text-red-400 hover:text-red-600">
                    <X size={18} />
                  </Button>
                </div>
                <CardDescription className="text-[10px] font-bold uppercase text-slate-400">{note.date}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{note.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

const PersonalFlashcardsView = ({ flashcards, onRemove, onToggleStar }: { 
  flashcards: User['personalFlashcards'], 
  onRemove: (id: string) => void,
  onToggleStar?: (id: string) => void
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filter, setFilter] = useState<'all' | 'starred'>('all');

  const filteredCards = filter === 'all' ? flashcards : flashcards.filter(f => f.isStarred);

  if (flashcards.length === 0) {
    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        <header className="bg-[#0073BB] text-white p-12 -mx-6 -mt-8 mb-12">
          <h2 className="text-4xl font-black uppercase tracking-tighter">My Flashcards</h2>
          <p className="text-blue-100 mt-2 uppercase tracking-widest text-sm">Personalized study sets from your practice sessions</p>
        </header>
        <div className="text-center py-24 border-2 border-dashed border-slate-200">
          <Zap size={48} className="mx-auto text-slate-200 mb-4" />
          <p className="text-slate-400 font-bold uppercase text-xs">No personal flashcards yet. Create them from practice tests!</p>
        </div>
      </div>
    );
  }

  if (filteredCards.length === 0 && filter === 'starred') {
    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        <header className="bg-[#0073BB] text-white p-12 -mx-6 -mt-8 mb-12">
          <h2 className="text-4xl font-black uppercase tracking-tighter">My Flashcards</h2>
          <div className="flex gap-4 mt-4">
            <Button variant={filter === 'all' ? 'secondary' : 'ghost'} size="sm" onClick={() => setFilter('all')} className="uppercase font-bold text-[10px]">All Cards</Button>
            <Button variant={filter === 'starred' ? 'secondary' : 'ghost'} size="sm" onClick={() => setFilter('starred')} className="uppercase font-bold text-[10px]">Starred Only</Button>
          </div>
        </header>
        <div className="text-center py-24 border-2 border-dashed border-slate-200">
          <Trophy size={48} className="mx-auto text-slate-200 mb-4" />
          <p className="text-slate-400 font-bold uppercase text-xs">No starred flashcards yet. Star cards to see them here!</p>
        </div>
      </div>
    );
  }

  const current = filteredCards[currentIndex >= filteredCards.length ? 0 : currentIndex];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="bg-[#0073BB] text-white p-12 -mx-6 -mt-8 mb-12">
        <h2 className="text-4xl font-black uppercase tracking-tighter">My Flashcards</h2>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-4">
            <Button variant={filter === 'all' ? 'secondary' : 'ghost'} size="sm" onClick={() => { setFilter('all'); setCurrentIndex(0); }} className="uppercase font-bold text-[10px]">All Cards ({flashcards.length})</Button>
            <Button variant={filter === 'starred' ? 'secondary' : 'ghost'} size="sm" onClick={() => { setFilter('starred'); setCurrentIndex(0); }} className="uppercase font-bold text-[10px]">Starred Only ({flashcards.filter(f => f.isStarred).length})</Button>
          </div>
          <p className="text-blue-100 uppercase tracking-widest text-sm">Reviewing {filteredCards.length} personalized terms</p>
        </div>
      </header>

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Card {currentIndex + 1} of {filteredCards.length}</p>
            {onToggleStar && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => onToggleStar(current.id)}
                className={current.isStarred ? 'text-yellow-500' : 'text-slate-300'}
              >
                <Trophy size={18} fill={current.isStarred ? 'currentColor' : 'none'} />
              </Button>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={() => onRemove(current.id)} className="text-red-500 uppercase font-bold text-[10px]">Delete Card</Button>
        </div>

        <div 
          className="relative h-80 w-full perspective-1000 cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <motion.div
            className="w-full h-full transition-all duration-500 preserve-3d"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
          >
            <Card className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center p-12 text-center border-4 border-slate-100 rounded-none ${isFlipped ? 'invisible' : 'visible'}`}>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{current.term}</h3>
              <p className="mt-8 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Click to reveal</p>
            </Card>

            <Card className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center p-12 text-center border-4 border-[#0073BB] bg-blue-50 rounded-none ${isFlipped ? 'visible' : 'invisible'}`} style={{ transform: 'rotateY(180deg)' }}>
              <div className="text-left w-full overflow-y-auto max-h-full scrollbar-hide">
                <p className="text-lg font-bold text-slate-800 leading-relaxed whitespace-pre-wrap uppercase tracking-tight">{current.definition}</p>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button 
            variant="outline" 
            className="px-12 py-6 border-2 border-slate-200 uppercase font-black text-xs tracking-widest rounded-none"
            disabled={currentIndex === 0}
            onClick={() => { setCurrentIndex(prev => prev - 1); setIsFlipped(false); }}
          >
            Previous
          </Button>
          <Button 
            className="px-12 py-6 bg-slate-900 hover:bg-black text-white uppercase font-black text-xs tracking-widest rounded-none"
            disabled={currentIndex === flashcards.length - 1}
            onClick={() => { setCurrentIndex(prev => prev + 1); setIsFlipped(false); }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

const AllPerformanceIndicatorsView = ({ onBack, onLearnPI, onStartFlashcards, user }: { 
  onBack: () => void, 
  onLearnPI: (pi: PerformanceIndicator) => void,
  onStartFlashcards: (flashcards: any[]) => void,
  user: User | null
}) => {
  const allPIs = useMemo(() => {
    return DECA_DATA.flatMap(cluster => cluster.performanceIndicators);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCluster, setSelectedCluster] = useState<string>('all');

  const filteredPIs = useMemo(() => {
    return allPIs.filter(pi => {
      const matchesSearch = pi.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            pi.code.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCluster = selectedCluster === 'all' || pi.cluster === selectedCluster;
      return matchesSearch && matchesCluster;
    });
  }, [allPIs, searchQuery, selectedCluster]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full">
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">All 288 Performance Indicators</h2>
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">The complete DECA competitive knowledge base</p>
          </div>
        </div>
        <Button 
          onClick={() => {
            const flashcards = filteredPIs.map(pi => {
              const details = PERFORMANCE_INDICATOR_DETAILS[pi.code];
              return {
                id: pi.id,
                term: `${pi.code} (SP) - ${pi.name}`,
                definition: details 
                  ? `Definition: ${details.definition}\nKey Points:\n${details.keyPoints.map(kp => ` - ${kp}`).join('\n')}` 
                  : `Definition: ${pi.description}\nKey Points:\n - Understand the core concept\n - Apply to business scenarios\n - Explain the impact`,
                isStarred: user?.personalFlashcards.find(f => f.id === pi.id)?.isStarred || false
              };
            });
            onStartFlashcards(flashcards);
          }}
          className="bg-[#0073BB] hover:bg-[#005a92] text-white uppercase font-black text-xs tracking-widest px-8 py-6 rounded-none shadow-lg"
        >
          <Zap size={16} className="mr-2" />
          Study {filteredPIs.length} PIs as Flashcards
        </Button>
      </header>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or code (e.g. BL:001)..." 
            className="w-full pl-10 pr-4 py-3 border border-slate-200 focus:border-[#0073BB] outline-none transition-all uppercase text-xs font-bold"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select 
          className="p-3 border border-slate-200 outline-none uppercase text-xs font-bold bg-white"
          value={selectedCluster}
          onChange={(e) => setSelectedCluster(e.target.value)}
        >
          <option value="all">All Clusters</option>
          {DECA_DATA.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPIs.map(pi => (
          <Card key={pi.id} className="border-slate-200 hover:border-blue-200 transition-all rounded-none">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="font-mono">{pi.code}</Badge>
                <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none">{pi.cluster}</Badge>
              </div>
              <CardTitle className="text-lg mt-2 uppercase font-bold">{pi.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 line-clamp-2 mb-4">{pi.description}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full uppercase font-bold text-[10px] tracking-widest rounded-none"
                onClick={() => onLearnPI(pi)}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {filteredPIs.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400 font-bold uppercase">No performance indicators found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<View>('home');
  const [history, setHistory] = useState<{ view: View, data?: any }[]>([{ view: 'home' }]);
  const [selectedCluster, setSelectedCluster] = useState<Cluster | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedTest, setSelectedTest] = useState<any>(null);
  const [selectedTestLevel, setSelectedTestLevel] = useState<'district' | 'icdc' | null>(null);
  const [selectedFlashcards, setSelectedFlashcards] = useState<any[]>([]);
  const [selectedPI, setSelectedPI] = useState<PerformanceIndicator | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('deca_user');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure new fields exist
      return {
        ...parsed,
        notebook: parsed.notebook || [],
        personalFlashcards: parsed.personalFlashcards || []
      };
    }
    return null;
  });

  useEffect(() => {
    if (user) {
      setView('profile');
      setHistory([{ view: 'profile' }]);
    }
  }, []);

  const navigateTo = (newView: View, data?: any) => {
    setHistory(prev => [...prev, { view: newView, data }]);
    setView(newView);
    
    // Update relevant state based on data
    if (data) {
      if (data.cluster) setSelectedCluster(data.cluster);
      if (data.event) setSelectedEvent(data.event);
      if (data.test) setSelectedTest(data.test);
      if (data.pi) setSelectedPI(data.pi);
      if (data.flashcards) setSelectedFlashcards(data.flashcards);
    }
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const previousState = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setView(previousState.view);
      
      // Restore relevant state from history data
      if (previousState.data) {
        if (previousState.data.cluster) setSelectedCluster(previousState.data.cluster);
        if (previousState.data.event) setSelectedEvent(previousState.data.event);
        if (previousState.data.test) setSelectedTest(previousState.data.test);
        if (previousState.data.pi) setSelectedPI(previousState.data.pi);
        if (previousState.data.flashcards) setSelectedFlashcards(previousState.data.flashcards);
      }
    } else {
      navigateTo('profile');
    }
  };

  const handleAuth = (u: User) => {
    setUser(u);
    navigateTo('profile');
  };

  const handleLogout = () => {
    localStorage.removeItem('deca_user');
    setUser(null);
    navigateTo('home');
  };

  const navigateToCluster = (cluster: Cluster) => {
    setSelectedCluster(cluster);
    navigateTo('cluster');
  };

  const navigateToEvent = (event: Event) => {
    setSelectedEvent(event);
    navigateTo('event');
  };

  const startTest = (test: any, level: 'district' | 'icdc') => {
    setSelectedTest(test);
    setSelectedTestLevel(level);
    navigateTo('test');
  };

  const startFlashcards = (flashcards: any[]) => {
    setSelectedFlashcards(flashcards);
    navigateTo('flashcards');
  };

  const finishTest = (results: any) => {
    if (user) {
      const updatedUser = { ...user };
      const testId = selectedTest.id;
      if (!updatedUser.progress.testScores[testId]) {
        updatedUser.progress.testScores[testId] = [];
      }
      updatedUser.progress.testScores[testId].push(results.score);
      setUser(updatedUser);
      localStorage.setItem('deca_user', JSON.stringify(updatedUser));
    }
    navigateTo('stats');
  };

  const addToNotebook = (title: string, content: string) => {
    if (!user) return;
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content,
      date: new Date().toLocaleDateString()
    };
    const updatedUser = { ...user, notebook: [newNote, ...user.notebook] };
    setUser(updatedUser);
    localStorage.setItem('deca_user', JSON.stringify(updatedUser));
  };

  const removeNote = (id: string) => {
    if (!user) return;
    const updatedUser = { ...user, notebook: user.notebook.filter(n => n.id !== id) };
    setUser(updatedUser);
    localStorage.setItem('deca_user', JSON.stringify(updatedUser));
  };

  const addFlashcard = (term: string, definition: string, id?: string) => {
    if (!user) return;
    const cardId = id || Math.random().toString(36).substr(2, 9);
    const newCard = {
      id: cardId,
      term,
      definition,
      isStarred: true
    };
    const updatedUser = { ...user, personalFlashcards: [newCard, ...user.personalFlashcards] };
    setUser(updatedUser);
    localStorage.setItem('deca_user', JSON.stringify(updatedUser));
  };

  const removeFlashcard = (id: string) => {
    if (!user) return;
    const updatedUser = { ...user, personalFlashcards: user.personalFlashcards.filter(f => f.id !== id) };
    setUser(updatedUser);
    localStorage.setItem('deca_user', JSON.stringify(updatedUser));
  };

  const renderView = () => {
    switch (view) {
      case 'home':
        return <LandingPage />;
      case 'login':
        return <AuthView type="login" onAuth={handleAuth} />;
      case 'register':
        return <AuthView type="register" onAuth={handleAuth} />;
      case 'cluster':
        return selectedCluster ? (
          <ClusterView 
            user={user}
            cluster={selectedCluster} 
            onBack={goBack} 
            onSelectEvent={navigateToEvent}
            onStartTest={startTest}
            onStartFlashcards={startFlashcards}
            onLearnPI={(pi) => { setSelectedPI(pi); navigateTo('pi-learn'); }}
            onViewPIPDF={() => {
              if (selectedCluster?.piPdfUrl) {
                window.open(selectedCluster.piPdfUrl, '_blank');
              } else {
                navigateTo('pi-pdf');
              }
            }}
            onViewTestPDF={(test) => { 
              // Open the PDF URL in a new tab if it exists, otherwise use a default or the provided one
              const pdfUrl = test.pdfUrl || 'https://www.deca.org/wp-content/uploads/2021/07/BA_Core_Exam_2021.pdf';
              window.open(pdfUrl, '_blank');
            }}
          />
        ) : null;
      case 'pi-learn':
        return selectedPI ? <PerformanceIndicatorLearnView pi={selectedPI} onBack={goBack} /> : null;
      case 'pi-pdf':
        return selectedCluster ? <PerformanceIndicatorPDFView cluster={selectedCluster} onBack={goBack} /> : null;
      case 'event':
        return selectedEvent ? (
          <EventView 
            event={selectedEvent} 
            onBack={goBack} 
            onStartFlashcards={startFlashcards}
          />
        ) : null;
      case 'test':
        return selectedTest && selectedTestLevel ? (
          <PracticeTestView 
            test={selectedTest} 
            level={selectedTestLevel}
            onBack={goBack} 
            onFinish={finishTest}
            onAddToNotebook={addToNotebook}
            onAddFlashcard={addFlashcard}
            onRemoveFlashcard={removeFlashcard}
            user={user}
          />
        ) : null;
      case 'test-pdf':
        return null;
      case 'flashcards':
        return (
          <FlashcardView 
            flashcards={selectedFlashcards} 
            onBack={goBack} 
            onToggleStar={(id) => {
              if (!user) return;
              const card = selectedFlashcards.find(f => f.id === id);
              if (!card) return;
              
              const isAlreadyStarred = user.personalFlashcards.some(f => f.id === id);
              let newPersonalFlashcards;
              
              if (isAlreadyStarred) {
                newPersonalFlashcards = user.personalFlashcards.filter(f => f.id !== id);
              } else {
                newPersonalFlashcards = [...user.personalFlashcards, { ...card, isStarred: true }];
              }
              
              const newUser = { ...user, personalFlashcards: newPersonalFlashcards };
              setUser(newUser);
              localStorage.setItem('deca_user', JSON.stringify(newUser));
              
              // Update local selectedFlashcards to reflect star state
              setSelectedFlashcards(prev => prev.map(f => f.id === id ? { ...f, isStarred: !isAlreadyStarred } : f));
            }}
          />
        );
      case 'personal-flashcards':
        return (
          <PersonalFlashcardsView 
            flashcards={user?.personalFlashcards || []} 
            onRemove={removeFlashcard} 
            onToggleStar={(id) => {
              if (!user) return;
              const isAlreadyStarred = user.personalFlashcards.find(f => f.id === id)?.isStarred;
              const newPersonalFlashcards = user.personalFlashcards.map(f => 
                f.id === id ? { ...f, isStarred: !isAlreadyStarred } : f
              );
              const newUser = { ...user, personalFlashcards: newPersonalFlashcards };
              setUser(newUser);
              localStorage.setItem('deca_user', JSON.stringify(newUser));
            }}
          />
        );
      case 'notebook':
        return <NotebookView notebook={user?.notebook || []} onRemove={removeNote} />;
      case 'all-pi':
        return <AllPerformanceIndicatorsView 
          user={user}
          onBack={goBack} 
          onLearnPI={(pi) => { setSelectedPI(pi); navigateTo('pi-learn'); }} 
          onStartFlashcards={startFlashcards}
        />;
      case 'stats':
        return <StatsView user={user} />;
      case 'profile':
        return <ProfileView user={user} onLogout={handleLogout} navigateTo={navigateTo} />;
      case 'study-buddy':
        return <StudyBuddyView />;
      case 'calendar':
        return <CalendarView />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar user={user} setView={navigateTo} onLogout={handleLogout} onSelectCluster={navigateToCluster} />
      
      <div className="flex">
        {user && view === 'profile' && (
          <>
            <Sidebar 
              currentView={view} 
              setView={navigateTo} 
              isOpen={sidebarOpen} 
              toggle={() => setSidebarOpen(!sidebarOpen)} 
              selectedCluster={selectedCluster}
            />
            <div className="md:hidden fixed bottom-6 right-6 z-50">
              <Button 
                variant="default" 
                size="icon" 
                onClick={() => setSidebarOpen(true)}
                className="w-14 h-14 rounded-full shadow-xl bg-[#0073BB] hover:bg-[#005a92]"
              >
                <Menu size={24} />
              </Button>
            </div>
          </>
        )}

        <main className={`flex-1 ${view === 'home' || view === 'login' || view === 'register' ? '' : 'p-6 md:p-10'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={view + (selectedCluster?.id || '') + (selectedEvent?.id || '')}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {view === 'home' && (
        <footer className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Trophy size={24} className="text-[#0073BB]" />
                <span className="text-xl font-black uppercase tracking-tighter">WeddingtonDECA</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The premier study platform for Weddington DECA members. Empowering the next generation of business leaders.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Resources</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><button onClick={() => setView('profile')} className="hover:text-white transition-colors">My Profile</button></li>
                <li><button onClick={() => setView('stats')} className="hover:text-white transition-colors">Performance Tracking</button></li>
                <li><button onClick={() => setView('study-buddy')} className="hover:text-white transition-colors">Study Buddy</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Support</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 uppercase tracking-widest">
            © 2026 Weddington DECA. Not affiliated with DECA Inc.
          </div>
        </footer>
      )}
    </div>
  );
}
