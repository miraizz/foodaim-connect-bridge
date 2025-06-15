
import UpcomingPickups from "@/components/UpcomingPickups";
import QuickStatsCard from "@/components/QuickStatsCard";
import RecentActivity from "@/components/RecentActivity";

interface Pickup {
  id: number;
  location: string;
  date: string;
  time: string;
  status: string;
  items: string[];
}

interface Activity {
  id: number;
  action: string;
  location: string;
  date: string;
}

interface OverviewTabProps {
  upcomingPickups: Pickup[];
  recentActivity: Activity[];
}

const OverviewTab = ({ upcomingPickups, recentActivity }: OverviewTabProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Pickups */}
        <div className="lg:col-span-2">
          <UpcomingPickups pickups={upcomingPickups} />
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <QuickStatsCard />
        </div>
      </div>

      {/* Recent Activity */}
      <RecentActivity activities={recentActivity} />
    </div>
  );
};

export default OverviewTab;
