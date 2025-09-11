import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { FaUser, FaEdit, FaGraduationCap, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendar, FaBirthdayCake } from "react-icons/fa";

const Profile = () => {
  const studentInfo = {
    name: "David Johnson",
    studentId: "STU2023001",
    email: "david.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1999-03-15",
    address: "123 Student Ave, University City, UC 12345",
    enrollmentDate: "2023-08-15",
    program: "Bachelor of Computer Science",
    year: "Freshman",
    gpa: "3.85",
    advisor: "Dr. Sarah Johnson"
  };

  const academicHistory = [
    { semester: "Fall 2023", courses: 5, credits: 15, gpa: "3.85", status: "Current" },
    { semester: "Spring 2023", courses: 4, credits: 12, gpa: "3.90", status: "Completed" },
  ];

  const emergencyContacts = [
    { name: "Mary Johnson", relationship: "Mother", phone: "+1 (555) 987-6543" },
    { name: "Robert Johnson", relationship: "Father", phone: "+1 (555) 987-6544" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar className="hidden lg:flex" />
        
        <main className="flex-1 p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Student Profile</h1>
            <p className="text-muted-foreground">Manage your personal and academic information</p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {/* Profile Overview */}
            <div className="xl:col-span-2 space-y-6">
              <div className="bg-card rounded-lg border border-card-border shadow-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <FaUser className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{studentInfo.name}</h2>
                      <p className="text-muted-foreground">Student ID: {studentInfo.studentId}</p>
                    </div>
                  </div>
                  <Button variant="outline">
                    <FaEdit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <FaEnvelope className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium text-foreground break-all">{studentInfo.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaPhone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium text-foreground">{studentInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaBirthdayCake className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Date of Birth</p>
                        <p className="font-medium text-foreground">{studentInfo.dateOfBirth}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <FaMapMarkerAlt className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="font-medium text-foreground">{studentInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FaCalendar className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Enrollment Date</p>
                        <p className="font-medium text-foreground">{studentInfo.enrollmentDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="bg-card rounded-lg border border-card-border shadow-card p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Academic Information</h3>
                
                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  <div className="flex items-center space-x-3">
                    <FaGraduationCap className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Program</p>
                      <p className="font-medium text-foreground">{studentInfo.program}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Academic Year</p>
                    <p className="font-medium text-foreground">{studentInfo.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Current GPA</p>
                    <p className="font-medium text-success text-lg">{studentInfo.gpa}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Academic Advisor</p>
                    <p className="font-medium text-foreground">{studentInfo.advisor}</p>
                  </div>
                </div>

                <h4 className="font-semibold text-foreground mb-4">Academic History</h4>
                <div className="space-y-3">
                  {academicHistory.map((semester, index) => (
                    <div key={index} className="p-4 border border-card-border rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="mb-2 sm:mb-0">
                          <h5 className="font-medium text-foreground">{semester.semester}</h5>
                          <p className="text-sm text-muted-foreground">{semester.courses} courses • {semester.credits} credits</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="font-medium text-foreground">GPA: {semester.gpa}</p>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                            semester.status === 'Current' ? 'bg-success-light text-success' : 'bg-muted text-muted-foreground'
                          }`}>
                            {semester.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg border border-card-border shadow-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground">Emergency Contacts</h3>
                  <Button variant="outline" size="sm">
                    <FaEdit className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="p-4 border border-card-border rounded-lg">
                      <h4 className="font-medium text-foreground">{contact.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{contact.relationship}</p>
                      <div className="flex items-center space-x-2">
                        <FaPhone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">{contact.phone}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full mt-4">
                  Add Emergency Contact
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="bg-card rounded-lg border border-card-border shadow-card p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Quick Actions</h3>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Update Profile Photo
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Privacy Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Download Transcript
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;