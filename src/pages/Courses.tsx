import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { FaBook, FaClock, FaUser, FaCalendar } from "react-icons/fa";

const Courses = () => {
  const courses = [
    {
      id: 1,
      name: "Computer Science I",
      code: "CS101",
      instructor: "Dr. Sarah Johnson",
      credits: 3,
      schedule: "Mon, Wed, Fri 10:00 AM",
      status: "In Progress",
      progress: 75
    },
    {
      id: 2,
      name: "Calculus I", 
      code: "MATH101",
      instructor: "Prof. Michael Chen",
      credits: 4,
      schedule: "Tue, Thu 2:00 PM",
      status: "In Progress", 
      progress: 60
    },
    {
      id: 3,
      name: "Physics I",
      code: "PHYS101", 
      instructor: "Dr. Emily Rodriguez",
      credits: 3,
      schedule: "Mon, Wed 1:00 PM",
      status: "Registered",
      progress: 85
    },
    {
      id: 4,
      name: "English Literature",
      code: "ENG201",
      instructor: "Prof. James Wilson",
      credits: 3,
      schedule: "Tue, Thu 11:00 AM",
      status: "Available",
      progress: 0
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar className="hidden lg:flex" />
        
        <main className="flex-1 p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">My Courses</h1>
            <p className="text-muted-foreground">Manage your course enrollment and track progress</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <div key={course.id} className="bg-card rounded-lg border border-card-border shadow-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FaBook className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{course.name}</h3>
                      <p className="text-sm text-muted-foreground">{course.code}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    course.status === 'In Progress' ? 'bg-success-light text-success' :
                    course.status === 'Registered' ? 'bg-success-light text-success' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {course.status}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <FaUser className="h-4 w-4" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <FaClock className="h-4 w-4" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <FaCalendar className="h-4 w-4" />
                    <span>{course.credits} Credits</span>
                  </div>
                </div>

                {course.status !== 'Available' && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-foreground">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-success h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <Button 
                  variant={course.status === 'Available' ? 'success' : 'secondary'} 
                  className="w-full"
                >
                  {course.status === 'Available' ? 'Enroll' : 'View Details'}
                </Button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Courses;