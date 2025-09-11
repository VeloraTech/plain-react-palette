import { FaFileAlt, FaFileExcel, FaFilePdf } from "react-icons/fa";

const DocumentsSection = () => {
  const documents = [
    { name: "Admission Letter", icon: FaFileAlt, color: "text-blue-500" },
    { name: "Fee Receipt", icon: FaFileExcel, color: "text-green-500" },
    { name: "Course Handout", icon: FaFilePdf, color: "text-blue-500" },
  ];

  return (
    <div className="bg-card rounded-lg border border-card-border shadow-card p-6">
      <h2 className="text-xl font-semibold text-foreground mb-6">Documents</h2>
      
      <div className="space-y-4">
        {documents.map((doc, index) => {
          const IconComponent = doc.icon;
          return (
            <div key={index} className="flex items-center space-x-3 p-3 hover:bg-muted/20 rounded-lg transition-colors cursor-pointer">
              <IconComponent className={`h-5 w-5 ${doc.color}`} />
              <span className="text-foreground font-medium">{doc.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DocumentsSection;