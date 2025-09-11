import { FaUserCircle } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome, David</h1>
          <p className="text-muted-foreground">Current Semester: Fall 2023</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
            <FaUserCircle className="w-8 h-8 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;