import { Button } from "@/components/ui/button";

const CourseRegistration = () => {
  const courses = [
    { name: "Computer Science I", registration: "Not Registered", waitlist: "Not Registered" },
    { name: "Calculus I", registration: "Not Registered", waitlist: "Not Registered" },
    { name: "English Literature", registration: "Not Registered", waitlist: "Not Registered" },
    { name: "Physics I", registration: "Registered", waitlist: "Register", isRegistered: true },
  ];

  return (
    <div className="bg-card rounded-lg border border-card-border shadow-card p-6 mb-6">
      <h2 className="text-xl font-semibold text-foreground mb-6">Course Registration</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-card-border">
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Course</th>
              <th className="text-center py-3 px-4 font-medium text-muted-foreground">Registration</th>
              <th className="text-center py-3 px-4 font-medium text-muted-foreground">Waitlist</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-b border-card-border hover:bg-muted/20">
                <td className="py-4 px-4">
                  <span className="font-medium text-foreground">{course.name}</span>
                </td>
                <td className="py-4 px-4 text-center">
                  {course.isRegistered ? (
                    <span className="px-3 py-1 bg-success-light text-success rounded-full text-sm font-medium">
                      Registered
                    </span>
                  ) : (
                    <span className="text-muted-foreground text-sm">{course.registration}</span>
                  )}
                </td>
                <td className="py-4 px-4 text-center">
                  {course.waitlist === "Register" ? (
                    <Button variant="success" size="sm">
                      Register
                    </Button>
                  ) : (
                    <span className="text-muted-foreground text-sm">{course.waitlist}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseRegistration;