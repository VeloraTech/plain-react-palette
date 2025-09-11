import { Button } from "@/components/ui/button";
import { FaGraduationCap, FaSearch, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-card border-b border-card-border shadow-card">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <FaGraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">STUDENT PORTAL</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-primary font-medium">Home</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">Courses</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">Fees</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">Documents</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">Profile</Button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <FaSearch className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <FaBars className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;