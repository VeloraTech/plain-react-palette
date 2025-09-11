import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaGraduationCap, FaHome, FaStickyNote, FaUsers, FaCheck, FaCalendar, FaSearch, FaBars, FaTimes } from "react-icons/fa";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigation = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "Memos", path: "/memos", icon: FaStickyNote },
    { name: "Students", path: "/students", icon: FaUsers },
    { name: "Approvals", path: "/approvals", icon: FaCheck },
    { name: "Schedule", path: "/schedule", icon: FaCalendar },
  ];

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  
  // Generate calendar days for July 2023 (as shown in the image)
  const generateCalendarDays = () => {
    const daysInMonth = 31; // July has 31 days
    const firstDayOfWeek = 6; // July 1, 2023 was a Saturday (0=Sun, 6=Sat)
    const days = [];
    
    // Add empty cells for days before the first day
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const SidebarContent = () => (
    <>
      <div className="p-4 sm:p-6 border-b border-sidebar-accent">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <Link to="/" className="flex items-center space-x-2">
            <FaGraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-base sm:text-lg font-bold">STUDENT PORTAL</span>
          </Link>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent hidden sm:flex">
              <FaSearch className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-sidebar-foreground hover:bg-sidebar-accent lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaTimes className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <nav className="space-y-2">
          {navigation.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.name} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  variant={isActive ? "sidebar" : "ghost"} 
                  className={`w-full justify-start ${
                    isActive ? 
                      "bg-sidebar-accent text-sidebar-accent-foreground" : 
                      "text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground"
                  }`}
                >
                  <IconComponent className="mr-3 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 sm:p-6 border-b border-sidebar-accent">
        <h3 className="text-sm font-semibold mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <Button variant="success" size="sm" className="w-full">
            Post Memo
          </Button>
          <Button variant="secondary" size="sm" className="w-full">
            Approve Request
          </Button>
          <Button variant="secondary" size="sm" className="w-full">
            Upload Document
          </Button>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex-1 overflow-auto">
        <h3 className="text-sm font-semibold mb-4">Schedule</h3>
        
        <div className="mb-4">
          <h4 className="text-lg font-medium mb-2">July 2023</h4>
          
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map(day => (
              <div key={day} className="text-xs text-sidebar-muted text-center p-1 font-medium">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => (
              <div key={index} className="aspect-square flex items-center justify-center">
                {day && (
                  <button 
                    className={`w-full h-full text-sm rounded-lg hover:bg-sidebar-accent transition-colors
                      ${day === 11 ? 'bg-success text-success-foreground font-semibold' : 
                        day === 31 ? 'text-sidebar-muted' : 'text-sidebar-foreground hover:text-sidebar-accent-foreground'}`}
                  >
                    {day}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <div className="p-3 bg-sidebar-accent rounded-lg">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <div className="flex-1">
                <h5 className="font-medium text-sm">Meeting with HOD</h5>
                <p className="text-xs text-sidebar-muted mt-1">Student | John Doe</p>
                <p className="text-xs text-sidebar-muted">10:00 AM - 11:00 AM</p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-sidebar-accent rounded-lg">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <div className="flex-1">
                <h5 className="font-medium text-sm">Department / Computer Science</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`bg-sidebar text-sidebar-foreground w-80 flex-col ${className || ''}`}>
        <SidebarContent />
      </aside>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-sidebar text-sidebar-foreground"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FaBars className="h-4 w-4" />
      </Button>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <aside className="relative bg-sidebar text-sidebar-foreground w-80 h-full flex flex-col">
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;