import { Button } from "@/components/ui/button";
import { FaGraduationCap, FaHome, FaStickyNote, FaUsers, FaCheck, FaCalendar, FaSearch, FaBars } from "react-icons/fa";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
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

  return (
    <aside className={`bg-sidebar text-sidebar-foreground w-80 flex flex-col ${className}`}>
      <div className="p-6 border-b border-sidebar-accent">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <FaGraduationCap className="h-6 w-6" />
            <span className="text-lg font-bold">STUDENT PORTAL</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent">
              <FaSearch className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent">
              <FaBars className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <nav className="space-y-2">
          <Button variant="sidebar" className="w-full bg-sidebar-accent">
            <FaHome className="mr-3 h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <FaStickyNote className="mr-3 h-4 w-4" />
            Memos
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <FaUsers className="mr-3 h-4 w-4" />
            Students
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <FaCheck className="mr-3 h-4 w-4" />
            Approvals
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground">
            <FaCalendar className="mr-3 h-4 w-4" />
            Schedule
          </Button>
        </nav>
      </div>

      <div className="p-6 border-b border-sidebar-accent">
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

      <div className="p-6 flex-1">
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
    </aside>
  );
};

export default Sidebar;