import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { FaGraduationCap, FaSearch, FaBars } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  
  const navigation = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Fees", path: "/fees" },
    { name: "Documents", path: "/documents" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="bg-card border-b border-card-border shadow-card">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <FaGraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-lg sm:text-xl font-bold text-foreground">STUDENT PORTAL</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link key={item.name} to={item.path}>
                <Button 
                  variant="ghost" 
                  className={location.pathname === item.path ? 
                    "text-primary font-medium" : 
                    "text-muted-foreground hover:text-foreground"
                  }
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
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