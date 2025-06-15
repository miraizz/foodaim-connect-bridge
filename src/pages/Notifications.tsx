
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Clock, Package, ArrowLeft, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import UserProfileDropdown from "@/components/UserProfileDropdown";
import NotificationDropdown from "@/components/NotificationDropdown";

interface Notification {
  id: number;
  message: string;
  time: string;
  type: 'info' | 'success' | 'warning';
  read: boolean;
}

const Notifications = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState<Notification[]>([
    { 
      id: 1, 
      message: "New food package available for pickup", 
      time: "2 hours ago", 
      type: 'info',
      read: false 
    },
    { 
      id: 2, 
      message: "Your application has been approved", 
      time: "1 day ago", 
      type: 'success',
      read: false 
    },
    { 
      id: 3, 
      message: "Reminder: Pickup scheduled for tomorrow", 
      time: "3 hours ago", 
      type: 'warning',
      read: true 
    },
    { 
      id: 4, 
      message: "Food distribution schedule updated", 
      time: "2 days ago", 
      type: 'info',
      read: true 
    },
    { 
      id: 5, 
      message: "Monthly food assistance report available", 
      time: "3 days ago", 
      type: 'info',
      read: false 
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
    
    toast({
      title: "Notification marked as read",
      duration: 2000,
    });
  };

  const dismissNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
    
    toast({
      title: "Notification dismissed",
      duration: 2000,
    });
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
    
    toast({
      title: "All notifications marked as read",
      duration: 2000,
    });
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <Check className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <Clock className="h-5 w-5 text-orange-600" />;
      default:
        return <Package className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/beneficiary-portal" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Portal</span>
              </Link>
              <span className="text-gray-400">|</span>
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="text-xl font-bold text-gray-900">Notifications</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <NotificationDropdown />
              <UserProfileDropdown />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">All Notifications</h1>
            <p className="text-gray-600 mt-2">
              {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : 'All caught up!'}
            </p>
          </div>
          {unreadCount > 0 && (
            <Button onClick={markAllAsRead} variant="outline">
              Mark all as read
            </Button>
          )}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Bell className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
                <p className="text-gray-600">You're all caught up! Check back later for updates.</p>
              </CardContent>
            </Card>
          ) : (
            notifications.map((notification) => (
              <Card key={notification.id} className={`${!notification.read ? 'bg-blue-50 border-blue-200' : 'bg-white'}`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-base ${!notification.read ? 'font-medium text-gray-900' : 'text-gray-700'}`}>
                        {notification.message}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                      {!notification.read && (
                        <Badge className="mt-2" variant="default">
                          New
                        </Badge>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                          className="text-green-600 hover:text-green-700 hover:bg-green-50"
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Mark as read
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => dismissNotification(notification.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Dismiss
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
