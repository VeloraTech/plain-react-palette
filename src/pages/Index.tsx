import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import WelcomeSection from "@/components/sections/WelcomeSection";
import CourseRegistration from "@/components/sections/CourseRegistration";
import FeesSection from "@/components/sections/FeesSection";
import DocumentsSection from "@/components/sections/DocumentsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <WelcomeSection />
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <CourseRegistration />
            </div>
            
            <div className="space-y-6">
              <FeesSection />
              <DocumentsSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
