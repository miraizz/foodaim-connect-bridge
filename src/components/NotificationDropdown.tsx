
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Check, X, Clock, Package, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

interface Notification {
  id: number;
  message: string;
  time: string;
  type: 'info' | 'success' | 'warning';
  read: boolean;
}

const NotificationDropdown = () => {
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
        return <Check className="h-4 w-4 text-green-600" />;
      case 'warning':
        return <Clock className="h-4 w-4 text-orange-600" />;
      default:
        return <Package className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel className="flex justify-between items-center">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={markAllAsRead}
              className="text-xs h-6 px-2"
            >
              Mark all read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No notifications</p>
          </div>
        ) : (
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="p-0">
                <Card className={`w-full border-0 shadow-none ${!notification.read ? 'bg-blue-50' : ''}`}>
                  <CardContent className="p-3">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm ${!notification.read ? 'font-medium' : 'text-gray-600'}`}>
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                      <div className="flex space-x-1">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                            className="h-6 w-6 p-0"
                          >
                            <Check className="h-3 w-3" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => dismissNotification(notification.id)}
                          className="h-6 w-6 p-0 text-gray-400 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DropdownMenuItem>
            ))}
          </div>
        )}
        
        {notifications.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center p-0">
              <Link to="/notifications" className="w-full">
                <Button variant="ghost" size="sm" className="text-xs w-full">
                  <FileText className="h-3 w-3 mr-1" />
                  View all notifications
                </Button>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;
