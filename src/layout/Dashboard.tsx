import { Outlet, NavLink, Navigate, useNavigate } from "react-router-dom";
import { Home, Settings, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import tokenStore from "@/store/tokenStore";
import { paths } from "@/constants";
import { useState } from "react";
import { showSuccess } from "@/lib/generalUtils";

const Dashboard = () => {
  const { token, setToken } = tokenStore();
  const navigate = useNavigate();
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const menuItems = [
    {
      to: "#",
      icon: <Home className="mr-2 h-4 w-4" />,
      label: "Dashboard",
    },
    {
      to: "#",
      icon: <User className="mr-2 h-4 w-4" />,
      label: "Profile",
    },
    {
      to: "#",
      icon: <Settings className="mr-2 h-4 w-4" />,
      label: "Settings",
    },
  ];

  const handleLogout = () => {
    showSuccess("Logout successful");
    setToken(null);
    navigate(`/${paths.AUTH}/${paths.SIGNIN}`);
  };

  if (token == null) {
    return <Navigate to={`/${paths.AUTH}/${paths.SIGNIN}`} replace={true} />;
  }

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">My App</h2>
          </div>

          <nav className="p-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center w-full mb-2 px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-secondary text-secondary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Logout Button */}
          <div className="absolute bottom-0 left-0 w-64 p-4 border-t">
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => setIsLogoutDialogOpen(true)}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      <AlertDialog
        open={isLogoutDialogOpen}
        onOpenChange={setIsLogoutDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to logout?
            </AlertDialogTitle>
            <AlertDialogDescription>
              You will be redirected to the login page and your current session
              will be terminated.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Dashboard;
