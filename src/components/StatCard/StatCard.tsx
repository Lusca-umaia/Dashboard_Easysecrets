import { LuTrendingUp } from "react-icons/lu";

interface StatCardProps {
  title: string;
  value: string | number;
  extraInformation?: {
    label: string;
    value: string | number;
  }[];
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  extraInformation,
  value,
}) => {
  return (
    <div className="bg-card rounded-lg space-y-6 border shadow-sm p-6">
      <span className="text-sm justify-between flex items-center gap-2">
        <h3 className=" font-semibold leading-none tracking-tight">{title}</h3>
        <LuTrendingUp className="text-base text-muted-foreground" />
      </span>
      <div>
        <p className="text-2xl font-bold">{value}</p>
        {extraInformation?.map(({ label, value }, index) => (
          <span key={index} className="text-sm text-muted-foreground">
            {label}: {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StatCard;
