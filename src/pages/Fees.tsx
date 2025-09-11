import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { FaCreditCard, FaDownload, FaCalendar, FaExclamationTriangle } from "react-icons/fa";

const Fees = () => {
  const feeBreakdown = [
    { category: "Tuition Fees", amount: 2500, status: "paid", dueDate: "2023-08-15" },
    { category: "Laboratory Fees", amount: 300, status: "paid", dueDate: "2023-08-15" },
    { category: "Library Fees", amount: 150, status: "paid", dueDate: "2023-08-15" },
    { category: "Accommodation", amount: 1200, status: "pending", dueDate: "2023-09-01" },
    { category: "Meal Plan", amount: 800, status: "pending", dueDate: "2023-09-01" },
    { category: "Technology Fee", amount: 200, status: "overdue", dueDate: "2023-07-30" },
  ];

  const totalPaid = feeBreakdown.filter(fee => fee.status === 'paid').reduce((sum, fee) => sum + fee.amount, 0);
  const totalPending = feeBreakdown.filter(fee => fee.status === 'pending').reduce((sum, fee) => sum + fee.amount, 0);
  const totalOverdue = feeBreakdown.filter(fee => fee.status === 'overdue').reduce((sum, fee) => sum + fee.amount, 0);

  const paymentHistory = [
    { date: "2023-08-15", description: "Tuition Payment - Fall 2023", amount: 2500, method: "Credit Card" },
    { date: "2023-08-15", description: "Laboratory Fees", amount: 300, method: "Bank Transfer" },
    { date: "2023-07-20", description: "Registration Fee", amount: 100, method: "Credit Card" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar className="hidden lg:flex" />
        
        <main className="flex-1 p-4 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Fee Management</h1>
            <p className="text-muted-foreground">Track and manage your academic fees</p>
          </div>

          {/* Summary Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="bg-card rounded-lg border border-card-border shadow-card p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-success">Total Paid</h3>
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                  <FaCreditCard className="h-4 w-4 text-success" />
                </div>
              </div>
              <p className="text-2xl font-bold text-success">${totalPaid.toLocaleString()}</p>
            </div>

            <div className="bg-card rounded-lg border border-card-border shadow-card p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-warning">Pending</h3>
                <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center">
                  <FaCalendar className="h-4 w-4 text-warning" />
                </div>
              </div>
              <p className="text-2xl font-bold text-warning">${totalPending.toLocaleString()}</p>
            </div>

            <div className="bg-card rounded-lg border border-card-border shadow-card p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-danger">Overdue</h3>
                <div className="w-8 h-8 bg-danger/10 rounded-lg flex items-center justify-center">
                  <FaExclamationTriangle className="h-4 w-4 text-danger" />
                </div>
              </div>
              <p className="text-2xl font-bold text-danger">${totalOverdue.toLocaleString()}</p>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {/* Fee Breakdown */}
            <div className="bg-card rounded-lg border border-card-border shadow-card p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Fee Breakdown</h2>
              
              <div className="space-y-4">
                {feeBreakdown.map((fee, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-card-border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{fee.category}</h4>
                      <p className="text-sm text-muted-foreground">Due: {fee.dueDate}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">${fee.amount.toLocaleString()}</p>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                        fee.status === 'paid' ? 'bg-success-light text-success' :
                        fee.status === 'pending' ? 'bg-warning/10 text-warning' :
                        'bg-danger/10 text-danger'
                      }`}>
                        {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-card-border">
                <Button variant="success" className="w-full">
                  <FaCreditCard className="mr-2 h-4 w-4" />
                  Make Payment
                </Button>
              </div>
            </div>

            {/* Payment History */}
            <div className="bg-card rounded-lg border border-card-border shadow-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Payment History</h2>
                <Button variant="outline" size="sm">
                  <FaDownload className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
              
              <div className="space-y-4">
                {paymentHistory.map((payment, index) => (
                  <div key={index} className="p-4 border border-card-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-foreground">{payment.description}</h4>
                      <span className="font-semibold text-success">${payment.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{payment.date}</span>
                      <span>{payment.method}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Fees;