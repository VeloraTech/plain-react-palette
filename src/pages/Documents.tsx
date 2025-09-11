import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { FaFileAlt, FaFilePdf, FaFileExcel, FaFileWord, FaDownload, FaEye, FaUpload, FaSearch } from "react-icons/fa";

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: "Admission Letter",
      type: "pdf",
      size: "245 KB",
      uploadDate: "2023-07-15",
      category: "Admission",
      status: "Verified"
    },
    {
      id: 2, 
      name: "Fee Receipt - Fall 2023",
      type: "pdf",
      size: "156 KB",
      uploadDate: "2023-08-15",
      category: "Financial",
      status: "Verified"
    },
    {
      id: 3,
      name: "Course Registration Form",
      type: "pdf", 
      size: "189 KB",
      uploadDate: "2023-08-20",
      category: "Academic",
      status: "Processing"
    },
    {
      id: 4,
      name: "Transcript Request",
      type: "word",
      size: "87 KB", 
      uploadDate: "2023-08-25",
      category: "Academic",
      status: "Pending"
    },
    {
      id: 5,
      name: "Health Insurance Form",
      type: "pdf",
      size: "203 KB",
      uploadDate: "2023-07-30",
      category: "Health",
      status: "Verified"
    },
    {
      id: 6,
      name: "Course Schedule - Fall 2023",
      type: "excel",
      size: "145 KB",
      uploadDate: "2023-08-22",
      category: "Academic", 
      status: "Verified"
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FaFilePdf className="h-5 w-5 text-red-500" />;
      case 'word':
        return <FaFileWord className="h-5 w-5 text-blue-500" />;
      case 'excel':
        return <FaFileExcel className="h-5 w-5 text-green-500" />;
      default:
        return <FaFileAlt className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const categories = ["All", "Admission", "Academic", "Financial", "Health"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar className="hidden lg:flex" />
        
        <main className="flex-1 p-4 lg:p-8">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Documents</h1>
                <p className="text-muted-foreground">Manage and access your academic documents</p>
              </div>
              <Button variant="success" className="mt-4 sm:mt-0">
                <FaUpload className="mr-2 h-4 w-4" />
                Upload Document
              </Button>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="w-full pl-10 pr-4 py-2 border border-card-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button 
                    key={category}
                    variant={category === "All" ? "success" : "outline"}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid gap-4 sm:gap-6">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-card rounded-lg border border-card-border shadow-card p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0">
                      {getFileIcon(doc.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 truncate">{doc.name}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.uploadDate}</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 bg-muted rounded-full text-xs">
                          {doc.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      doc.status === 'Verified' ? 'bg-success-light text-success' :
                      doc.status === 'Processing' ? 'bg-warning/10 text-warning' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {doc.status}
                    </span>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FaEye className="h-4 w-4" />
                        <span className="sr-only sm:not-sr-only sm:ml-2">View</span>
                      </Button>
                      <Button variant="outline" size="sm">
                        <FaDownload className="h-4 w-4" />
                        <span className="sr-only sm:not-sr-only sm:ml-2">Download</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upload Area */}
          <div className="mt-8 bg-card rounded-lg border-2 border-dashed border-card-border p-8 text-center">
            <FaUpload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Upload New Document</h3>
            <p className="text-muted-foreground mb-4">Drag and drop files here, or click to select files</p>
            <Button variant="success">
              Choose Files
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Documents;