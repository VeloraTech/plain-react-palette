const FeesSection = () => {
  const feeItems = [
    { name: "School Fees", amount: "$2,500" },
    { name: "Accommodation", amount: "$1,200" },
    { name: "Pending Balance", amount: "$3,700" },
  ];

  return (
    <div className="bg-card rounded-lg border border-card-border shadow-card p-6">
      <h2 className="text-xl font-semibold text-foreground mb-6">Fees</h2>
      
      <div className="space-y-4">
        {feeItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2">
            <span className="text-foreground font-medium">{item.name}</span>
            <span className="text-lg font-semibold text-foreground">{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeesSection;